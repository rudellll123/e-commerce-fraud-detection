# Backend Documentation for E-commerce Fraud Detection Project

## Overview
This backend application serves as the core of the E-commerce Fraud Detection project. It is built using Flask and is responsible for handling API requests related to fraud detection.

## Project Structure
- **src/**: Contains the main application code.
  - **app.py**: The entry point for the Flask application.
  - **models/**: Contains the trained machine learning model.
  - **utils/**: Utility functions for data preprocessing.
  - **api/**: Defines the API endpoints for the application.

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd ecommerce-fraud-detection/backend
   ```

2. Create a virtual environment:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Run the application:
   ```
   python src/app.py
   ```

## API Usage
The backend exposes several API endpoints for interacting with the fraud detection model. 

### Endpoints
- **POST /predict**: Sends transaction data to the model for fraud prediction.
- **GET /results**: Retrieves the results of the last prediction.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.