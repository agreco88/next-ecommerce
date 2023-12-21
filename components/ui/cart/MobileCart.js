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
		<>
			<p className="flex text-4xl pt-8 w-full font-bold text-black">
				Your cart
			</p>
			<div className="flex flex-col py-4  justify-around overflow-scroll">
				<ul className="py-4 gap-8 h-full flex flex-col">
					{cart.length > 0 ? (
						cart.map((cartItem) => (
							<li
								key={cartItem.slug}
								className="p-2 text-black border rounded-lg border-black w-full"
							>
								<MobileCartProduct product={cartItem} />
							</li>
						))
					) : (
						<p className="text-black">
							You need to add items to the cart
						</p>
					)}
				</ul>
			</div>
			<div className="mt-4 text-lg flex justify-between text-black font-bold items-center">
				<span className="uppercase">Total</span>
				<span className="text-4xl font-thin">
					${calculateTotalPrice().toFixed(2)}
				</span>
			</div>
		</>
	);
};

export default MobileCart;
