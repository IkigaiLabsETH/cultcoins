"use client";

import React, { useMemo, useState } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css';
import './launch.css';

export default function Launch() {
  const network = clusterApiUrl('mainnet-beta');
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  // State management for form inputs
  const [formData, setFormData] = useState({
    tokenSymbol: '',
    tokenName: '',
    description: '',
    icon: null,
    banner: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  return (
    <ConnectionProvider endpoint={network}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-3xl w-full">
              <h1 className="text-4xl font-bold mb-8 text-center">Launch your token</h1>
              <form>
                <div className="form-group mb-6">
                  <label className="block mb-2">Token Symbol *</label>
                  <input
                    type="text"
                    name="tokenSymbol"
                    value={formData.tokenSymbol}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-800 rounded-lg"
                  />
                </div>
                <div className="form-group mb-6">
                  <label className="block mb-2">Token Name *</label>
                  <input
                    type="text"
                    name="tokenName"
                    value={formData.tokenName}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-800 rounded-lg"
                  />
                </div>
                <div className="form-group mb-6">
                  <label className="block mb-2">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-800 rounded-lg"
                  ></textarea>
                </div>
                <div className="flex space-x-4 mb-6">
                  <div className="flex-1">
                    <label className="block mb-2">Icon *</label>
                    <input
                      type="file"
                      name="icon"
                      onChange={handleFileChange}
                      className="p-3 bg-gray-800 rounded-lg w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block mb-2">Banner</label>
                    <input
                      type="file"
                      name="banner"
                      onChange={handleFileChange}
                      className="p-3 bg-gray-800 rounded-lg w-full"
                    />
                  </div>
                </div>
                <div className="links mb-6 grid grid-cols-2 gap-4">
                  <button type="button" className="bg-gray-800 p-3 rounded-lg">Add Website</button>
                  <button type="button" className="bg-gray-800 p-3 rounded-lg">Add X (Twitter)</button>
                  <button type="button" className="bg-gray-800 p-3 rounded-lg">Add Telegram</button>
                  <button type="button" className="bg-gray-800 p-3 rounded-lg">Add Discord</button>
                  <button type="button" className="bg-gray-800 p-3 rounded-lg">Add another link</button>
                  <button type="button" className="bg-gray-800 p-3 rounded-lg">Add another link</button>
                </div>
                <button type="submit" className="w-full p-4 bg-yellow-400 text-black rounded-lg font-bold">Connect Wallet</button>
              </form>
              <div className="mt-6 text-center">
                <WalletMultiButton />
              </div>
            </div>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}