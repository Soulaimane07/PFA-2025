from fastapi import FastAPI, UploadFile, File, Body
from pydantic import BaseModel
from typing import Optional
import pandas as pd
import numpy as np
import joblib
import io
import threading
import time
import json
import random
import ssl
import paho.mqtt.client as mqtt

from treatment_utils import suggest_treatment

# ---------------- FastAPI Setup ----------------
app = FastAPI()
model = joblib.load("model.pkl")

class WaterData(BaseModel):
    pH: float
    Hardness: float
    Solids: float
    Chloramines: float
    Sulfate: float
    Conductivity: float
    Organic_carbon: float
    Trihalomethanes: float
    Turbidity: float
    water_level: Optional[float] = None
    tank_capacity: Optional[float] = None

@app.get("/")
def root():
    return {"message": "Unified IoT + ML FastAPI App running"}


def predict_from_dict(values: dict):
    features = np.array([[values["pH"], values["Hardness"], values["Solids"], values["Chloramines"],
                          values["Sulfate"], values["Conductivity"], values["Organic_carbon"],
                          values["Trihalomethanes"], values["Turbidity"]]])
    potability = model.predict(features)[0]

    response = {
        "potable": bool(potability),
        "water_level": values.get("water_level"),
        "tank_capacity": values.get("tank_capacity")
    }
    if not potability:
        response["treatments"] = suggest_treatment(values)
    return response


@app.post("/predict/json")
async def predict_json(data: WaterData = Body(...)):
    return predict_from_dict(data.dict())


@app.post("/predict/file")
async def predict_file(file: UploadFile = File(...)):
    contents = await file.read()
    if file.filename.endswith(".csv"):
        df = pd.read_csv(io.StringIO(contents.decode("utf-8")))
    elif file.filename.endswith(".xlsx"):
        df = pd.read_excel(io.BytesIO(contents))
    else:
        return {"error": "Unsupported file format"}

    results = []
    for _, row in df.iterrows():
        values = row.to_dict()
        features = np.array([[values.get("pH"), values.get("Hardness"), values.get("Solids"),
                              values.get("Chloramines"), values.get("Sulfate"), values.get("Conductivity"),
                              values.get("Organic_carbon"), values.get("Trihalomethanes"), values.get("Turbidity")]])
        potability = model.predict(features)[0]

        result = {
            "potable": bool(potability),
            "water_level": values.get("water_level"),
            "tank_capacity": values.get("tank_capacity")
        }
        if not potability:
            result["treatments"] = suggest_treatment(values)
        results.append(result)

    return results

# ---------------- MQTT IoT Publisher ----------------
def start_iot_simulation():
    AWS_IOT_ENDPOINT = "ai42krv5kjxh9-ats.iot.us-east-1.amazonaws.com"
    TOPIC = "watersensor01/data"

    client = mqtt.Client()

    client.tls_set(
        ca_certs="./connect_device_package/AmazonRootCA1.pem",
        certfile="./connect_device_package/WaterSensor01.cert.pem",
        keyfile="./connect_device_package/WaterSensor01.private.key",
        tls_version=ssl.PROTOCOL_TLSv1_2
    )

    client.connect(AWS_IOT_ENDPOINT, 8883, 60)
    client.loop_start()

    try:
            payload = {
                "device_id": "WaterSensor01",
                "timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),
                "pH": round(random.uniform(6.5, 8.5), 2),
                "Hardness": round(random.uniform(100, 300), 2),
                "Solids": round(random.uniform(500, 1500), 2),
                "Chloramines": round(random.uniform(0.5, 4), 2),
                "Sulfate": round(random.uniform(50, 300), 2),
                "Conductivity": round(random.uniform(200, 800), 2),
                "Organic_carbon": round(random.uniform(1, 5), 2),
                "Trihalomethanes": round(random.uniform(30, 100), 2),
                "Turbidity": round(random.uniform(1, 5), 2),
                "water_level": round(random.uniform(10, 100), 2),
                "tank_capacity": 100.0
            }

            client.publish(TOPIC, json.dumps(payload))
            print(f"Sent: {payload}")
            time.sleep(10)

            prediction_result = predict_from_dict(payload)
            print(f"Prediction Result: {prediction_result}")

    except Exception as e:
        print("IoT Simulation Error:", e)
    finally:
        client.loop_stop()
        client.disconnect()

# ---------------- IoT Trigger Endpoint ----------------
@app.post("/simulate/iot")
def simulate_iot_data():
    t = threading.Thread(target=start_iot_simulation, daemon=True)
    t.start()
    return {"message": "IoT simulation started in the background"}
