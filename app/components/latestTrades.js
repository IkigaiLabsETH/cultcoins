"use client"; // Add this line to mark the component as a client component

import React, { useEffect, useState } from 'react';
import { getLatestTrades, Trade } from '../api/latestTrades';

const LatestTradesComponent = () => {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    async function fetchTrades() {
      const latestTrades = await getLatestTrades();
      setTrades(latestTrades);
    }
    fetchTrades();
  }, []);

  return (
    <div>
      <h1>Latest Trades</h1>
      {trades.map((trade) => (
        <div key={trade.txnId} className="trade">
          <p><strong>Pair ID:</strong> {trade.pairId}</p>
          <p><strong>Type:</strong> {trade.type}</p>
          <p><strong>Amount:</strong> {trade.amount0} / {trade.amount1}</p>
          <p><strong>Price (USD):</strong> {trade.priceUsd}</p>
          <p><strong>Volume (USD):</strong> {trade.volumeUsd}</p>
        </div>
      ))}
    </div>
  );
};

export default LatestTradesComponent;