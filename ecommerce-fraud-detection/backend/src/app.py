from flask import Flask
from flask import request, jsonify
import pickle
from utils.data_preprocessing import preprocess_data

app = Flask(__name__)

# Load the trained model
with open('src/models/fraud_detection_model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.get_json()
    processed_data = preprocess_data(data)
    prediction = model.predict(processed_data)
    return jsonify({'prediction': prediction.tolist()})

if __name__ == '__main__':
    app.run(debug=True)