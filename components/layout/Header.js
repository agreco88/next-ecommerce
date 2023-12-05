"use client";
import React, { useState } from "react";
import Logo from "../ui/Logo";
import Navbar from "../ui/Navbar";
import Button from "../ui/Button";
import { DesktopSidebar, MobileSidebar } from "../ui/Sidebar";
import Link from "next/link";
import headerNavbarOptions from "@/constants/headerNavbarOptions";
import { useCartContext } from "@/contexts/CartContext";

const Header = () => {
	const [isSidebarVisible, setIsSliderVisible] = useState(false);
	const [isMobileSidebarVisible, setIsMobileSliderVisible] = useState(false);

	const toggleDesktopSidebar = () => {
		setIsSliderVisible(!isSidebarVisible);
		setIsMobileSliderVisible(false); // Close mobile sidebar
	};

	const toggleMobileSidebar = () => {
		setIsMobileSliderVisible(!isMobileSidebarVisible);
		setIsSliderVisible(false); // Close desktop sidebar
	};

	return (
		<>
			<div className="hidden md:flex">
				<DesktopHeader
					isDesktopSidebarOpen={isSidebarVisible}
					toggleDesktopSidebar={toggleDesktopSidebar}
				/>
			</div>
			<div className="flex md:hidden">
				<MobileHeader
					isMobileSidebarOpen={isMobileSidebarVisible}
					toggleMobileSidebar={toggleMobileSidebar}
				/>
			</div>
		</>
	);
};

const DesktopHeader = ({ isDesktopSidebarOpen, toggleDesktopSidebar }) => (
	<>
		<header className="flex justify-between items-center px-5 md:px-0 md:h-[10vh] py-5 md:py-16 relative z-10 w-full font-mono text-sm gap-12">
			<Link href={"/"}>
				<Logo />
			</Link>

			<Navbar
				orientation="horziontal"
				navbarOptions={headerNavbarOptions}
			/>
			<CartButton
				isOpen={isDesktopSidebarOpen}
				onClickHandler={toggleDesktopSidebar}
			/>
		</header>
		<DesktopSidebar
			isOpen={isDesktopSidebarOpen}
			onClose={toggleDesktopSidebar}
		/>
	</>
);

const MobileHeader = ({ isMobileSidebarOpen, toggleMobileSidebar }) => (
	<>
		<header className="px-5 md:px-0 py-5 md:py-16 relative z-10 w-full items-center justify-between font-mono text-sm flex">
			<Logo />
			<MobileHamburguerButton onClickHandler={toggleMobileSidebar} />
		</header>
		<MobileSidebar
			isOpen={isMobileSidebarOpen}
			onClose={toggleMobileSidebar}
		/>
	</>
);

const MobileHamburguerButton = ({ onClickHandler }) => (
	<Button
		onClick={onClickHandler}
		className="flex flex-col gap-0.2 w-11 px-2.5 z-30 justify-around"
	>
		<span className="w-full h-0.5 rounded-lg bg-gray-400 group-hover:bg-gray-600 group-active:bg-gray-600" />
		<span className="w-full h-0.5 rounded-lg bg-gray-400 group-hover:bg-gray-600 group-active:bg-gray-600" />
		<span className="w-full h-0.5 rounded-lg bg-gray-400 group-hover:bg-gray-600 group-active:bg-gray-600" />
	</Button>
);

const CartButton = ({ isOpen, onClickHandler }) => {
	const { cart } = useCartContext();

	return (
		<Button onClick={onClickHandler}>
			{isOpen ? "CLOSE" : "OPEN"} CART ({cart.length})
		</Button>
	);
};

export default Header;
