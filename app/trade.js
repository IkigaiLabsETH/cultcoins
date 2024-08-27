import React from 'react';
import TokenTrade from '../components/tokentrade';
import { buyIx } from '../api/buy';
import { sellIx } from '../api/sell';

const TradePage = () => {
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
    <div>
      <h1>Trade Page</h1>
      <TokenTrade />
      <button onClick={handleBuy}>Buy Token</button>
      <button onClick={handleSell}>Sell Token</button>
    </div>
  );
};

export default TradePage;