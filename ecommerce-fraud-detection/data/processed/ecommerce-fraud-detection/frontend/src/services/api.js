import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust the URL based on your backend configuration

export const sendTransactionData = async (transactionData) => {
    try {
        const response = await axios.post(`${API_URL}/predict`, transactionData);
        return response.data;
    } catch (error) {
        console.error('Error sending transaction data:', error);
        throw error;
    }
};

export const getFraudResults = async () => {
    try {
        const response = await axios.get(`${API_URL}/results`);
        return response.data;
    } catch (error) {
        console.error('Error fetching fraud results:', error);
        throw error;
    }
};