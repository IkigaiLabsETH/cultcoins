## Cult Coins Tokenomics 

strategy using Moonshot's "Launch, Lock & Earn" aims to deploy Cult Token while securing long-term rewards for creators and early supporters. The process begins with the deployment of Cult Token on Moonshot, followed by migration to Meteora, where liquidity pool tokens are distributed: 20% to the creator, 10% to Moonshot, and 70% to the top 50 holders. Meteora’s dynamic fee structure starts at 10% and reduces over time, incentivizing early participation. For example, a daily trading volume of $1M could yield $26,790 in earnings for a top holder on day one. Rewards can be claimed through the Meteora app, with frequent claims recommended to minimize losses due to token price fluctuations.

Additional mechanics include adjustable slippage, with the default set at 15%, and market cap calculations based on total supply multiplied by the token price. The minimum buy amount is set at 0.005 SOL to prevent spam, while the minimum sell amount is 0.001 SOL equivalent. The migration process typically takes 30 seconds to 2 minutes, during which trading on Moonshot is paused.

The structure encourages long-term holding over short-term selling, ensuring ongoing earnings aligned with the token's growth and success. This framework leverages Moonshot's features to support sustainable growth and aligned incentives for Cult Token stakeholders.

## Moonshot / Dexscreener / Meteora

Our decision to build on Moonshot is driven by the platform’s superior integration, data offerings, and user experience, all of which align with our long-term vision. While the memecoin market is crowded and competitive, we believe that Moonshot's approach sets the stage for sustainable growth and success, making it the right foundation for our platform. Above all, the integration with Meteora

**Why We're Building on Moonshot**

When we initially set out to create a platform similar to Pump.fun, our goal was clear: enable users to easily launch and tradecult coins on Solana. But as we delved deeper into the ecosystem, we realized that there was a more strategic opportunity with Moonshot, the new memecoin launchpad by DEX Screener.

### **Vertical Integration and Enhanced Data Offerings**
Moonshot isn’t just another memecoin platform—it represents a significant step forward in the vertical integration of memecoin trading. While Pump.fun popularized the concept of quick, cheap token launches, it falls short in data offerings and user analytics, where many traders already rely on DEX Screener. By building on Moonshot, we leverage a more established and data-rich platform, ensuring our users have access to critical trading metrics directly within the ecosystem. This integration provides a seamless experience that Pump.fun simply can't match.

### **Superior User Experience**
Another compelling reason for our shift is the superior user experience (UX) that Moonshot offers. The interface is more polished, and the overall usability is miles ahead, which matters significantly when users are navigating a fast-paced trading environment. While Pump.fun has its strengths, especially in its social features like chat and livestreams, we believe that the cleaner, more intuitive design of Moonshot will attract and retain a broader audience—especially those who prioritize functionality and data over social engagement.

### **Market Position and Future Potential**
The memecoin market is evolving rapidly, and Moonshot positions itself as more than just a launchpad; it’s part of a larger trend recognizing memecoin trading as a legitimate retail business opportunity.

---

### Overview

A **bonding curve mechanism** designed for the buying and selling of Moonshot tokens, which are represented on a decentralized exchange (DEX). The bonding curve is a mathematical model used to manage the pricing and supply of tokens, ensuring a dynamic price that adjusts based on the number of tokens in circulation and the amount of collateral (in SOL) held.

### Key Components

1. **Bonding Curve Equation**: 
   - The bonding curve follows the equation: `vTOKEN * vSOL = k`
   - `vTOKEN` represents the virtual reserve of the token.
   - `vSOL` represents the virtual reserve of the collateral (SOL).
   - `k` is a constant that dictates the shape of the curve.

2. **Initial Values**:
   - **Initial Token Reserve (iVTOKEN)**: 1,073,000,000 tokens.
   - **Initial Collateral Reserve (iVSOL)**: 30 SOL.
   - **Initial Token Price**: 27.95 lamports (or 0.00000002795 SOL).

3. **Market Cap Threshold for Migration**:
   - **Threshold**: Migration occurs when the market cap reaches 345 SOL or 80% of the tokens are sold on the curve.
   - **Collateral Collected**: 87.9 SOL at migration.
   - **Price Multiple at Migration**: Approximately 16x from the initial price.

### Core Functionality (BUY/SELL Mechanisms)

