"use client";
import { useCartContext } from "@/contexts/CartContext";
import React from "react";
import Button from "../Button";
import CartProduct from "./CartProduct";

const Cart = ({ onClose }) => {
	const { cart } = useCartContext();

	// Function to calculate the total price using reduce property.
	// accumulator: total (accumulates the result of the previous iteration)
	// initialValue: 0
	const calculateTotalPrice = () => {
		return cart.reduce((total, cartItem) => {
			const itemPrice = cartItem.price;
			const quantity = cartItem.quantity;
			return total + itemPrice * quantity;
		}, 0);
	};

	return (
		<>
			<div className="flex w-full justify-between">
				<p className="flex text-4xl font-thin uppercase">Your cart</p>
				<Button
					onClick={onClose}
					className="w-10 h-10 border-0 hover:bg-white group"
				>
					<div className="flex group-hover:rotate-180 transition-all duration-300 flex-col h-4 gap-0.5 w-10 text-black justify-around">
						X
					</div>
				</Button>
			</div>
			<div className="grid grid-cols-3 gap-8">
				{cart.map((cartItem) => (
					<CartProduct product={cartItem} key={cartItem.id} />
				))}
			</div>
			<div className="mt-4 text-lg font-bold">
				Total Price: ${calculateTotalPrice().toFixed(2)}
			</div>
		</>
	);
};

export default Cart;
