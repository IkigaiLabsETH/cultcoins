import React, { useEffect, useState } from 'react';
import './meteora.css';

const Meteora = () => {
    const [metrics, setMetrics] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchMetrics = async () => {
        try {
            const response = await fetch('https://dlmm-api.meteora.ag/info/protocol_metrics');
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            const data = await response.json();
            setMetrics(data);
        } catch (error) {
            setError(`Failed to fetch metrics: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMetrics();
    }, []);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    return (
        <div className="meteora-container">
            <h1 className="meteora-title">Protocol Metrics</h1>
            <div className="meteora-details">
                <div className="meteora-item">
                    <strong>Daily Fee</strong>
                    <p>{metrics.daily_fee}</p>
                </div>
                <div className="meteora-item">
                    <strong>Daily Trade Volume</strong>
                    <p>{metrics.daily_trade_volume}</p>
                </div>
                <div className="meteora-item">
                    <strong>Total Fee</strong>
                    <p>{metrics.total_fee}</p>
                </div>
                <div className="meteora-item">
                    <strong>Total Trade Volume</strong>
                    <p>{metrics.total_trade_volume}</p>
                </div>
                <div className="meteora-item">
                    <strong>Total TVL</strong>
                    <p>{metrics.total_tvl}</p>
                </div>
            </div>
        </div>
    );
};

export default Meteora;