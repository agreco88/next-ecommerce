"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (product) => {
		// Check if the product is already in the cart
		const existingProduct = cart.find((item) => item.id === product.id);

		if (existingProduct) {
			// If the product is already in the cart, update the quantity
			const updatedCart = cart.map((item) =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setCart(updatedCart);
		} else {
			// If the product is not in the cart, add it with quantity 1
			setCart([...cart, { ...product, quantity: 1 }]);
		}
	};

	const decrementQuantity = (productId) => {
		// Find the product in the cart
		const productToRemove = cart.find((item) => item.id === productId);

		if (productToRemove) {
			// If the product is found, decrease the quantity
			const updatedCart = cart.map((item) =>
				item.id === productId
					? { ...item, quantity: item.quantity - 1 }
					: item
			);

			// Remove the product if the quantity becomes zero
			const filteredCart = updatedCart.filter(
				(item) => item.quantity > 0
			);

			setCart(filteredCart);
		}
	};

	const removeItem = (productId) => {
		setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
	};

	const calculateTotalItems = () => {
		return cart.reduce((totalItems, cartItem) => {
			return totalItems + cartItem.quantity;
		}, 0);
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				decrementQuantity,
				removeItem,
				calculateTotalItems,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
