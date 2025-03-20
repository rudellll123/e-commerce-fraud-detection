# E-commerce Fraud Detection Project

This project aims to build an AI machine learning model for detecting fraudulent transactions in an e-commerce setting. The project is structured into two main components: a backend API that handles the machine learning model and a frontend application that displays the results.

## Project Structure

```
ecommerce-fraud-detection
├── backend
│   ├── src
│   │   ├── app.py                # Main entry point for the backend application
│   │   ├── models
│   │   │   └── fraud_detection_model.pkl  # Trained machine learning model
│   │   ├── utils
│   │   │   └── data_preprocessing.py     # Utility functions for data preprocessing
│   │   └── api
│   │       └── endpoints.py        # API endpoints for predictions and results
│   ├── requirements.txt            # Python dependencies for the backend
│   └── README.md                   # Documentation for the backend
├── frontend
│   ├── public
│   │   └── index.html              # Main HTML file for the frontend application
│   ├── src
│   │   ├── App.js                  # Main component of the React application
│   │   ├── components
│   │   │   └── FraudResults.js     # Component to display fraud detection results
│   │   ├── services
│   │   │   └── api.js              # Functions for making API calls to the backend
│   │   └── styles
│   │       └── App.css             # CSS styles for the frontend application
│   ├── package.json                # Configuration file for npm
│   └── README.md                   # Documentation for the frontend
├── data
│   ├── raw
│   │   └── transactions.csv         # Raw transaction data
│   └── processed
│       └── transactions_cleaned.csv # Cleaned transaction data for model training
├── notebooks
│   └── baseline_feature_selection.ipynb # Jupyter notebook for feature selection
├── .gitignore                       # Files and directories to ignore in version control
└── README.md                        # Overview of the entire project
```

## Setup Instructions

### Backend

1. Navigate to the `backend` directory.
2. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```
3. Run the backend application:
   ```
   python src/app.py
   ```

### Frontend

1. Navigate to the `frontend` directory.
2. Install the required dependencies:
   ```
   npm install
   ```
3. Start the frontend application:
   ```
   npm start
   ```

## Usage

- The backend API provides endpoints for sending transaction data and receiving fraud detection results.
- The frontend application allows users to input transaction data and view the results of the fraud detection model.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any improvements or bug fixes.