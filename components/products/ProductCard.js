"use client";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton, SecondaryButton } from "../ui/Button";
import { useRouter } from "next/navigation";
import { useCartContext } from "@/contexts/CartContext";

const ProductCard = ({ product }) => {
	const router = useRouter();
	const { addToCart } = useCartContext();

	const handleNavigation = (slug) => {
		router.push("/products/detail/" + slug);
	};

	return (
		<article className="border border-gray-600 flex flex-col gap-4 p-4 rounded-md">
			<Link href={`/products/detail/${product.slug}`}>
				<Image
					alt={product.title}
					src={product.image}
					width={640}
					height={640}
					className="rounded"
				/>
			</Link>

			<h4 className="text-sm truncate font-bold uppercase">
				{product.title}
			</h4>
			<p className="text-2xl font-semibold">${product.price}</p>
			<div className="flex flex-col justify-between gap-2">
				<SecondaryButton
					onClick={() => handleNavigation(product.slug)}
					className="bg-gray-600"
				>
					More info
				</SecondaryButton>
				<PrimaryButton
					className="bg-gray-400"
					onClick={() => addToCart(product)}
				>
					Add to cart
				</PrimaryButton>
			</div>
		</article>
	);
};

export default ProductCard;
