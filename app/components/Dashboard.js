import React from 'react';
import TokenData from './TokenData';
import './Dashboard.css'; // Import CSS for styling

const Dashboard = ({ chainId, pairIdOrTokenId }) => {
    return (
        <div className="dashboard">
            <div className="sidebar">
                <div className="sidebar-item">Dashboard</div>
                <div className="sidebar-item">Account</div>
                <div className="sidebar-item">Chart</div>
                <div className="sidebar-item">Wallet</div>
                <div className="sidebar-item">News</div>
                <div className="sidebar-item">Settings</div>
                <div className="sidebar-item">Log out</div>
            </div>
            <div className="main-content">
                <div className="header">
                    <h1>Dashboard</h1>
                    <div className="total-balance">
                        <h2>Total Balance</h2>
                        <p>$154,610.00</p>
                    </div>
                </div>
                <div className="token-data-container">
                    <TokenData chainId={chainId} pairIdOrTokenId={pairIdOrTokenId} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;