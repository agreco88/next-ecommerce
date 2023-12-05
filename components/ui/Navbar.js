"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ orientation = "horizontal", navbarOptions = [] }) => {
	const pathname = usePathname();

	return (
		<nav className="flex">
			<ul
				className={`flex justify-between md:justify-start w-full ${
					orientation === "vertical"
						? "flex-row md:flex-col"
						: "flex-col md:flex-row"
				} gap-8`}
			>
				{navbarOptions.map((navbarOption) => (
					<li key={navbarOption.href}>
						{/* Condition to make it so that only the exact home route and the routes starting with /products/ are bolded, 
						as well as other routes according to their respective conditions. */}
						<Link
							className={`${
								pathname === navbarOption.href ||
								(pathname.startsWith(navbarOption.href) &&
									pathname.charAt(
										navbarOption.href.length
									) === "/")
									? "opacity-100"
									: "opacity-50"
							}`}
							href={navbarOption.href}
						>
							{navbarOption.title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
