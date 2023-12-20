"use client";
import React from "react";
import Link from "next/link";
import Logo from "../ui/Logo";
import Navbar from "../ui/Navbar";
import { DesktopSidebar } from "../ui/Sidebar";
import headerNavbarOptions from "@/constants/headerNavbarOptions";
import CartButton from "../ui/cart/CartButton";
import { LoginButton } from "../ui/button/LoginButton";
import { useAuthContext } from "@/contexts/AuthContext";
import { LogoutButton } from "../ui/button/LogoutButton";

const DesktopHeader = ({ desktopSidebarOpen, setDesktopSidebarOpen }) => {
	const { user } = useAuthContext();

	return (
		<header className="hidden md:flex justify-between items-center px-5 md:px-0 md:h-[10vh] py-5 md:py-16 relative z-10 w-full font-mono text-sm gap-12">
			<Link href={"/"}>
				<Logo />
			</Link>
			<Navbar
				orientation="horizontal"
				navbarOptions={headerNavbarOptions}
			/>
			<div className="flex gap-4">
				{user.logged ? <LogoutButton /> : <LoginButton />}
				<CartButton
					isOpen={desktopSidebarOpen}
					onClickHandler={setDesktopSidebarOpen}
				/>
			</div>
			<DesktopSidebar
				isOpen={desktopSidebarOpen}
				onClose={setDesktopSidebarOpen}
			/>
		</header>
	);
};

export default DesktopHeader;
