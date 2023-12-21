"use client";
import { useAuthContext } from "@/contexts/AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({
	orientation = "vertical",
	navbarOptions = [],
	textColor = "white",
}) => {
	const pathname = usePathname();
	const { user } = useAuthContext();
	return (
		<nav className="flex">
			<ul
				className={`text-${textColor} flex justify-between md:justify-start w-full ${
					orientation === "vertical" ? "flex-col" : "flex-row"
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
				{user.logged &&
					user.role === "admin" &&
					orientation != "vertical" && (
						<li key="adminPageHref">
							<Link
								className={`${
									pathname.startsWith("/admin")
										? "opacity-100"
										: "opacity-50"
								}`}
								href={"/admin"}
							>
								Dashboard
							</Link>
						</li>
					)}
				{user.logged &&
					user.role === "user" &&
					orientation != "vertical" && (
						<li key="userPageHref">
							<Link
								className={`${
									pathname.startsWith("/profile")
										? "opacity-100"
										: "opacity-50"
								}`}
								href={"/profile"}
							>
								Profile
							</Link>
						</li>
					)}
			</ul>
		</nav>
	);
};

export default Navbar;
