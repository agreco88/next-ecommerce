"use client";
import { useCartContext } from "@/contexts/CartContext";
import React from "react";
import MobileCartProduct from "@/components/mobile/MobileCartProduct";

const MobileCart = ({ onClose }) => {
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
		<div className="flex flex-col py-4 h-full justify-around">
			<p className="flex text-4xl pt-8 w-full font-bold text-black">
				Your cart
			</p>
			<ul className="bg-red-900 py-4 gap-8 h-full flex flex-col">
				{cart.map((cartItem) => (
					<li className="text-red-200 bg-red-700 w-full">
						<MobileCartProduct product={cartItem} />
					</li>
				))}
			</ul>
			<div className="mt-4 text-lg flex justify-between text-black font-bold items-center">
				<span className="uppercase">Total</span>
				<span className="text-4xl font-thin">
					${calculateTotalPrice().toFixed(2)}
				</span>
			</div>
		</div>
	);
};

export default MobileCart;
