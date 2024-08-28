async function getProtocolMetrics() {
    const response = await fetch('https://dlmm-api.meteora.ag/protocol/metrics');
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    return data;
}

getProtocolMetrics()
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching protocol metrics:', error));