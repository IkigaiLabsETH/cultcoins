import React, { useState } from 'react';
import './swap.css';

const Swap = () => {
  const [tokenAmount, setTokenAmount] = useState(0);
  const [nftAmount, setNftAmount] = useState(0);

  const handleTokenChange = (e) => {
    setTokenAmount(e.target.value);
  };

  const handleNftChange = (e) => {
    setNftAmount(e.target.value);
  };

  const connectWallet = () => {
    // Logic to connect wallet
    console.log('Connect Wallet');
  };

  return (
    <div className="container">
      <div className="swapBox">
        <div className="section">
          <p>You are trading tokens</p>
          <div className="inputBox">
            <span>$VIBES</span>
            <input
              type="number"
              value={tokenAmount}
              onChange={handleTokenChange}
              className="input"
            />
          </div>
        </div>
        <div className="swapIcon">
          <span>⇅</span>
        </div>
        <div className="section">
          <p>For nfts</p>
          <div className="inputBox">
            <span>DegenVibes</span>
            <input
              type="number"
              value={nftAmount}
              onChange={handleNftChange}
              className="input"
            />
          </div>
        </div>
        <p>3.3% Txn fee</p>
        <p>69,000 VIBES</p>
        <button onClick={connectWallet} className="button">
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default Swap;