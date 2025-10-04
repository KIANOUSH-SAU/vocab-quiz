import { fetchWordDefinition } from "../services/cambridgeAPI.js"



const word = "coherent";
const data = await fetchWordDefinition(word);

// Extract just the definition texts
const allDefinitions = data.meanings[0].definitions.map(def => { return (def.definition) });
console.log("All definitions for", word + ":");

console.log(allDefinitions);


const firstFourDefinitions = allDefinitions.slice(0, 4);

console.log(firstFourDefinitions);

export const QUESTIONS =
    [
        {
            text: "What is the definition of the word '" + word + "' ?",
            options: firstFourDefinitions,
        },
        {
            text: "How old are you my guy?",
            options: ["12", "22", "19", "55"]
        },

    ]

