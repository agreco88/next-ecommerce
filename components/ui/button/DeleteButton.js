"use client";
import React, { useState } from "react";
import ButtonWithIcon from "./ButtonWithIcon";
import { FaTrash } from "react-icons/fa";
import ConfirmationModal from "./ConfirmationModal";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/config";

const DeleteButton = ({ product }) => {
	const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);

	const handleDeleteClick = () => {
		setConfirmationModalOpen(true);
	};

	const handleConfirmDelete = () => {
		// Perform the delete action here
		// For example, you can call your delete function and then close the modal
		deleteProduct(product.slug);
		setConfirmationModalOpen(false);
	};

	const handleCancelDelete = () => {
		setConfirmationModalOpen(false);
	};

	const deleteProduct = async (slug) => {
		try {
			const docRef = doc(db, "products", slug);
			await deleteDoc(docRef);
			console.log(`Product with slug ${slug} deleted successfully.`);
		} catch (error) {
			console.error("Error deleting product:", error.message);
		}
	};

	return (
		<>
			<ButtonWithIcon
				onClick={handleDeleteClick}
				className="opacity-75 hover:opacity-100 border-red-500 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 via-red-500 to-red-600 text-white"
				icon={<FaTrash />}
			>
				DELETE
			</ButtonWithIcon>

			{/* Confirmation Modal */}
			<ConfirmationModal
				isOpen={isConfirmationModalOpen}
				onClose={handleCancelDelete}
				onConfirm={handleConfirmDelete}
			/>
		</>
	);
};

export default DeleteButton;