- **Buying Tokens**:
  - **buy_exact_tokens_out**: Determines the SOL cost to buy a specific amount of tokens, considering fees and slippage.
  - **buy_exact_collateral_in**: Calculates the number of tokens received when a specific amount of SOL is spent, accounting for fees and slippage.

- **Selling Tokens**:
  - **sell_exact_tokens_in**: Determines the amount of SOL received for selling a specific number of tokens, after deducting fees and considering slippage.
  - **sell_exact_collateral_out**: Calculates the number of tokens needed to receive a specific amount of SOL, factoring in fees and slippage.

### Migration

The migration phase triggers when the market cap reaches 345 SOL or 80% of the tokens are sold. At this point, the tokens migrate to a liquidity pool on a chosen DEX. During migration:

- **Collateral Reserves**: Expected to be around 87.91 SOL.
- **Market Cap**: 345 SOL at allocation.
- **Tokens Burned**: Approximately 10 million tokens.
- **Tokens Migrated**: Approximately 990 million tokens.
- **Fees**: 6 SOL is deducted, with portions allocated to Raydium, Openbook, and Moonshot.

### Key Calculations

1. **Tokens to Migrate (M)**:
   - Calculated using the formula:
     \[
     M = \frac{\text{{collateral collected}} - \text{{migration fees}}}{\text{{price of token at migration}}}
     \]

2. **Tokens to Burn (B)**:
   - The number of tokens to burn is determined by:
     \[
     B = T - A - M
     \]
     Where \( T \) is the total supply, \( A \) is the allocation at migration, and \( M \) is the number of tokens migrated.

### Moonshot

This bonding curve mechanism governs the pricing and supply dynamics of Moonshot tokens in a decentralized marketplace, ensuring that as more tokens are bought or sold, the price adjusts accordingly. The mechanism includes provisions for migration to a DEX once specific market cap and allocation thresholds are reached, facilitating the seamless transition of the token into broader market liquidity while ensuring a deflationary effect through token burning.

Moonshot has an iOS app that makes buying and selling Solana-based memecoins seamless by allowing transactions via Apple Pay, PayPal, debit, and credit cards. With a sleek design and no need for traditional wallets or gas fees, Moonshot is being hailed as the "Robinhood for memecoins," targeting mass adoption.

### **Key Data Points from Solana Tracker**

1. **Accounts**:
   - **`GET /accounts/:address`**: Retrieves data about a specific account on the Solana blockchain.
     - **Usage**: Useful for tracking user-specific account information, such as wallet balances, transaction history, and ownership of Cult Coins. This can be integrated into user profiles to display their holdings and account activity.
     - **Example**: Show users their Cult Coin balance, historical transactions, and other tokens they may hold.

2. **Transactions**:
   - **`GET /transactions/:signature`**: Fetches detailed information about a specific transaction.
     - **Usage**: Allows users to view the details of any transaction involving Cult Coins, including the sender, receiver, amount, and timestamp. This adds transparency and trust by enabling users to verify their transactions.
     - **Example**: Provide users with a transaction receipt feature where they can see all details of their transactions, including any fees paid.

   - **`GET /transactions`**: Lists recent transactions across the blockchain.
     - **Usage**: Populate a live transaction feed or ticker on the platform, showing recent transactions involving Cult Coins or other relevant tokens. This can help users stay informed about market activity.
     - **Example**: Display a live feed on the platform’s dashboard showing the latest Cult Coin transactions, highlighting high-value transfers.

3. **Programs**:
   - **`GET /programs/:programId`**: Retrieves data related to a specific Solana program (smart contract).
     - **Usage**: Useful for tracking the performance and interactions with smart contracts related to Cult Coin, such as staking or governance contracts.
     - **Example**: Show analytics on how many users are interacting with a staking program or how much Cult Coin has been staked.

4. **Tokens**:
   - **`GET /tokens/:tokenAddress`**: Provides data on a specific token by its address.
     - **Usage**: Critical for displaying detailed information about the Cult Coin, such as current price, market cap, circulating supply, and other essential metrics.
     - **Example**: Include a token profile page where users can see all relevant metrics and charts for Cult Coin, including price movements and supply changes.

   - **`GET /tokens`**: Lists all tokens on the Solana blockchain.
     - **Usage**: Use this to allow users to discover and compare Cult Coin with other tokens, promoting awareness and facilitating token swaps.
     - **Example**: Provide a comparison tool or a section that shows how Cult Coin ranks against other tokens in terms of market cap or trading volume.

