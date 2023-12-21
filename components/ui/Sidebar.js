import { useCartContext } from "@/contexts/CartContext";
import ClientForm from "../forms/ClientForm";
import Cart from "./cart/Cart";
import Button from "./Button";

export const DesktopSidebar = ({ isOpen, onClose }) => {
	const handleContentClick = (event) => {
		// If the cart is clicked. Prevent the click event from propagating to the parent aside when the content aside (cart) is clicked.
		// This way the user can close the cart by clicking anywhere except the cart
		event.stopPropagation();
	};
	const { cart } = useCartContext();

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
				{cart.length > 0 ? (
					<>
						<Cart />
						<ClientForm />
					</>
				) : (
					<p>You need to add items to the shopping cart first</p>
				)}
			</div>
		</aside>
	);
};
