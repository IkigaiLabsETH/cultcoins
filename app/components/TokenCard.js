// components/TokenCard.js

import React from 'react';
import styles from './TokenCard.css';

const TokenCard = () => {
    const handleSwap = () => {
        alert('Swap functionality triggered!');
        // Add your swap logic here
    };

    return (
        <div className={styles.card}>
            <h2 className={styles.title}>MiniPEPE</h2>
            <div className={styles.tokenInfo}>
                <div className={styles.price}>$0.0001386</div>
                <div className={styles.riskScore}>Risk Score: 8000</div>
            </div>
            <div className={styles.chart}>
                <p>Chart Placeholder</p>
                {/* Replace with actual chart component, e.g., Chart.js */}
            </div>
            <button className={styles.swapButton} onClick={handleSwap}>
                Swap
            </button>
        </div>
    );
};

export default TokenCard;