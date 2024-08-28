async function getPairData() {
    const response = await fetch('https://dlmm-api.meteora.ag/pair/FbkX1h2YTs171cEMa4GrV7XbAiQt5zSmV2CjfYWxXJDP', {
        headers: {
            'accept': 'application/json'
        }
    });
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    return data;
}

getPairData()
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching pair data:', error));