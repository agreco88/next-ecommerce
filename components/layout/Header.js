"use client";
import React, { useState } from "react";
import MobileHeader from "@/components/mobile/MobileHeader";
import DesktopHeader from "./DesktopHeader";

const Header = () => {
	const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(false);
	const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

	const toggleDesktopSidebar = () => {
		setDesktopSidebarOpen(!desktopSidebarOpen);
		setMobileSidebarOpen(false); // Close mobile sidebar
	};

	const toggleMobileSidebar = () => {
		setMobileSidebarOpen(!mobileSidebarOpen);
		setDesktopSidebarOpen(false); // Close desktop sidebar
	};

	return (
		<>
			<div className="hidden md:flex">
				<DesktopHeader
					desktopSidebarOpen={desktopSidebarOpen}
					setDesktopSidebarOpen={toggleDesktopSidebar}
				/>
			</div>
			<div className="md:hidden flex">
				<MobileHeader
					mobileSidebarOpen={mobileSidebarOpen}
					setMobileSidebarOpen={toggleMobileSidebar}
				/>
			</div>
		</>
	);
};

export default Header;
