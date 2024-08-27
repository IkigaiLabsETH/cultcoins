import React, { useEffect, useState } from 'react';
import { fetchTrendingTokens } from '../api/trending';

const TrendingTokens = ({ chainId }) => {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    const getTokens = async () => {
      const trendingTokens = await fetchTrendingTokens(chainId);
      setTokens(trendingTokens);
    };
    getTokens();
  }, [chainId]);

  return (
    <div>
      <h2>Top 10 Trending Tokens</h2>
      <ul>
        {tokens.map((token, index) => (
          <li key={index}>
            <p>{token.baseToken.name} ({token.baseToken.symbol})</p>
            <p>Price: ${token.priceUsd}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingTokens;