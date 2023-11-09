
export const generateShopItems = async (data) => {

    const useLocalData = false;

    if (useLocalData) {
        const localData = "[{\"name\":\"Health Potion\",\"rarity\":\"Common\",\"effects\":\"Restores 50 health points\",\"requirements\":\"None\",\"cost\":50,\"Name\":\"Health Potion\",\"Cost\":50,\"Rarity\":\"Common\",\"Effects\":\"Restores 50 health points\",\"Requirements\":\"None\"},{\"name\":\"Mana Potion\",\"rarity\":\"Uncommon\",\"effects\":\"Restores 75 mana points\",\"requirements\":\"None\",\"cost\":75,\"Name\":\"Mana Potion\",\"Cost\":75,\"Rarity\":\"Uncommon\",\"Effects\":\"Restores 75 mana points\",\"Requirements\":\"None\"},{\"name\":\"Strength Elixir\",\"rarity\":\"Rare\",\"effects\":\"Temporarily increases strength by 25%\",\"requirements\":\"Minimum strength level 10\",\"cost\":150,\"Name\":\"Strength Elixir\",\"Cost\":150,\"Rarity\":\"Rare\",\"Effects\":\"Temporarily increases strength by 25%\",\"Requirements\":\"Minimum strength level 10\"},{\"name\":\"Agility Potion\",\"rarity\":\"Common\",\"effects\":\"Temporarily increases agility by 20%\",\"requirements\":\"None\",\"cost\":100,\"Name\":\"Agility Potion\",\"Cost\":100,\"Rarity\":\"Common\",\"Effects\":\"Temporarily increases agility by 20%\",\"Requirements\":\"None\"},{\"name\":\"Invisibility Potion\",\"rarity\":\"Rare\",\"effects\":\"Grants invisibility for 1 minute\",\"requirements\":\"Minimum stealth level 15\",\"cost\":200,\"Name\":\"Invisibility Potion\",\"Cost\":200,\"Rarity\":\"Rare\",\"Effects\":\"Grants invisibility for 1 minute\",\"Requirements\":\"Minimum stealth level 15\"},{\"name\":\"Resistance Potion\",\"rarity\":\"Uncommon\",\"effects\":\"Increases the resistance to magic attacks by 15%\",\"requirements\":\"None\",\"cost\":125,\"Name\":\"Resistance Potion\",\"Cost\":125,\"Rarity\":\"Uncommon\",\"Effects\":\"Increases the resistance to magic attacks by 15%\",\"Requirements\":\"None\"},{\"name\":\"Haste Potion\",\"rarity\":\"Common\",\"effects\":\"Temporarily doubles movement speed for 1 minute\",\"requirements\":\"None\",\"cost\":90,\"Name\":\"Haste Potion\",\"Cost\":90,\"Rarity\":\"Common\",\"Effects\":\"Temporarily doubles movement speed for 1 minute\",\"Requirements\":\"None\"},{\"name\":\"Fortune Elixir\",\"rarity\":\"Epic\",\"effects\":\"Doubles the chance of finding rare items for 30 minutes\",\"requirements\":\"Minimum luck level 20\",\"cost\":300,\"Name\":\"Fortune Elixir\",\"Cost\":300,\"Rarity\":\"Epic\",\"Effects\":\"Doubles the chance of finding rare items for 30 minutes\",\"Requirements\":\"Minimum luck level 20\"},{\"name\":\"Fire Resistance Tonic\",\"rarity\":\"Uncommon\",\"effects\":\"Grants temporary resistance to fire damage\",\"requirements\":\"None\",\"cost\":80,\"Name\":\"Fire Resistance Tonic\",\"Cost\":80,\"Rarity\":\"Uncommon\",\"Effects\":\"Grants temporary resistance to fire damage\",\"Requirements\":\"None\"},{\"name\":\"Antidote\",\"rarity\":\"Common\",\"effects\":\"Cures poison and grants temporary immunity\",\"requirements\":\"None\",\"cost\":40,\"Name\":\"Antidote\",\"Cost\":40,\"Rarity\":\"Common\",\"Effects\":\"Cures poison and grants temporary immunity\",\"Requirements\":\"None\"}]\n";
        return JSON.parse(localData);
    } else {
        try {
            const response = await fetch('http://localhost:8080/generate/shop', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }

            console.log('response = ', response);
            const responseData = await response.text().then(function (rawTextResponse) {
                return JSON.parse(rawTextResponse);
            })
            return responseData;
        } catch (error) {
            throw error;
        }
    }
};

export const generatePrompt = async (data) => {
    try {
        const response = await fetch('http://localhost:8080/generate/prompt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // You can adjust the content type as needed
            },
            body: JSON.stringify(data), // Pass your data as JSON string here
        });

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        throw error;
    }
};
