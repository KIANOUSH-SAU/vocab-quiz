const PlayerInfo = () => {
	return (
		<div className="rounded-2xl bg-purple-300 p-2 flex items-center justify-center">
			<div className="grid grid-cols-2 gap-4 place-items-center bg-violet-500 rounded-2xl py-3">
				<div>
					<input
						className="rounded-lg px-3 py-2 text-white"
						placeholder="Enter name"
					/>
					<button className="cursor-pointer">Edit Name</button>
				</div>
				<h1 className="text-white font-semibold">Player Score: 0</h1>
			</div>
		</div>
	);
};

export default PlayerInfo;
