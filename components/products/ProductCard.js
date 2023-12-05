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
		<article className="border border-gray-600 flex flex-col gap-4 p-8 rounded-md">
			<Link href={`/products/detail/${product.slug}`} className="">
				<Image
					alt={product.title}
					src={`/img/products/${product.image}`}
					width={400}
					height={400}
					className="w-full h-auto md:h-44 rounded"
				/>
			</Link>

			<h4 className="text-sm truncate">{product.title}</h4>
			<p className="text-2xl font-semibold">${product.price}</p>
			<div className="flex justify-between">
				<PrimaryButton
					className="bg-gray-400"
					onClick={() => addToCart(product)}
				>
					Add to cart
				</PrimaryButton>
				<SecondaryButton
					onClick={() => handleNavigation(product.slug)}
					className="bg-gray-600"
				>
					More info
				</SecondaryButton>
			</div>
		</article>
	);
};

export default ProductCard;
