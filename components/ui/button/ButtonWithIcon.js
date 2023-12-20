"use client";
import React from "react";

const ButtonWithIcon = ({
	children,
	className = "",
	icon,
	isDisabled = false,
	...args
}) => {
	return (
		<button
			disabled={isDisabled}
			className={`order-last transition-all duration-300 flex uppercase gap-2 items-center justify-center px-3 py-2 border-gray-400 border text-black rounded-md ${className}`}
			{...args}
		>
			{icon}
			{children}
		</button>
	);
};

export default ButtonWithIcon;
