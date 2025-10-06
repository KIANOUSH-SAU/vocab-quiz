const QuizCard = ({ question, options, handleOptionSelection }) => {
	return (
		<div className="rounded-2xl bg-purple-300 p-6 flex flex-col gap-8 items-center justify-center max-w-2xl w-full">
			<h1 className="text-xl font-semibold text-center">{question}</h1>
			<div className="flex items-center justify-center w-full">
				<div className="rounded-2xl bg-pink-400 p-6 w-full">
					<div className="grid grid-cols-2 gap-4 place-items-center">
						{options.map((option) => {
							return (
								<button
									key={option}
									className="bg-violet-500 rounded-2xl py-4 px-2 min-h-[60px] w-full cursor-pointer hover:bg-purple-500 transition-colors text-white font-medium text-sm break-words"
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
