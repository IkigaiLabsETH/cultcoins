"use client";

import React, { useState, useEffect } from 'react';
import { getTokenData } from '../api/token';

const TokenData = ({ chainId, pairIdOrTokenId }) => {
    const [tokenData, setTokenData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getTokenData(chainId, pairIdOrTokenId);
                setTokenData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [chainId, pairIdOrTokenId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Token Data</h1>
            <pre>{JSON.stringify(tokenData, null, 2)}</pre>
        </div>
    );
};

export default TokenData;