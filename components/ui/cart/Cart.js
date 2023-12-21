"use client";
import { useCartContext } from "@/contexts/CartContext";
import React from "react";
import Button, { PrimaryButton } from "../Button";
import CartProduct from "./CartProduct";

const Cart = () => {
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
						<CartProduct product={cartItem} key={cartItem.slug} />
					))}
				</tbody>
			</table>
			<div className="flex justify-end items-center w-full">
				<div className="text-lg font-bold">
					Total Price: ${calculateTotalPrice().toFixed(2)}
				</div>
			</div>
		</>
	);
};

export default Cart;
