import csv
from pymongo import MongoClient

def extract():
    data = []
    file_path = "D:/Coding/PFA-2025/Data/cleaned_global_water_consumption.csv"

    try:
        with open(file_path, mode='r', encoding='utf-8') as file:
            reader = csv.DictReader(file)  # ✅ Read CSV as dictionary
            data = list(reader)  # ✅ Convert CSV to a list of dictionaries
        print("Extracted data")
    except FileNotFoundError:
        print(f"Error: File not found at {file_path}")

    return data


def transform(data):
    columns_to_remove = ["Per Capita Water Use (Liters per Day)", "Agricultural Water Use (%)", "Household Water Use (%)", "Rainfall Impact (Annual Precipitation in mm)", "Groundwater Depletion Rate (%)"]  # Replace with actual column names

    transformed_data = []
    for row in data:
        transformed_row = {key: value for key, value in row.items() if key not in columns_to_remove}
        transformed_data.append(transformed_row)

    print("Transformed data")
    return transformed_data

    

def load(data, db_name="WaterDB", collection_name="WaterConsumption", output_file="exported_data.csv"):
    try:
        client = MongoClient("mongodb://localhost:27017/")
        db = client[db_name]
        collection = db[collection_name]

        data = list(collection.find({}, {"_id": 0}))  # Exclude MongoDB "_id" field

        if not data:
            print("No data found in MongoDB!")
            return

        with open(output_file, mode="w", encoding="utf-8", newline="") as file:
            writer = csv.DictWriter(file, fieldnames=data[0].keys())  # Get headers from first document
            writer.writeheader()  # Write CSV headers
            writer.writerows(data)  # Write data rows

        print(f"Data successfully exported to {output_file}")
    
    except Exception as e:
        print(f"Error loading data: {e}")

    finally:
        client.close()







def etl():
    raw_data = extract()  # Step 1: Extract
    transformed_data = transform(raw_data)  # Step 2: Transform (remove columns)
    load(transformed_data)  # Step 3: Load

etl()
