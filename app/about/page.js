import Hero from "@/components/ui/Hero";

export const metadata = {
	title: "MyECOMMERCE - About",
	description: "Contact page meta: Generated by create next app",
	keywords: ["contact us", "contact", "get in touch", "contact"],
};

export default function AboutPage() {
	return (
		<div className="flex flex-col md:flex-row w-full md:h-full justify-around gap-8 items-center flex-grow">
			<Hero
				aligned="center"
				title="About"
				styledWord=" us"
				subTitle="Here is (where it will be) all there is to know about us."
			/>
		</div>
	);
}