import paho.mqtt.client as mqtt
import ssl
import time
import json
import random

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
    while True:
        payload = {
            "device_id": "WaterSensor01",
            "timestamp": time.strftime("%Y-%m-%dT%H:%M:%SZ"),
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
        time.sleep(60)  # wait for 60 seconds (1 minute)
except KeyboardInterrupt:
    print("Exiting...")
    client.loop_stop()
    client.disconnect()
