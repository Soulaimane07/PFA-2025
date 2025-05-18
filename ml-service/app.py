from fastapi import FastAPI, UploadFile, File, Body
from pydantic import BaseModel
import pandas as pd
import io
import numpy as np
import joblib
from treatment_utils import suggest_treatment
from typing import Optional

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
    return {"message": "FastAPI ML service is running"}

@app.post("/predict/json")
async def predict_json(data: WaterData = Body(...)):
    features = np.array([[data.pH, data.Hardness, data.Solids, data.Chloramines, data.Sulfate,
                          data.Conductivity, data.Organic_carbon, data.Trihalomethanes, data.Turbidity]])
    potability = model.predict(features)[0]

    response = {
        "potable": bool(potability),
        "water_level": data.water_level,
        "tank_capacity": data.tank_capacity
    }
    if not potability:
        response["treatments"] = suggest_treatment(data.dict())
    return response

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
        features_list = [
            values.get("pH"),
            values.get("Hardness"),
            values.get("Solids"),
            values.get("Chloramines"),
            values.get("Sulfate"),
            values.get("Conductivity"),
            values.get("Organic_carbon"),
            values.get("Trihalomethanes"),
            values.get("Turbidity")
        ]
        features = np.array([features_list])
        potability = model.predict(features)[0]

        result = {
            "potable": bool(potability),
            "water_level": values.get("water_level"),
            "tank_capacity": values.get("tank_capacity")
        }
        if not potability:
            result["treatments"] = suggest_treatment(values)
        results.append(result)

    return  results
