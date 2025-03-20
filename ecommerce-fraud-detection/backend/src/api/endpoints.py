from flask import Blueprint, request, jsonify
import joblib
import pandas as pd
from utils.data_preprocessing import preprocess_data

api = Blueprint('api', __name__)

# Load the trained model
model = joblib.load('src/models/fraud_detection_model.pkl')

@api.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    if not data:
        return jsonify({'error': 'No input data provided'}), 400

    # Preprocess the input data
    try:
        input_data = pd.DataFrame(data)
        processed_data = preprocess_data(input_data)
    except Exception as e:
        return jsonify({'error': str(e)}), 400

    # Make predictions
    predictions = model.predict(processed_data)

    return jsonify({'predictions': predictions.tolist()}), 200

@api.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy'}), 200