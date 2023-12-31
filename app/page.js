import homeStatsData from "@/constants/homeStatsData";
import Hero from "@/components/ui/Hero";
import StatList from "@/components/ui/StatList";

export const metadata = {
	title: "MyECOMMERCE - HOME",
	description: "Generated by create next app",
};

export default function Home() {
	return (
		<div className="flex flex-col w-full h-full justify-around flex-grow">
			<Hero
				isHomeHero
				aligned="left"
				title="Discover your"
				styledWord="style"
				subTitle="Explore our curated collection of fashion and accessories."
			/>
			<StatList list={homeStatsData} />
		</div>
	);
}
