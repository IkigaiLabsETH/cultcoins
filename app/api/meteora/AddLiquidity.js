const TOTAL_RANGE_INTERVAL = 10; // 10 bins on each side of the active bin
const minBinId = activeBin.bin_id - TOTAL_RANGE_INTERVAL;
const maxBinId = activeBin.bin_id + TOTAL_RANGE_INTERVAL;

const activeBinPricePerToken = dlmmPool.fromPricePerLamport(
  Number(activeBin.price)
);
const totalXAmount = new BN(100);
const totalYAmount = totalXAmount.mul(new BN(Number(activeBinPricePerToken)));

// Add Liquidity to existing position
const addLiquidityTx = await dlmmPool.addLiquidityByStrategy({
  positionPubKey: newBalancePosition.publicKey,
  user: user.publicKey,
  totalXAmount,
  totalYAmount,
  strategy: {
    maxBinId,
    minBinId,
    strategyType: StrategyType.SpotBalanced,
  },
});

try {
  const addLiquidityTxHash = await sendAndConfirmTransaction(
    connection,
    addLiquidityTx,
    [user]
  );
} catch (error) {}