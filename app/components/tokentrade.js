import React, { useState } from 'react';
import { Environment, FixedSide, Moonshot } from '@wen-moon-ser/moonshot-sdk';
import {
  ComputeBudgetProgram,
  Connection,
  Keypair,
  TransactionMessage,
  VersionedTransaction,
} from '@solana/web3.js';
import testWallet from '../test-wallet.json';

const TokenTrade = () => {
  const [transactionHash, setTransactionHash] = useState(null);
  const rpcUrl = 'https://api.devnet.solana.com';
  const authToken = ''; // This can be an empty string for now
  const connection = new Connection(rpcUrl);

  const moonshot = new Moonshot({
    rpcUrl,
    environment: Environment.DEVNET,
    authToken,
    chainOptions: {
      solana: { confirmOptions: { commitment: 'confirmed' } },
    },
  });

  const token = moonshot.Token({
    mintAddress: '3Rai792zaN5adyc2oEFGg1JLV4S9SYi51HrtMw7qRz8o',
  });

  const handleBuy = async () => {
    try {
      const tokenAmount = 10000n * 1000000000n; // Buy 10k tokens
      const collateralAmount = await token.getCollateralAmountByTokens({
        tokenAmount,
        tradeDirection: 'BUY',
      });

      const { ixs } = await token.prepareIxs({
        slippageBps: 500,
        creatorPK: Keypair.fromSecretKey(Uint8Array.from(testWallet)).publicKey.toBase58(),
        tokenAmount,
        collateralAmount,
        tradeDirection: 'BUY',
        fixedSide: FixedSide.OUT,
      });

      const priorityIx = ComputeBudgetProgram.setComputeUnitPrice({
        microLamports: 200_000,
      });

      const blockhash = await connection.getLatestBlockhash('confirmed');
      const messageV0 = new TransactionMessage({
        payerKey: Keypair.fromSecretKey(Uint8Array.from(testWallet)).publicKey,
        recentBlockhash: blockhash.blockhash,
        instructions: [priorityIx, ...ixs],
      }).compileToV0Message();

      const transaction = new VersionedTransaction(messageV0);
      transaction.sign([Keypair.fromSecretKey(Uint8Array.from(testWallet))]);
      const txHash = await connection.sendTransaction(transaction, {
        skipPreflight: false,
        maxRetries: 0,
        preflightCommitment: 'confirmed',
      });

      setTransactionHash(txHash);
    } catch (error) {
      console.error('Error buying token:', error);
    }
  };

  const handleSell = async () => {
    try {
      const tokenAmount = 10000n * 1000000000n; // Sell 10k tokens
      const collateralAmount = await token.getCollateralAmountByTokens({
        tokenAmount,
        tradeDirection: 'SELL',
      });

      const { ixs } = await token.prepareIxs({
        slippageBps: 500,
        creatorPK: Keypair.fromSecretKey(Uint8Array.from(testWallet)).publicKey.toBase58(),
        tokenAmount,
        collateralAmount,
        tradeDirection: 'SELL',
        fixedSide: FixedSide.IN,
      });

      const priorityIx = ComputeBudgetProgram.setComputeUnitPrice({
        microLamports: 200_000,
      });

      const blockhash = await connection.getLatestBlockhash('confirmed');
      const messageV0 = new TransactionMessage({
        payerKey: Keypair.fromSecretKey(Uint8Array.from(testWallet)).publicKey,
        recentBlockhash: blockhash.blockhash,
        instructions: [priorityIx, ...ixs],
      }).compileToV0Message();

      const transaction = new VersionedTransaction(messageV0);
      transaction.sign([Keypair.fromSecretKey(Uint8Array.from(testWallet))]);
      const txHash = await connection.sendTransaction(transaction, {
        skipPreflight: false,
        maxRetries: 0,
        preflightCommitment: 'confirmed',
      });

      setTransactionHash(txHash);
    } catch (error) {
      console.error('Error selling token:', error);
    }
  };

  return (
    <div>
      <h1>Token Trade</h1>
      <button onClick={handleBuy}>Buy Token</button>
      <button onClick={handleSell}>Sell Token</button>
      {transactionHash && <p>Transaction Hash: {transactionHash}</p>}
    </div>
  );
};

export default TokenTrade;