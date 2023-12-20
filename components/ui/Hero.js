const Hero = ({
	isHomeHero = false,
	title = "Title with",
	styledWord = " styled word",
	subTitle,
	aligned = "center", // Default alignment is center
}) => {
	const textAlignmentStyle =
		aligned === "left"
			? { textAlign: "left" }
			: aligned === "right"
			? { textAlign: "right" }
			: { textAlign: "center" };

	return (
		<div
			className={`container mx-auto text-white pt-16 relative overflow-hidden`}
			style={textAlignmentStyle}
		>
			{isHomeHero ? (
				<h1 className="mb-4 text-3xl md:text-center font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
					{title}{" "}
					{styledWord && (
						<span className="text-transparent  bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
							{styledWord}
						</span>
					)}
				</h1>
			) : (
				<h2 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl 2xl:text-6xl">
					{title}
					{styledWord && (
						<span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
							{styledWord}
						</span>
					)}
				</h2>
			)}

			{isHomeHero ? (
				<h2 className="text-sm md:text-center lg:text-xl opacity-75 mb-8">
					{subTitle}
				</h2>
			) : (
				subTitle && (
					<h3
						style={textAlignmentStyle}
						className="text-sm md:text-center lg:text-xl opacity-75 mb-8"
					>
						{subTitle}
					</h3>
				)
			)}
		</div>
	);
};

export default Hero;
