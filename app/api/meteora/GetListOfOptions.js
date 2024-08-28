const { userPositions } = await dlmmPool.getPositionsByUserAndLbPair(
    user.publicKey
  );
  const binData = userPositions[0].positionData.positionBinData;