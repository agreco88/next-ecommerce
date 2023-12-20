"use client";
import React from "react";
import Image from "next/image";
import { SecondaryButton } from "../Button";
import { useCartContext } from "@/contexts/CartContext";

const CartProduct = ({ product }) => {
	const { addToCart, decrementQuantity, removeItem } = useCartContext();

	return (
		<div className="flex flex-col gap-4 text-black md:text-white justify-between h-full border border-gray-400 shadow-lg shadow-gray-200 p-4 rounded-md">
			<div className="flex gap-2 items-center">
				<div className="flex flex-col  gap-2 w-full">
					<h5 className="md:truncate "> {product.title}</h5>
					<p>${product.price}</p>
					<p>Quantity:{product.quantity}</p>
				</div>
				<Image
					alt={product.title}
					src={`/img/products/${product.image}`}
					width={50}
					height={50}
					className="w-1/4 h-1/2 md:w-full md:h-auto rounded"
				/>
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
					Remove
				</SecondaryButton>
			</div>
		</div>
	);
};

export default CartProduct;
