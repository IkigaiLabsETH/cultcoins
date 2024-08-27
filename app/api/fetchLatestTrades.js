// Define an asynchronous function to fetch the latest trades
const fetchLatestTrades = async (chainId) => {
    try {
        // Make a GET request to the Moonshot API
        const response = await fetch(`https://api.moonshot.cc/trades/v1/latest/${chainId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        // Parse the JSON response
        const data = await response.json();

        // Log the data to the console
        console.log(data);
    } catch (error) {
        // Log any errors that occur during the fetch
        console.error('Failed to fetch latest trades:', error);
    }
};

// Call the function with your specific chain ID
fetchLatestTrades('your_chain_id');