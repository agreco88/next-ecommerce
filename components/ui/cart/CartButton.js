import React from "react";
import Button from "../Button";
import { useCartContext } from "@/contexts/CartContext";

const CartButton = ({ isOpen, onClickHandler }) => {
	const { calculateTotalItems } = useCartContext();
	const totalItems = calculateTotalItems();

	return (
		<Button onClick={onClickHandler}>
			{isOpen ? "CLOSE" : "OPEN"} CART ({totalItems})
		</Button>
	);
};

export default CartButton;
