export const getTokenData = async (chainId: string, pairIdOrTokenId: string) => {
    const response = await fetch(`https://api.moonshot.cc/token/v1/${chainId}/${pairIdOrTokenId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
};