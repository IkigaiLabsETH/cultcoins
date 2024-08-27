"use client";

import React from 'react';
import { useRouter } from 'next/router';
import TokenData from './components/tokendata'; // Adjust the import path if necessary

const Token = () => {
  const router = useRouter();
  const { chainId, pairIdOrTokenId } = router.query;

  if (!chainId || !pairIdOrTokenId) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TokenData chainId={chainId} pairIdOrTokenId={pairIdOrTokenId} /> {/* Use TokenData component */}
    </main>
  );
}

export default Token;