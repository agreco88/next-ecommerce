// ConfirmationModal.js
import React from "react";
import { FaTrash } from "react-icons/fa";
import ButtonWithIcon from "../button/ButtonWithIcon";

const CreateOrderModal = ({ isOpen, onClose, onConfirm }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
			<div className="bg-white p-8 rounded-lg shadow-md">
				<p className="text-lg mb-4">Order created!</p>
				<div className="flex justify-end gap-4">
					<button
						className="opacity-75 uppercase border border-gray-100 rounded-lg  px-4 hover:opacity-100  bg-gray-100 hover:bg-gray-200 transition-all duration-500 text-black"
						onClick={onClose}
					>
						Cancel
					</button>
					<ButtonWithIcon
						onClick={onConfirm}
						icon={<FaTrash />}
						className="opacity-75 hover:opacity-100 border-red-500 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 via-red-500 to-red-600 text-white"
					>
						Confirm
					</ButtonWithIcon>
				</div>
			</div>
		</div>
	);
};

export default CreateOrderModal;
