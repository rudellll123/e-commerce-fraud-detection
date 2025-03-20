import React from 'react';

const FraudResults = ({ results }) => {
    return (
        <div className="fraud-results">
            <h2>Fraud Detection Results</h2>
            {results.length > 0 ? (
                <ul>
                    {results.map((result, index) => (
                        <li key={index}>
                            Transaction ID: {result.transactionId} - Status: {result.isFraud ? 'Fraudulent' : 'Legitimate'}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No results to display.</p>
            )}
        </div>
    );
};

export default FraudResults;