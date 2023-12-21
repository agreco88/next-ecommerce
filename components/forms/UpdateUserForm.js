// pages/update-profile.js

import { useAuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const UpdateUserForm = () => {
	const { user } = useAuthContext();
	const router = useRouter();

	const [formData, setFormData] = useState({
		name: user?.name || "",
		address: "",
		email: user?.email || "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			// Call the function to update user profile in firebase
			// await updateUserProfile(formData);
			// Redirect to a success page or any other route
			router.push("/profile");
		} catch (error) {
			console.error("Error updating profile:", error.message);
			// Handle the error or display a message to the user
		}
	};

	return (
		<div className=" bg-gray-50 rounded-lg text-black w-1/2 flex flex-col gap-4 p-8">
			<h3 className="uppercase font-light">Update Profile</h3>
			<form
				onSubmit={handleSubmit}
				className="grid grid-cols-3 gap-4 justify-between"
			>
				<div className="flex flex-col">
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
						className="border rounded-lg px-4 py-2"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="address">Address:</label>
					<input
						type="text"
						id="address"
						name="address"
						value={formData.address}
						onChange={handleChange}
						className="border rounded-lg px-4 py-2"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className="border rounded-lg px-4 py-2"
						required
					/>
				</div>
				<button
					type="submit"
					className="border transition-all duration-500 hover:bg-gray-200 rounded-lg py-4 uppercase bg-gray-100 col-span-full justify-center items-center"
				>
					Update
				</button>
			</form>
		</div>
	);
};

export default UpdateUserForm;
