const QuizCard = ({ question, options, handleOptionSelection }) => {
	return (
		<div className="rounded-2xl h-150 w-200 bg-purple-300 p-2.5 flex flex-col gap-10 items-center justify-center">
			<h1>{question}</h1>
			<div className="flex items-center justify-center">
				<div className="rounded-2xl bg-pink-400 p-4">
					<div className="grid grid-cols-2 gap-4 place-items-center">
						{options.map((option) => {
							return (
								<button
									key={option}
									className="bg-violet-500 rounded-2xl w-75 h-50 cursor-pointer hover:bg-purple-500 transition-colors"
									onClick={handleOptionSelection}
								>
									{option}
								</button>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuizCard;
