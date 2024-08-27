"use client";

import React from 'react';
// import Launch from "./components/launch";
import TokenData from './components/tokendata'; // Import TokenData component
import { buyIx } from './api/buy'; // Import buyIx function
import { sellIx } from './api/sell'; // Import sellIx function
import './styles.css'; // Import the CSS file
// import Button from './components/button'; // Import the Button component
// import Dashboard from './components/Dashboard';




const Home = () => {
  const chainId = 'solana';
  const pairIdOrTokenId = 'DSnDXHUgTba1WrnQaBaZD39CjiJ6yjkwi2t5mcrP2a6L';

  const handleBuy = async () => {
    try {
      await buyIx();
      alert('Token bought successfully!');
    } catch (error) {
      console.error('Error buying token:', error);
      alert('Failed to buy token.');
    }
  };

  const handleSell = async () => {
    try {
      await sellIx();
      alert('Token sold successfully!');
    } catch (error) {
      console.error('Error selling token:', error);
      alert('Failed to sell token.');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="token-data-section">
        <TokenData chainId={chainId} pairIdOrTokenId={pairIdOrTokenId} /> {/* Use TokenData component */}
      </div>
      <div className="button-container">
        <button className="buy-button" onClick={handleBuy}>
          <span className="icon">⬆️</span> Buy
        </button>
        <button className="sell-button" onClick={handleSell}>
          <span className="icon">⬇️</span> Sell
        </button>
      </div>
    </main>
  );
}

export default Home;