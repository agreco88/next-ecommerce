import { useCartContext } from "@/contexts/CartContext";
import Button, { SecondaryButton } from "./Button";
import Navbar from "./Navbar";
import ProductDetail from "../products/ProductDetail";
import Image from "next/image";

export const DesktopSidebar = ({ isOpen, onClose }) => {
	const { cart, removeFromCart } = useCartContext();

	const handleContentClick = (event) => {
		// If the cart is clicked. Prevent the click event from propagating to the parent aside when the content aside (cart) is clicked.
		// This way the user can close the modal by clicking anywhere except the cart
		event.stopPropagation();
	};

	return (
		<aside
			onClick={onClose}
			className={`fixed inset-0 bg-gray-800 bg-opacity-90 z-20 ${
				isOpen ? "block" : "hidden"
			}`}
		>
			<div
				onClick={handleContentClick}
				className="bg-white rounded-lg flex flex-col gap-8 text-black p-8 h-full w-full md:w-2/4 absolute right-0"
			>
				<div className="flex w-full justify-between">
					<p className="flex text-4xl font-thin uppercase">
						Your cart
					</p>
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
						<CartProductItem product={cartItem} />
					))}
				</div>
			</div>
		</aside>
	);
};

const CartProductItem = ({ product }) => {
	return (
		<div className="flex flex-col justify-between h-full border border-gray-400 shadow-lg shadow-gray-200 p-4 rounded-md">
			<Image
				alt={product.title}
				src={`/img/products/${product.image}`}
				width={50}
				height={50}
				className="w-full h-auto rounded"
			/>
			<h5 className="truncate"> {product.title}</h5>
			<p>${product.price}</p>
			<SecondaryButton
				className="w-full"
				onClick={() => console.log("Todo remove from cart context")}
			>
				REMOVE
			</SecondaryButton>
		</div>
	);
};

export const MobileSidebar = ({ isOpen, onClose }) => {
	return (
		<aside
			className={`fixed inset-0 bg-gray-800 bg-opacity-90 z-20 ${
				isOpen ? "block" : "hidden"
			}`}
		>
			<div className="flex p-8 bg-white text-black justify-between h-full w-full md:w-1/4 absolute right-0">
				<Navbar />
				<Button
					onClick={onClose}
					className="h-auto w-auto self-start border-0 px-0 py-0 p-0 hover:bg-white group"
				>
					<span className="text-black uppercase font-bold">
						Close
					</span>
				</Button>
			</div>
		</aside>
	);
};
