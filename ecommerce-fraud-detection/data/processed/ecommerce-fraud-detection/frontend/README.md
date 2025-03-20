# Frontend Documentation for E-commerce Fraud Detection

## Overview
This frontend application serves as the user interface for the E-commerce Fraud Detection project. It allows users to interact with the backend API, submit transaction data for fraud detection, and view the results.

## Setup Instructions
1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd ecommerce-fraud-detection/frontend
   ```

2. **Install Dependencies**
   Make sure you have Node.js installed. Then, run the following command to install the required packages:
   ```bash
   npm install
   ```

3. **Run the Application**
   Start the development server with:
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:3000`.

## Usage
- **Submitting Transactions**: Users can input transaction details through the provided form in the application.
- **Viewing Results**: After submission, the application will display the results of the fraud detection model, indicating whether the transaction is fraudulent or not.

## Components
- **App.js**: The main component that sets up routing and layout.
- **FraudResults.js**: Displays the results of the fraud detection.
- **api.js**: Contains functions for making API calls to the backend.

## Styling
The application is styled using CSS defined in `App.css`. You can modify the styles to customize the appearance of the application.

## Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.