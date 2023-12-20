import Cart from "./cart/Cart";

export const DesktopSidebar = ({ isOpen, onClose }) => {
	const handleContentClick = (event) => {
		// If the cart is clicked. Prevent the click event from propagating to the parent aside when the content aside (cart) is clicked.
		// This way the user can close the cart by clicking anywhere except the cart
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
				<Cart onClose={onClose} />
			</div>
		</aside>
	);
};
