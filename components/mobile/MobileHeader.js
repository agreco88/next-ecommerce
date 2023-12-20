import Logo from "@/components/ui/Logo";
import React from "react";
import MobileHamburguerButton from "./MobileHamburgerButton";
import MobileSidebar from "./MobileSidebar";

const MobileHeader = ({ mobileSidebarOpen, setMobileSidebarOpen }) => (
	<header className="flex h-[10vh] justify-between w-full items-center px-5">
		<Logo />
		<MobileHamburguerButton onClickHandler={setMobileSidebarOpen} />
		<MobileSidebar
			isOpen={mobileSidebarOpen}
			onClose={setMobileSidebarOpen}
		/>
	</header>
);

export default MobileHeader;
