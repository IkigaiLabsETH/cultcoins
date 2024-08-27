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
                    <strong>Base Token Name:</strong> {data.baseToken?.name || 'N/A'}
                </div>
                <div className="token-item">
                    <strong>Base Token Symbol:</strong> {data.baseToken?.symbol || 'N/A'}
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
                {/* Add more fields as necessary */}
            </div>
        </div>
    );
};

export default TokenData;