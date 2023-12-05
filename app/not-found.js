"use client";
import Button from "@/components/ui/Button";
import Hero from "@/components/ui/Hero";
import { useRouter } from "next/navigation";

export const generateMetadata = async ({ params }) => {
	return { title: "MyECOMMERCE - " + params.category.toUpperCase() };
};

export default function NotFound() {
	const router = useRouter();

	return (
		<div className="flex flex-col w-full md:h-full justify-around gap-8 items-center flex-grow">
			<Hero
				title="404. "
				styledWord="Not found"
				subTitle="We can't sell you this because it does not exist, but go back, we've got other itmes :)"
			></Hero>
			<Button className="w-fit uppercase" onClick={() => router.back()}>
				Take me back
			</Button>
		</div>
	);
}
