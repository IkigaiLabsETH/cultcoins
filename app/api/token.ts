export const getTokenData = async (chainId: string, pairIdOrTokenId: string) => {
    const response = await fetch(`https://api.moonshot.cc/token/v1/${chainId}/${pairIdOrTokenId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error('Error fetching token data:', response.status, errorText);
        throw new Error(`Network response was not ok: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    return data;
};