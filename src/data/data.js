import { fetchWordDefinition } from "../services/cambridgeAPI.js"

let words = [];

const UPPER_INTERMEDIATE_WORDS = [
    "ambiguous",
    "comprehensive",
    "deteriorate",
    "elaborate",
    "fluctuate",
    "genuine",
    "hostility",
    "inevitable",
    "justify",
    "legitimate",
    "marginal",
    "notion",
    "obstacle",
    "perceive",
    "quote",
    "reluctant",
    "substantial",
    "tremendous",
    "underlying",
    "vulnerable"
];



function getRandomWord(displayedWords = []) {
    const availableWords = UPPER_INTERMEDIATE_WORDS.filter((_, index) => !displayedWords.includes(index));
    if (availableWords.length === 0) {
        return null;
    }

    const randomIndex = Math.floor(Math.random() * availableWords.length);
    return availableWords[randomIndex];

}

// const word1 = UPPER_INTERMEDIATE_WORDS[4];
// const data1 = await fetchWordDefinition(word1);
const word = getRandomWord();
const data = await fetchWordDefinition(word);

// Extract just the definition texts
const allDefinitions = data.meanings[0].definitions.map(def => { return (def.definition) });
const firstTwoDefinitions = allDefinitions.slice(0, 2);




words.push({ word, firstTwoDefinitions });


// export const QUESTIONS =
//     [
//         {
//             text: "What is the definition of the word '" + words[0].word + "' ?",
//             options: words[0].firstTwoDefinitions,
//         },

//     ]



export const QUESTIONS = words.map((q) => {
    return {
        text: "What is the definition of the word '" + q.word + "' ?",
        options: q.firstTwoDefinitions,
    }
})

