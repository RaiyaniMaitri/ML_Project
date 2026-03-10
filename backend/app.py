from flask import Flask, request, jsonify
import numpy as np
import joblib
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load model (which is a Pipeline including its own scaler)
try:
    model = joblib.load("model.pkl")
except Exception as e:
    print(f"Error loading model: {e}")
    model = None

@app.route("/")
def home():
    return "Heart Disease Prediction API Running"

@app.route("/predict", methods=["POST"])
def predict():
    if model is None:
        return jsonify({"error": "Model not loaded"}), 500
    
    data = request.json
    
    try:
        # Extract features and convert to float
        age = float(data["age"])
        gender = float(data["gender"])
        height = float(data["height"])
        weight = float(data["weight"])
        ap_hi = float(data["ap_hi"])
        ap_lo = float(data["ap_lo"])
        cholesterol = float(data["cholesterol"])
        gluc = float(data["gluc"])
        smoke = float(data["smoke"])
        alco = float(data["alco"])
        active = float(data["active"])

        # Calculate BMI (weight in kg / height in meters squared)
        bmi = weight / ((height / 100) ** 2)

        # Assemble features into the correct order (12 features required by the pipeline)
        features = np.array([
            age, gender, height, weight, ap_hi, ap_lo, 
            cholesterol, gluc, smoke, alco, active, bmi
        ]).reshape(1, -1)

        # The model is a Pipeline, so it handles its own internal scaling automatically.
        result = model.predict(features)
        
        # Get probabilities for risk meter
        try:
            proba = model.predict_proba(features)
            risk_probability = float(proba[0][1]) # Chance of High Risk (class 1)
        except:
            risk_probability = 0.5 if result[0] == 1 else 0.1

        return jsonify({
            "prediction": int(result[0]),
            "probability": round(risk_probability * 100, 2)
        })
    except Exception as e:
        print(f"Prediction error: {e}")
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run(debug=True, port=5000)