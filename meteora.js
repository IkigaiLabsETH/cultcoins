const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;

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

app.get('/metrics', async (req, res) => {
    try {
        const metrics = await getProtocolMetrics();
        res.json(metrics);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching protocol metrics', details: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});