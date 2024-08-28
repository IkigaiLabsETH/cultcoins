import React, { useEffect, useState } from 'react';
import './PairData.css';

const PairData = () => {
    const [pairData, setPairData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchPairData = async () => {
        try {
            const response = await fetch('https://dlmm-api.meteora.ag/pair/FbkX1h2YTs171cEMa4GrV7XbAiQt5zSmV2CjfYWxXJDP', {
                headers: {
                    'accept': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            const data = await response.json();
            setPairData(data);
        } catch (error) {
            setError(`Failed to fetch pair data: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPairData();
    }, []);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    return (
        <div className="pair-data-container">
            <h1 className="pair-data-title">Pair Data</h1>
            <div className="pair-data-details">
                <div className="pair-data-item">
                    <strong>Address</strong>
                    <p>{pairData.address}</p>
                </div>
                <div className="pair-data-item">
                    <strong>Name</strong>
                    <p>{pairData.name}</p>
                </div>
                <div className="pair-data-item">
                    <strong>Mint X</strong>
                    <p>{pairData.mint_x}</p>
                </div>
                <div className="pair-data-item">
                    <strong>Mint Y</strong>
                    <p>{pairData.mint_y}</p>
                </div>
                <div className="pair-data-item">
                    <strong>Reserve X</strong>
                    <p>{pairData.reserve_x}</p>
                </div>
                <div className="pair-data-item">
                    <strong>Reserve Y</strong>
                    <p>{pairData.reserve_y}</p>
                </div>
                <div className="pair-data-item">
                    <strong>Reserve X Amount</strong>
                    <p>{pairData.reserve_x_amount}</p>
                </div>
                <div className="pair-data-item">
                    <strong>Reserve Y Amount</strong>
                    <p>{pairData.reserve_y_amount}</p>
                </div>
                <div className="pair-data-item">
                    <strong>Current Price</strong>
                    <p>{pairData.current_price}</p>
                </div>
                <div className="pair-data-item">
                    <strong>APR</strong>
                    <p>{pairData.apr}</p>
                </div>
                <div className="pair-data-item">
                    <strong>APY</strong>
                    <p>{pairData.apy}</p>
                </div>
                {/* Add more fields as needed */}
            </div>
        </div>
    );
};

export default PairData;