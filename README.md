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

### Conclusion

This bonding curve mechanism governs the pricing and supply dynamics of Moonshot tokens in a decentralized marketplace, ensuring that as more tokens are bought or sold, the price adjusts accordingly. The mechanism includes provisions for migration to a DEX once specific market cap and allocation thresholds are reached, facilitating the seamless transition of the token into broader market liquidity while ensuring a deflationary effect through token burning.