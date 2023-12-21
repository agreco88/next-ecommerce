"use client";
import React from "react";
import Image from "next/image";
import { SecondaryButton } from "../Button";
import { useCartContext } from "@/contexts/CartContext";
import { IoMdAdd, IoMdRemove, IoMdTrash } from "react-icons/io";

const CartProduct = ({ product }) => {
	const { addToCart, decrementQuantity, removeItem } = useCartContext();

	return (
		<tr className="hover:bg-gray-50 !w-full flex-grow">
			<td className="w-6/12 truncate overflow-hidden grow pl-4 py-4 whitespace-nowrap">
				{product.title}
			</td>
			<td className="w-1/12 py-4 whitespace-nowrap">
				{product.quantity}
			</td>
			<td className="w-1/12 py-4 whitespace-nowrap">${product.price}</td>
			<td className="w-1/12 py-4 whitespace-nowrap">
				${product.price * product.quantity}
			</td>
			<td className="w-3/12 ">
				<div className="flex items-center justify-center gap-4 whitespace-nowrap">
					<button>
						<IoMdAdd
							className="w-5 h-5"
							onClick={() => addToCart(product)}
						/>
					</button>
					<button>
						<IoMdRemove
							className="w-5 h-5"
							onClick={() => decrementQuantity(product.slug)}
						/>
					</button>
					<button>
						<IoMdTrash
							className="w-5 h-5"
							onClick={() => removeItem(product.slug)}
						/>
					</button>
				</div>
			</td>
		</tr>
	);
};

export default CartProduct;
