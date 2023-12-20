"use client";
import React from "react";
import { SecondaryButton } from "../ui/Button";
import { useCartContext } from "@/contexts/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";

const MobileCartProduct = ({ product }) => {
	const { cart, addToCart, decrementQuantity, removeItem } = useCartContext();

	return (
		<div className="flex flex-col gap-4">
			<h5 className="flex">{product.title}</h5>
			<div className="flex justify-between w-full">
				<p>QTY: {product.quantity}</p>
				<p>Price per unit: ${product.price}</p>
			</div>
			<div className="flex justify-between gap-5">
				<SecondaryButton
					className="w-full"
					onClick={() => addToCart(product)}
				>
					+
				</SecondaryButton>
				<SecondaryButton
					className="w-full"
					onClick={() => decrementQuantity(product.id)}
				>
					-
				</SecondaryButton>
				<SecondaryButton
					className="w-full"
					onClick={() => removeItem(product.id)}
				>
					<FaRegTrashAlt />
				</SecondaryButton>
			</div>
		</div>
	);
};

export default MobileCartProduct;
