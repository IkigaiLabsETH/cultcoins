import {
  Connection,
  PublicKey,
  Keypair,
  Transaction,
  SystemProgram,
  sendAndConfirmTransaction,
} from '@solana/web3.js';
import { TOKEN_PROGRAM_ID, getOrCreateAssociatedTokenAccount } from '@solana/spl-token';
import { struct, u8, u64, str } from '@solana/buffer-layout';
// import { encode } from 'bs58';

// Define the necessary accounts and parameters
const connection = new Connection('https://api.mainnet-beta.solana.com', 'confirmed');
const payer = Keypair.fromSecretKey(Uint8Array.from([/* your payer secret key */]));
const mintAuthority = Keypair.fromSecretKey(Uint8Array.from([/* your mint authority secret key */]));
const mint = Keypair.generate();
const tokenAccount = Keypair.generate();
const mintParams = {
  name: 'MyToken',
  symbol: 'MTK',
  uri: 'https://example.com/token-metadata',
  decimals: 9,
  collateralCurrency: 0, // Assuming 0 represents a specific currency
  amount: 1000000, // Amount to mint
  curveType: 0, // Assuming 0 represents a specific curve type
  migrationTarget: 0, // Assuming 0 represents a specific migration target
};

// Define the layout for the TokenMintParams struct
const TokenMintParamsLayout = struct([
  str('name'),
  str('symbol'),
  str('uri'),
  u8('decimals'),
  u8('collateralCurrency'),
  u64('amount'),
  u8('curveType'),
  u8('migrationTarget'),
]);

async function mintToken() {
  // Create the mint account
  const mintTx = new Transaction().add(
    SystemProgram.createAccount({
      fromPubkey: payer.publicKey,
      newAccountPubkey: mint.publicKey,
      space: 82, // Size of the mint account
      lamports: await connection.getMinimumBalanceForRentExemption(82),
      programId: TOKEN_PROGRAM_ID,
    })
  );

  // Send the transaction to create the mint account
  await sendAndConfirmTransaction(connection, mintTx, [payer, mint]);

  // Get or create the associated token account
  const associatedTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    payer,
    mint.publicKey,
    payer.publicKey
  );

  // Encode the mintParams
  const mintParamsBuffer = Buffer.alloc(TokenMintParamsLayout.span);
  TokenMintParamsLayout.encode(mintParams, mintParamsBuffer);

  // Create the tokenMint instruction
  const tokenMintInstruction = new TransactionInstruction({
    keys: [
      { pubkey: payer.publicKey, isSigner: true, isWritable: true },
      { pubkey: mintAuthority.publicKey, isSigner: true, isWritable: false },
      { pubkey: new PublicKey('CurveAccountPublicKey'), isSigner: false, isWritable: true },
      { pubkey: mint.publicKey, isSigner: true, isWritable: true },
      { pubkey: new PublicKey('MintMetadataPublicKey'), isSigner: false, isWritable: true },
      { pubkey: new PublicKey('CurveTokenAccountPublicKey'), isSigner: false, isWritable: true },
      { pubkey: new PublicKey('ConfigAccountPublicKey'), isSigner: false, isWritable: false },
      { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      { pubkey: new PublicKey('AssociatedTokenProgramPublicKey'), isSigner: false, isWritable: false },
      { pubkey: new PublicKey('MplTokenMetadataPublicKey'), isSigner: false, isWritable: false },
      { pubkey: SystemProgram.programId, isSigner: false, isWritable: false },
    ],
    programId: new PublicKey('MoonCVVNZFSYkqNXP6bxHLPL6QQJiMagDL3qcqUQTrG'), // Replace with your program ID
    data: Buffer.concat([Buffer.from([0]), mintParamsBuffer]), // 0 is the instruction index for tokenMint
  });

  // Create the transaction to mint the tokens
  const mintToTx = new Transaction().add(tokenMintInstruction);

  // Send the transaction to mint the tokens
  await sendAndConfirmTransaction(connection, mintToTx, [payer, mintAuthority]);

  console.log(`Minted ${mintParams.amount} tokens to ${associatedTokenAccount.address}`);
}

mintToken().catch(console.error);