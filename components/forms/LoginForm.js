"use client";
import { useAuthContext } from "@/contexts/AuthContext";
import React, { useState } from "react";
import PrimaryButton from "../ui/Button";

const LoginForm = () => {
	// const { registerUser, loginUser, googleLogin } = useAuthContext();
	const { createUser, loginUser } = useAuthContext();
	const [values, setValues] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="bg-white flex flex-col text-black gap-8 p-8 rounded-xl"
		>
			<input
				type="email"
				name="email"
				value={values.email}
				required
				placeholder="Your email"
				className="p-2 rounded border"
				onChange={handleChange}
			/>
			<input
				type="password"
				name="password"
				value={values.password}
				required
				placeholder="Your password"
				className="p-2 rounded border"
				onChange={handleChange}
			/>
			<div className="flex grow justify-between">
				<PrimaryButton
					onClick={() => loginUser(values)}
					className="!bg-red-500"
				>
					Login
				</PrimaryButton>
				<PrimaryButton
					onClick={() => createUser(values)}
					className="!bg-red-500"
				>
					Create new user
				</PrimaryButton>
				<PrimaryButton onClick={null} className="!bg-red-500">
					Google
				</PrimaryButton>
			</div>
		</form>
	);
};

export default LoginForm;
