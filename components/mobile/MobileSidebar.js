import React from "react";
import Navbar from "../ui/Navbar";
import { MobileLogo } from "../ui/Logo";
import MobileHamburguerButton from "./MobileHamburgerButton";
import headerNavbarOptions from "@/constants/headerNavbarOptions";
import Cart from "../ui/cart/Cart";
import MobileCart from "../ui/cart/MobileCart";

const MobileSidebar = ({ isOpen, onClose }) => {
	return (
		<aside
			className={`fixed  inset-0 bg-gray-800 bg-opacity-90 z-20 ${
				isOpen ? "flex flex-col justify-center" : "hidden"
			}`}
		>
			<div className="flex flex-col px-5 justify-start bg-white h-full w-full">
				<div className="flex h-[10vh] justify-between w-full items-center">
					<MobileLogo />
					<MobileHamburguerButton onClickHandler={onClose} />
				</div>
				<Navbar
					orientation="horizontal"
					textColor="black"
					navbarOptions={headerNavbarOptions}
				/>
				<MobileCart onClose={onClose} />
			</div>
		</aside>
	);
};

export default MobileSidebar;
