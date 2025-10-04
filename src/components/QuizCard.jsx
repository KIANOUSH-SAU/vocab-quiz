const QuizCard = ({ question, options }) => {
	return (
		<div className="rounded-2xl h-100 w-64 bg-purple-300 p-2.5 flex flex-col gap-10 items-center justify-center">
			<h1>{question}</h1>
			<div className="flex items-center justify-center">
				<div className="rounded-2xl bg-pink-400 p-4">
					<div className="grid grid-cols-2 gap-4 place-items-center">
						{options.map((option) => {
							return (
								<button
									key={option}
									className="bg-violet-500 rounded-2xl w-20 h-10 cursor-pointer hover:bg-purple-500 transition-colors"
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
