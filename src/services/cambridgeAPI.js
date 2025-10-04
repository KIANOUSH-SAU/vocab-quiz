// Free Dictionary API - No registration needed!
// Example: https://api.dictionaryapi.dev/api/v2/entries/en/hello

export const fetchWordDefinition = async (word) => {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

        if (!response.ok) {
            throw new Error(`Word not found: ${word}`);
        }

        const data = await response.json();
        return data[0]; // Returns the first entry

    } catch (error) {
        console.error('API Error:', error);
        return null;
    }
};