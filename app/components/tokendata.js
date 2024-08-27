import React, { useEffect, useState } from 'react';
import { getTokenData } from '../api/token';
import './tokendata.css'; // Import CSS for styling

const TokenData = ({ chainId, pairIdOrTokenId }) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getTokenData(chainId, pairIdOrTokenId);
                setData(result);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, [chainId, pairIdOrTokenId]);

    const formatJson = (json) => {
        if (typeof json === 'string') {
            try {
                json = JSON.parse(json);
            } catch (e) {
                return json;
            }
        }

        if (typeof json === 'object' && json !== null) {
            return (
                <ul>
                    {Object.entries(json).map(([key, value]) => (
                        <li key={key}><strong>{key}:</strong> {JSON.stringify(value)}</li>
                    ))}
                </ul>
            );
        }

        return json;
    };

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    if (!data) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="token-data">
            <h1>Token Data</h1>
            <div className="token-details">
                <div className="token-item">
                    <strong>URL:</strong> <a href={data.url} target="_blank" rel="noopener noreferrer">{data.url || 'N/A'}</a>
                </div>
                <div className="token-item">
                    <strong>Chain ID:</strong> {data.chainId || 'N/A'}
                </div>
                <div className="token-item">
                    <strong>DEX ID:</strong> {data.dexId || 'N/A'}
                </div>
                <div className="token-item">
                    <strong>Pair Address:</strong> {data.pairAddress || 'N/A'}
                </div>
                <div className="token-item">
                    <strong>Base Token Address:</strong> {data.baseToken?.address || 'N/A'}
                </div>
                <div className="token-item">
                    <strong>Base Token Name:</strong> {data.baseToken?.name || 'N/A'}
                </div>
                <div className="token-item">
                    <strong>Base Token Symbol:</strong> {data.baseToken?.symbol || 'N/A'}
                </div>
                <div className="token-item">
                    <strong>Quote Token Address:</strong> {data.quoteToken?.address || 'N/A'}
                </div>
                <div className="token-item">
                    <strong>Quote Token Name:</strong> {data.quoteToken?.name || 'N/A'}
                </div>
                <div className="token-item">
                    <strong>Quote Token Symbol:</strong> {data.quoteToken?.symbol || 'N/A'}
                </div>
                <div className="token-item">
                    <strong>Price (Native):</strong> {data.priceNative || 'N/A'}
                </div>
                <div className="token-item">
                    <strong>Price (USD):</strong> {data.priceUsd || 'N/A'}
                </div>
                <div className="token-item">
                    <strong>Market Cap:</strong> ${data.marketCap || 'N/A'}
                </div>
                <div className="token-item">
                    <strong>FDV:</strong> ${data.fdv || 'N/A'}
                </div>
                <div className="token-item">
                    <strong>Created At:</strong> {new Date(data.createdAt).toLocaleString() || 'N/A'}
                </div>
                <div className="token-item">
                    <strong>Profile Description:</strong> {data.profile?.description || 'N/A'}
                </div>
                <div className="token-item">
                    <strong>Profile Links:</strong> 
                    {data.profile?.links?.map((link, index) => (
                        <span key={index}>
                            <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                            {index < data.profile.links.length - 1 && ', '}
                        </span>
                    )) || 'N/A'}
                </div>
                <div className="token-item">
                    <strong>Txns (5m):</strong> {formatJson(data.txns?.m5) || 'N/A'}
                </div>
                <div className="token-item">
                    <strong>Txns (1h):</strong> {formatJson(data.txns?.h1) || 'N/A'}
                </div>
                <div className="token-item">
                    <strong>Txns (6h):</strong> {formatJson(data.txns?.h6) || 'N/A'}
                </div>
                <div className="token-item">
                    <strong>Txns (24h):</strong> {formatJson(data.txns?.h24) || 'N/A'}
                </div>
                <div className="token-item">
                    <strong>Volume (5m):</strong> {formatJson(data.volume?.m5) || 'N/A'}
                </div>
                <div className="token-item">
                    <strong>Volume (1h):</strong> {formatJson(data.volume?.h1) || 'N/A'}
                </div>
                <div className="token-item">
                    <strong>Volume (6h):</strong> {formatJson(data.volume?.h6) || 'N/A'}
                </div>
                <div className="token-item">
                    <strong>Volume (24h):</strong> {formatJson(data.volume?.h24) || 'N/A'}
                </div>
                <div className="token-item">
                    <strong>Makers (5m):</strong> {formatJson(data.makers?.m5) || 'N/A'}
                </div>
                <div className="token-item">
                    <strong>Makers (1h):</strong> {formatJson(data.makers?.h1) || 'N/A'}
                </div>
                <div className="token-item">
                    <strong>Makers (6h):</strong> {formatJson(data.makers?.h6) || 'N/A'}
                </div>
                <div className="token-item">
                    <strong>Makers (24h):</strong> {formatJson(data.makers?.h24) || 'N/A'}
                </div>
                <div className="token-item">
                    <strong>Price Change:</strong> {formatJson(data.priceChange) || 'N/A'}
                </div>
                <div className="token-item">
                    <strong>Liquidity:</strong> {formatJson(data.liquidity) || 'N/A'}
                </div>
                <div className="token-item">
                    <strong>Moonshot Curve Type:</strong> {data.moonshot?.curveType || 'N/A'}
                </div>
                <div className="token-item">
                    <strong>Moonshot Curve Position:</strong> {data.moonshot?.curvePosition || 'N/A'}
                </div>
                <div className="token-item">
                    <strong>Moonshot Marketcap Threshold:</strong> {data.moonshot?.marketcapThreshold || 'N/A'}
                </div>
                <div className="token-item">
                    <strong>Profile Icon:</strong> <img src={data.profile?.icon} alt="Profile Icon" />
                </div>
                <div className="token-item">
                    <strong>Profile Banner:</strong> <img src={data.profile?.banner} alt="Profile Banner" />
                </div>
                {/* Add more fields as necessary */}
            </div>
        </div>
    );
};

export default TokenData;