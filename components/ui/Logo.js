import Image from "next/image";

const Logo = () => {
	return (
		<Image
			className="flex relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
			src="/next.svg"
			alt="Next.js Logo"
			width={140}
			height={37}
			priority
		/>
	);
};

export const MobileLogo = () => {
	return (
		<Image
			className="flex relative dark:drop-shadow-[0_0_0.3rem_#70] dark:invert"
			src="/next.svg"
			alt="Next.js Logo"
			width={140}
			height={37}
			priority
		/>
	);
};

export default Logo;
