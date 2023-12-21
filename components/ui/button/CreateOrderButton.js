"use client";
import React, { useState } from "react";
import ButtonWithIcon from "./ButtonWithIcon";
import { FaTrash } from "react-icons/fa";
import ConfirmationModal from "./ConfirmationModal";
import { setDoc, doc, Timestamp, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase/config";

const CreateButtonOrder = ({ product }) => {
	const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);

	const createOrder = async (values, items) => {
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

		return docId;
	};

	const handleCreateOrderClick = async () => {
		// Call your createOrder function here
		await createOrder(product);
		setConfirmationModalOpen(true);
	};

	const handleConfirm = () => {
		setConfirmationModalOpen(false);
		// Additional actions you may want to perform after confirmation
	};

	const handleCancel = () => {
		setConfirmationModalOpen(false);
		// Additional actions you may want to perform after cancellation
	};

	return (
		<>
			<ButtonWithIcon
				onClick={handleCreateOrderClick}
				className="opacity-75 hover:opacity-100 border-red-500 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 via-red-500 to-red-600 text-white"
				icon={<FaTrash />}
			>
				Create Order
			</ButtonWithIcon>

			{/* Confirmation Modal */}
			<ConfirmationModal
				isOpen={isConfirmationModalOpen}
				onClose={handleCancel}
				onConfirm={handleConfirm}
				title="Order Created"
				message="Your order has been successfully created."
				confirmButtonText="OK"
			/>
		</>
	);
};

export default CreateButtonOrder;
