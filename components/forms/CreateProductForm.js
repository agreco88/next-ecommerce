"use client";
import React, { useState } from "react";
import PrimaryButton from "../ui/Button";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "@/firebase/config";
import { doc, setDoc } from "firebase/firestore";

const createProduct = async (values, file) => {
	const storageRef = ref(storage, values.slug);
	const fileSnapshot = await uploadBytes(storageRef, file);
	console.log("FIREBASE fileSnapshot: ", fileSnapshot);

	const fileURL = await getDownloadURL(fileSnapshot.ref);
	console.log("FIREBASE fileUrl: ", fileURL);

	const docRef = doc(db, "products", values.slug);
	return setDoc(docRef, {
		...values,
		image: fileURL,
		highlights: values.highlights.split("\n").map((item) => item.trim()), // Convert highlights to an array
	}).then(() => console.log("Product created successfully."));
};

const CreateProductForm = () => {
	const [values, setValues] = useState({
		title: "",
		subtitle: "",
		description: "",
		stock: 0,
		price: 0,
		category: "",
		highlights: "",
		slug: "",
		description: "",
	});
	const [imageFile, setImageFile] = useState(null);
	const [highlights, setHighlights] = useState("");

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await createProduct(values, imageFile);
	};

	const handleHighlightsChange = (e) => {
		setHighlights(e.target.value);
		setValues({
			...values,
			highlights: e.target.value,
		});
	};

	return (
		<div className="container m-auto mt-6 max-w-lg text-black">
			<form onSubmit={handleSubmit} className="my-12">
				<label className="text-white">Slug:</label>
				<input
					required
					type="text"
					name="slug"
					value={values.slug.toLowerCase()}
					onChange={handleChange}
					className="p-2 rounded w-full border border-blue-100 block my-4"
				/>
				<label className="text-white">Image avatar:</label>
				<input
					required
					type="file"
					onChange={(e) => setImageFile(e.target.files[0])}
					className="p-2 rounded w-full border border-blue-100 block my-4"
				/>
				<label className="text-white">Name:</label>
				<input
					required
					type="text"
					name="title"
					value={values.title}
					onChange={handleChange}
					className="p-2 rounded w-full border border-blue-100 block my-4"
				/>
				<label className="text-white">Subtitle:</label>
				<input
					required
					type="text"
					name="subtitle"
					value={values.subtitle}
					onChange={handleChange}
					className="p-2 rounded w-full border border-blue-100 block my-4"
				/>
				<label className="text-white">Price:</label>
				<input
					required
					type="number"
					name="price"
					value={values.price}
					onChange={handleChange}
					className="p-2 rounded w-full border border-blue-100 block my-4"
				/>
				<label className="text-white">Stock:</label>
				<input
					required
					type="number"
					name="stock"
					value={values.stock}
					onChange={handleChange}
					className="p-2 rounded w-full border border-blue-100 block my-4"
				/>
				<label className="text-white">Category:</label>
				<input
					required
					type="text"
					name="category"
					value={values.category}
					onChange={handleChange}
					className="p-2 rounded w-full border border-blue-100 block my-4"
				/>
				<label className="text-white">Description:</label>
				<textarea
					required
					rows={6}
					type="text"
					name="description"
					value={values.description}
					onChange={handleChange}
					className="p-2 rounded w-full border border-blue-100 block my-4 resize-none" // Disable resizing with Tailwind class
				/>
				<label className="text-white">Highlights:</label>
				<textarea
					required
					name="highlights"
					value={highlights}
					onChange={handleHighlightsChange}
					className="p-2 rounded w-full border border-blue-100 block my-4"
				/>
			</form>
			<PrimaryButton onClick={handleSubmit}>Submit</PrimaryButton>
		</div>
	);
};

export default CreateProductForm;
