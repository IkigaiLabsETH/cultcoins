import DLMM from '@meteora-ag/dlmm'

// Fetch the desired pool address from the API
async function getPoolAddress() {
    const response = await fetch('https://dlmm-api.meteora.ag/pair/all');
    const data = await response.json();
    // Assuming the pool address is in the first item of the response
    return data[0].address;
}

async function initialize() {
    const poolAddress = await getPoolAddress();
    const USDC_USDT_POOL = new PublicKey(poolAddress);
    const dlmmPool = await DLMM.create(connection, USDC_USDT_POOL);
    console.log(dlmmPool); // Use the variable
}

initialize();
