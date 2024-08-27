"use client";

import React from 'react';
import Launch from "./components/launch";
import TokenData from './components/tokendata'; // Import TokenData component
import { buyIx } from './api/buy'; // Import buyIx function
import { sellIx } from './api/sell'; // Import sellIx function

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
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      </div>
      <Launch />
      <TokenData chainId={chainId} pairIdOrTokenId={pairIdOrTokenId} /> {/* Use TokenData component */}
      <button onClick={handleBuy}>Buy Token</button> {/* Add Buy button */}
      <button onClick={handleSell}>Sell Token</button> {/* Add Sell button */}
    </main>
  );
}

export default Home;