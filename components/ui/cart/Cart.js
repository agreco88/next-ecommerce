"use client";
import { useCartContext } from "@/contexts/CartContext";
import React from "react";
import Button, { PrimaryButton } from "../Button";
import CartProduct from "./CartProduct";

const Cart = ({ onClose }) => {
	const { cart } = useCartContext();

	// Function to calculate the total price using reduce property.
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
			{cart.length === 0 ? (
				<h2>Your cart is empty.</h2>
			) : (
				<>
					<table className="w-full text-xs text-left text-black bg-gray-50 rounded">
						<thead className="text-xs uppercase">
							<tr className="border-b">
								<th
									scope="col"
									className="w-6/12 pl-4 py-4 text-start uppercase caption font-bold"
								>
									Product name
								</th>
								<th
									scope="col"
									className="w-1/12 py-4 text-start uppercase caption font-bold"
								>
									QTY
								</th>
								<th
									scope="col"
									className="w-1/12 py-4 text-start uppercase caption font-bold"
								>
									Price
								</th>
								<th
									scope="col"
									className="w-1/12 py-4 text-start uppercase caption font-bold"
								>
									Total
								</th>
								<th
									scope="col"
									className="w-3/12 py-4 text-center uppercase caption font-bold"
								>
									Actions
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-200 w-full">
							{cart.map((cartItem) => (
								<CartProduct
									product={cartItem}
									key={cartItem.slug}
								/>
							))}
						</tbody>
					</table>
					<div className="flex justify-between items-center w-full">
						<div className="text-lg font-bold">
							Total Price: ${calculateTotalPrice().toFixed(2)}
						</div>
						<PrimaryButton
							onClick={() => console.log("Todo checkout")}
							className="bg-black"
						>
							Checkout
						</PrimaryButton>
					</div>
				</>
			)}
		</>
	);
};

export default Cart;
