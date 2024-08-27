"use client";

import Image from "next/image";
import Launch from "./components/launch"; // Import the Launch component
import React from 'react';
import TokenData from './components/tokendata';

const Home = () => {
  const chainId = 'yourChainId'; // Define your chainId here
  const pairIdOrTokenId = 'yourPairIdOrTokenId'; // Define your pairIdOrTokenId here

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      </div>
      <Launch />
      <div>
            <h1>Moonshot Token Data</h1>
            <TokenData chainId={chainId} pairIdOrTokenId={pairIdOrTokenId} />
        </div>
    </main>
  );
}

export default Home;