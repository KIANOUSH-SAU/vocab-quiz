//Pulls a random question from data.js
import { QUESTIONS } from "../data/data.js";

export const getRandomQuestion = (usedQuestions = []) => {
    const availableQuestions = QUESTIONS.filter((_, index) => !usedQuestions.includes(index));

    if (availableQuestions.length === 0) {
        return null; // All questions used
    }

    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    return availableQuestions[randomIndex];
};


console.log(getRandomQuestion());