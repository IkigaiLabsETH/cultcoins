const userPosition = userPositions.find(({ publicKey }) =>
    publicKey.equals(newBalancePosition.publicKey)
  );
  // Remove Liquidity
  const binIdsToRemove = userPosition.positionData.positionBinData.map(
    (bin) => bin.binId
  );
  const removeLiquidityTx = await dlmmPool.removeLiquidity({
    position: userPosition.publicKey,
    user: user.publicKey,
    binIds: binIdsToRemove,
    liquiditiesBpsToRemove: new Array(binIdsToRemove.length).fill(
      new BN(100 * 100)
    ), // 100% (range from 0 to 100)
    shouldClaimAndClose: true, // should claim swap fee and close position together
  });
  
  try {
    for (let tx of Array.isArray(removeLiquidityTx)
      ? removeLiquidityTx
      : [removeLiquidityTx]) {
      const removeBalanceLiquidityTxHash = await sendAndConfirmTransaction(
        connection,
        tx,
        [user],
        { skipPreflight: false, preflightCommitment: "singleGossip" }
      );
    }
  } catch (error) {}
  