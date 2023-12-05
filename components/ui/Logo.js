import Image from "next/image";

const Logo = () => {
	return (
		<Image
			className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert -z-50"
			src="/next.svg"
			alt="Next.js Logo"
			width={140}
			height={37}
			priority
		/>
	);
};

export default Logo;
