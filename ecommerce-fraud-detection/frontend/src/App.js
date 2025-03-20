import React, { useState, useEffect } from 'react';
import './styles/App.css';
import FraudResults from './components/FraudResults';
import { fetchFraudResults } from './services/api';

function App() {
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getFraudResults = async () => {
            try {
                const data = await fetchFraudResults();
                setResults(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getFraudResults();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="App">
            <h1>E-commerce Fraud Detection</h1>
            <FraudResults results={results} />
        </div>
    );
}

export default App;