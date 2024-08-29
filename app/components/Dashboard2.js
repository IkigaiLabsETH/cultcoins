import React from 'react';
import './Dashboard2.css'; // Import new CSS for styling

const Dashboard = ({ chainId, pairIdOrTokenId }) => {
    return (
        <div className="dashboard">
            <div className="chart-container">
                {/* Placeholder for the chart */}
                <div className="chart-placeholder">Chart goes here</div>
            </div>
            <div className="data-container">
                <div className="header">
                    <h1>Dashboard</h1>
                    <div className="total-balance">
                        <h2>Total Balance</h2>
                        <p>$154,610.00</p>
                    </div>
                </div>
                <div className="token-info">
                    <div className="token-header">
                        <h2>MiniPEPE</h2>
                        <p>0.0001386 SOL</p>
                    </div>
                    <div className="token-details">
                        <p>Freeze Authority Enabled</p>
                        <p>LP Burned: 0%</p>
                        <p>Single Holder Ownership: 15.91%</p>
                    </div>
                </div>
                <div className="trading-stats">
                    <h2>Trading Stats</h2>
                    <div className="stats-container">
                        <div className="stat-item">
                            <div className="stat-header">
                                <span>Buy Volume</span>
                                <span>Sell Volume</span>
                            </div>
                            <div className="stat-bar">
                                <div className="buy-bar" style={{ width: '50%' }}></div>
                                <div className="sell-bar" style={{ width: '50%' }}></div>
                            </div>
                            <div className="stat-values">
                                <span>$6.757M</span>
                                <span>$6.927M</span>
                            </div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-header">
                                <span>Buys</span>
                                <span>Sells</span>
                            </div>
                            <div className="stat-bar">
                                <div className="buy-bar" style={{ width: '66%' }}></div>
                                <div className="sell-bar" style={{ width: '34%' }}></div>
                            </div>
                            <div className="stat-values">
                                <span>71644</span>
                                <span>37210</span>
                            </div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-header">
                                <span>Buyers</span>
                                <span>Sellers</span>
                            </div>
                            <div className="stat-bar">
                                <div className="buy-bar" style={{ width: '62%' }}></div>
                                <div className="sell-bar" style={{ width: '38%' }}></div>
                            </div>
                            <div className="stat-values">
                                <span>18396</span>
                                <span>11270</span>
                            </div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-header">
                                <span>Volume</span>
                                <span>Transactions</span>
                            </div>
                            <div className="stat-bar">
                                <div className="buy-bar" style={{ width: '70%' }}></div>
                                <div className="sell-bar" style={{ width: '30%' }}></div>
                            </div>
                            <div className="stat-values">
                                <span>$10.5M</span>
                                <span>1500</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="market-cap">
                    <h2>Market Cap</h2>
                    <p>$32.382M</p>
                </div>
                <div className="liquidity">
                    <h2>Liquidity</h2>
                    <p>$654,665</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;