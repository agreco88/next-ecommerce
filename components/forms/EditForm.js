"use client";

import React from "react";
import { useState } from "react";
import { db, storage } from "@/firebase/config";
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import PrimaryButton from "../ui/Button";
import Image from "next/image";
import Link from "next/link";

const updateProduct = async (slug, values, file) => {
	let fileURL = values.image;

	if (file) {
		const storageRef = ref(storage, values.slug);
		const fileSnapshot = await uploadBytes(storageRef, file);
		fileURL = await getDownloadURL(fileSnapshot.ref);
	}

	const docRef = doc(db, "products", slug);
	return updateDoc(docRef, {
		title: values.title,
		description: values.description,
		stock: Number(values.stock),
		price: Number(values.price),
		category: values.category,
		image: fileURL,
	}).then(() => console.log("Producto actualizado correctamente"));
};

const EditForm = ({ item }) => {
	const { title, description, stock, price, category, image } = item;
	const [values, setValues] = useState({
		title,
		description,
		stock,
		price,
		category,
		image,
	});
	const [file, setFile] = useState(null);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		setIsSubmitting(true);

		try {
			await updateProduct(item.slug, values, file);
			setIsSuccess(true);
		} catch (error) {
			console.error("Error updating product:", error);
			setHasError(true);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="justify-between grid grid-cols-2 gap-8 w-full">
			<form onSubmit={handleSubmit} className="text-black">
				<label className="text-white">Nombre: </label>
				<input
					type="text"
					value={values.title}
					className="p-2 rounded w-full border border-blue-100 block my-4"
					name="title"
					onChange={handleChange}
					placeholder={item.title}
				/>
				<div className="grid grid-cols-4 gap-3">
					<div className="flex flex-col gap-2">
						<label className="text-white">Imagen: </label>
						<input
							type="file"
							onChange={(e) => setFile(e.target.files[0])}
							className="p-1.5 rounded w-full border border-blue-100 block my-4"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="text-white">Precio: </label>
						<input
							type="number"
							value={values.price}
							className="p-2 rounded w-full border border-blue-100 block my-4"
							name="price"
							onChange={handleChange}
							placeholder={item.price}
						/>
					</div>

					<div className="flex flex-col gap-2">
						<label className="text-white">Stock: </label>
						<input
							type="number"
							value={values.stock}
							className="p-2 rounded w-full border border-blue-100 block my-4"
							name="stock"
							onChange={handleChange}
							placeholder={item.stock}
						/>
					</div>
					<div className="flex flex-col gap-2">
						<label className="text-white">Categoria: </label>
						<input
							type="text"
							value={values.type}
							className="p-2 rounded w-full border border-blue-100 block my-4"
							name="category"
							onChange={handleChange}
							placeholder={item.category}
						/>
					</div>
				</div>

				<label className="text-white">Descripción: </label>
				<textarea
					value={values.description}
					className="resize-none w-full p-2 rounded border block border-blue-100 my-4"
					name="description"
					onChange={handleChange}
					placeholder={item.description}
					rows={7}
				/>

				<PrimaryButton type="submit">Send</PrimaryButton>
				<Link href={"/admin"}>
					<PrimaryButton>Go back to dashboard</PrimaryButton>
				</Link>

				{isSubmitting && <p className="text-white">Submitting...</p>}
				{hasError && (
					<p style={{ color: "red" }}>Error submitting the form.</p>
				)}
				{isSuccess && (
					<p style={{ color: "green" }}>
						Form submitted successfully!
					</p>
				)}
			</form>
			<Image
				alt={item.title}
				src={item.image}
				width={400}
				height={400}
				className="w-full h-auto rounded"
			/>
		</div>
	);
};

export default EditForm;
