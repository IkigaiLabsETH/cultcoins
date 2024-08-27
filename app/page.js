"use client";

import React from 'react';
import Launch from "./components/launch";
import TokenData from './components/tokendata'; // Import TokenData component

const Home = () => {
  const chainId = 'solana';
  const pairIdOrTokenId = 'DSnDXHUgTba1WrnQaBaZD39CjiJ6yjkwi2t5mcrP2a6L';

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      </div>
      <Launch />
      <TokenData chainId={chainId} pairIdOrTokenId={pairIdOrTokenId} /> {/* Use TokenData component */}
    </main>
  );
}

export default Home;