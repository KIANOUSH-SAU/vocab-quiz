import QuizCard from "./components/QuizCard";
import { QUESTIONS } from "./data/data";
function App() {
	return (
		<>
			<div className="min-h-screen flex items-center justify-center">
				{QUESTIONS.map((q) => {
					return (
						<div key={q.text}>
							<QuizCard question={q.text} options={q.options} />
						</div>
					);
				})}
			</div>
		</>
	);
}

export default App;
