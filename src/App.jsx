import QuizCard from "./components/QuizCard";
import { QUESTIONS } from "./data/data";
import { getRandomQuestion } from "./services/getQuestion";
import { useState, useEffect } from "react";

function App() {
	const [randomQuestion, setRandomQuestion] = useState(null);

	function selectedOption() {
		setRandomQuestion(getRandomQuestion());
	}

	// Load initial question when component mounts
	useEffect(() => {
		setRandomQuestion(getRandomQuestion());
	}, []);
	return (
		<>
			<div className="min-h-screen flex items-center justify-center">
				{randomQuestion ? (
					<QuizCard
						question={randomQuestion.text}
						options={randomQuestion.options}
						handleOptionSelection={selectedOption}
					/>
				) : (
					<div>Loading...</div>
				)}
			</div>
		</>
	);
}

export default App;
