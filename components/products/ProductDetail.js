"use client";

import { useCartContext } from "@/contexts/CartContext";
import PrimaryButton from "../ui/Button";
import Image from "next/image";

const ProductDetail = ({ selectedProduct }) => {
	const { addToCart } = useCartContext();

	return (
		<>
			<div className="col-span-1 self-center flex flex-col gap-8 flex-grow h-full justify-center py-8 md:py-0">
				<h2 className="md:text-4xl font-semibold md:font-thin md:w-5/6">
					{selectedProduct.title}
				</h2>
				<p className="text-xs sm:text-sm font-light tracking-wide py-4 md:w-5/6">
					{selectedProduct.description}
				</p>
				<PrimaryButton
					className="md:w-1/3"
					onClick={() => addToCart(selectedProduct)}
				>
					ADD ITEM TO CART
				</PrimaryButton>
			</div>
			<Image
				alt={selectedProduct.title}
				src={`/img/products/${selectedProduct.image}`}
				width={400}
				height={400}
				className="w-full h-auto rounded"
			/>
		</>
	);
};

export default ProductDetail;