5. **Token Balances**:
   - **`GET /token_balances/:address`**: Retrieves the token balances of a specific account.
     - **Usage**: Display users’ total Cult Coin balance alongside other tokens they might hold, giving them a comprehensive view of their portfolio.
     - **Example**: A user dashboard that shows their Cult Coin balance, the equivalent value in fiat, and the balance of other Solana-based tokens.

6. **Token Transfers**:
   - **`GET /token_transfers`**: Lists token transfer events, including sender, receiver, and amount.
     - **Usage**: Track and display token transfers involving Cult Coin, enabling users to see all movements of their tokens.
     - **Example**: A transfer history page where users can filter and search through all transfers involving their Cult Coins.

7. **Markets**:
   - **`GET /markets/:marketId`**: Fetches data about a specific market, including trading pairs, volumes, and price changes.
     - **Usage**: Show users the trading performance of Cult Coin in different markets, including price trends, liquidity, and 24-hour volume.
     - **Example**: Market overview section that shows where Cult Coin is being traded, at what prices, and how much volume is moving through each market.

8. **Mints**:
   - **`GET /mints/:mintAddress`**: Provides data about the minting of a specific token.
     - **Usage**: Track the minting activity of Cult Coin, providing insights into how the token supply is changing over time.
     - **Example**: Display data on new Cult Coins minted or burned, with visualizations showing supply changes over time.

### **Leveraging These Data Points:**
- **User Experience**: These data points will enhance the user experience by providing real-time, transparent, and detailed information about Cult Coin. Users can track their holdings, view transaction histories, and monitor market activity directly on the platform.
  
- **Analytics and Insights**: The data enables in-depth analytics, such as tracking the most active wallets, understanding trading patterns, and monitoring the overall health and adoption of Cult Coin.

- **Trust and Transparency**: By providing users with easy access to their transaction data and the broader market context, you build trust and foster an engaged community around Cult Coin.


### **Why Use the Solana Tracker Swap API:**

1. **Simplified Token Swapping**:
   - The Swap API allows users to seamlessly swap between different tokens on the Solana blockchain. For the Cult Coin platform, this means users can easily exchange their Cult Coins for other tokens (and vice versa) without leaving the platform.
   - **Benefit**: By integrating the Swap API, you eliminate the need for users to navigate to third-party exchanges, keeping them engaged within your ecosystem.

2. **Access to Liquidity**:
   - The Swap API taps into the liquidity pools of decentralized exchanges (DEXs) on Solana. This ensures that users can execute swaps with competitive pricing and minimal slippage.
   - **Benefit**: High liquidity improves the user experience by enabling faster and more efficient trades, which is crucial for maintaining a vibrant and active token economy.

3. **Enhanced User Experience**:
   - With an integrated swap feature, users can manage their entire portfolio directly on the Cult Coin platform. This convenience encourages more frequent trading and interaction, increasing platform stickiness.
   - **Benefit**: A one-stop-shop experience that enhances user satisfaction and loyalty, as they can track, swap, and manage their tokens all in one place.

4. **Support for Automated Market Making (AMM)**:
   - The Swap API supports AMM models, allowing users to swap tokens based on algorithms rather than traditional order books. This means that users can benefit from continuous trading availability and potentially better prices during times of market volatility.
   - **Benefit**: Users gain the ability to execute trades at optimal prices without worrying about order book depth or market maker availability.

5. **Fee Generation**:
   - Integrating the Swap API can open up revenue streams for the platform by introducing small swap fees. These fees can be reinvested into the platform or used to incentivize users through rewards or staking.
   - **Benefit**: Create a sustainable financial model by generating passive income through transaction fees, which can be used to fund future platform developments or community rewards.

6. **Transparency and Trust**:
   - By using a reputable and transparent API like Solana Tracker’s Swap API, you ensure that all swaps are conducted on-chain with verifiable records. This transparency builds trust with users, who can verify that their swaps are being executed fairly.
   - **Benefit**: Building trust is critical in the blockchain space, and using a reliable API helps solidify your platform’s reputation as secure and user-friendly.

### References

https://github.com/YZYLAB/solana-swap

https://github.com/YZYLAB/solana-volume-bot

https://github.com/YZYLAB/solana-trade-bot

Email: swap-api@solanatracker.io

