"use client";

import { useState } from "react";
import PrimaryButton from "../ui/Button";

const ContactForm = () => {
	const [values, setValues] = useState({
		name: "",
		email: "",
	});

	const handleInputChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const response = await fetch("http://localhost:3000/api/contact", {
			method: "POST",
			body: JSON.stringify(values),
		}).then((r) => r.json());

		console.log(response);
	};

	return (
		<form className="flex flex-col gap-4 w-1/2" onSubmit={handleSubmit}>
			<input
				type="text"
				value={values.name}
				name="name"
				placeholder="John Doe"
				onChange={handleInputChange}
			/>
			<input
				type="email"
				value={values.email}
				name="email"
				placeholder="john.doe@helloworld.com"
				onChange={handleInputChange}
			/>
			<PrimaryButton type="submit" className="bg-gray-900">
				Enviar
			</PrimaryButton>
		</form>
		// <form
		// 	action="/submit-form"
		// 	method="post"
		// 	onSubmit={handleSubmit}
		// 	className="flex flex-col justify-around gap-4 px-4 w-full"
		// >
		// 	<fieldset>
		// 		<legend className="sr-only">Contact Information</legend>
		// 		<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
		// 			<div>
		// 				<label htmlFor="name">Name:</label>
		// 				<input
		// 					className="w-full"
		// 					type="text"
		// 					id="name"
		// 					name="name"
		// 					required
		// 				/>
		// 			</div>
		// 			<div>
		// 				<label htmlFor="surname">Surname:</label>
		// 				<input
		// 					className="w-full"
		// 					type="text"
		// 					id="surname"
		// 					name="surname"
		// 					required
		// 				/>
		// 			</div>
		// 			<div>
		// 				<label htmlFor="email">Email:</label>
		// 				<input
		// 					className="w-full"
		// 					type="email"
		// 					id="email"
		// 					name="email"
		// 					required
		// 				/>
		// 			</div>
		// 			<div>
		// 				<label htmlFor="phone">Phone:</label>
		// 				<input
		// 					className="w-full"
		// 					type="tel"
		// 					id="phone"
		// 					name="phone"
		// 					required
		// 				/>
		// 			</div>
		// 		</div>
		// 	</fieldset>
		// 	<fieldset>
		// 		<legend className="sr-only">Message</legend>
		// 		<div className="w-full">
		// 			<label htmlFor="message">Message:</label>
		// 			<textarea
		// 				className="w-full"
		// 				id="message"
		// 				name="message"
		// 				rows="4"
		// 				required
		// 			/>
		// 		</div>
		// 	</fieldset>
		// 	<div className="flex items-center justify-center col-span-full ">
		// 		<button type="submit" className="w-40 bg-red-500">
		// 			Submit
		// 		</button>
		// 	</div>
		// </form>
	);
};

export default ContactForm;
