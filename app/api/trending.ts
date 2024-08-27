// app/utils/fetchTrendingTokens.js
export const fetchTrendingTokens = async () => {
    const chainId = 'solana';
    const response = await fetch(`https://api.moonshot.cc/tokens/v1/trending/${chainId}`, {
      method: 'GET',
      headers: {},
    });
    const data = await response.json();
    return data.slice(0, 10); // Get top 10 trending tokens
  }

  // Function to add trending tokens
  async (tokens: Array<{ [key: string]: any }>) => {
    const chainId = 'solana';
    const response = await fetch(`https://api.moonshot.cc/tokens/v1/trending/${chainId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tokens),
  });
  // ... existing code ...
}