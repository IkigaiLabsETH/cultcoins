"use client";

import React from 'react';
import Launch from "./components/launch";
import TokenData from './components/tokendata'; // Ensure the path is correct
import TrendingTokens from './components/trendingtokens';

const Home = () => {
  const chainId = 'solana';
  const pairIdOrTokenId = 'A8C3xuqscfmyLrte3VmTqrAq8kgMASius9AFNANwpump';

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      </div>
      <Launch />
      <TrendingTokens />
      <TokenData chainId={chainId} pairIdOrTokenId={pairIdOrTokenId} />
    </main>
  );
}

export default Home;