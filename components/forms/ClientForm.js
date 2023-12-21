import React, { useState } from "react";
import { db } from "@/firebase/config";
import { setDoc, doc, Timestamp, serverTimestamp } from "firebase/firestore";
import PrimaryButton from "../ui/Button";
import { useCartContext } from "@/contexts/CartContext";
import Link from "next/link";
import { useAuthContext } from "@/contexts/AuthContext";

const createOrder = async (values, items) => {
	try {
		const order = {
			client: values,
			items: items.map((item) => ({
				title: item.title,
				price: item.price,
				slug: item.slug,
				quantity: item.quantity,
			})),
			date: serverTimestamp(),
		};

		const docId = Timestamp.fromDate(new Date()).toMillis();
		const orderRef = doc(db, "orders", String(docId));
		await setDoc(orderRef, order);

		return { success: true, orderId: docId };
	} catch (error) {
		console.error("Error creating order:", error.message);
		return { success: false, error: error.message };
	}
};

const ClientForm = () => {
	const { cart } = useCartContext();
	const { user } = useAuthContext();

	const [values, setValues] = useState({
		email: "",
		direccion: "",
		nombre: "",
	});

	const [submitting, setSubmitting] = useState(false);
	const [submitResult, setSubmitResult] = useState(null);

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitting(true);

		try {
			const result = await createOrder(values, cart);
			console.log(result);
			setSubmitResult(result);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<>
			{user.logged ? (
				<form onSubmit={handleSubmit} className="my-12">
					<h2>Ready to checkout?</h2>
					<input
						type="nombre"
						required
						placeholder="Your name"
						className="p-2 rounded w-1/2 border border-blue-100 block my-4"
						name="nombre"
						onChange={handleChange}
					/>
					<input
						type="direccion"
						required
						placeholder="Your address"
						className="p-2 rounded w-1/2 border border-blue-100 block my-4"
						name="direccion"
						onChange={handleChange}
					/>
					<input
						type="email"
						required
						placeholder={user.email ? user.email : "Your email"}
						className="p-2 rounded w-1/2 border border-blue-100 block my-4"
						name="email"
						onChange={handleChange}
					/>
					<button
						className="opacity-75 uppercase border border-gray-100 rounded-lg  px-4 py-2 hover:opacity-100  bg-gray-100 hover:bg-gray-200 transition-all duration-500 text-black"
						type="submit"
						disabled={submitting}
					>
						{submitting ? "Submitting..." : "Checkout order"}
					</button>

					{submitResult && (
						<div
							className={
								submitResult.success
									? "text-green-500"
									: "text-red-500"
							}
						>
							{submitResult.success
								? `Order created successfully! Order ID: ${submitResult.orderId}. An email will be sent shortly`
								: `Error: ${submitResult.error}`}
						</div>
					)}
				</form>
			) : (
				<div className="flex flex-col w-full items-center justify-center gap-4">
					You need to login before checking out. Login clicking here
					<Link href="/admin">GO TO LOGIN</Link>
				</div>
			)}
		</>
	);
};

export default ClientForm;
