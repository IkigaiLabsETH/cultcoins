(async () => {
    const fetch = (await import('node-fetch')).default;

    async function getProtocolMetrics() {
        try {
            const response = await fetch('https://dlmm-api.meteora.ag/info/protocol_metrics');
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching protocol metrics:', error);
            throw error;
        }
    }

    function displayMetrics(metrics) {
        console.log('Protocol Metrics:');
        console.log(`Daily Fee: ${metrics.daily_fee}`);
        console.log(`Daily Trade Volume: ${metrics.daily_trade_volume}`);
        console.log(`Total Fee: ${metrics.total_fee}`);
        console.log(`Total Trade Volume: ${metrics.total_trade_volume}`);
        console.log(`Total TVL: ${metrics.total_tvl}`);
    }

    async function main() {
        try {
            const metrics = await getProtocolMetrics();
            displayMetrics(metrics);
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    main();
})();