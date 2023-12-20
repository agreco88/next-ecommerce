import React from "react";
import Button from "../ui/Button";

const MobileHamburguerButton = ({ onClickHandler }) => (
	<Button
		onClick={onClickHandler}
		className="flex flex-col gap-0.2 h-3 w-[3.20rem] px-2.5 z-20 justify-around"
	>
		<span className="w-full h-0.5 rounded-lg bg-gray-400 group-hover:bg-gray-600 group-active:bg-gray-600" />
		<span className="w-full h-0.5 rounded-lg bg-gray-400 group-hover:bg-gray-600 group-active:bg-gray-600" />
		<span className="w-full h-0.5 rounded-lg bg-gray-400 group-hover:bg-gray-600 group-active:bg-gray-600" />
	</Button>
);

export default MobileHamburguerButton;
