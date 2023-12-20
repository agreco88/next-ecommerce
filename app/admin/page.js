import ProductsTable from "@/components/ui/table/ProductsTable";
import Link from "next/link";
import React from "react";

const AdminPage = () => {
	return (
		<div className="w-full flex flex-col gap-4">
			<h2 className="text-start">Products list</h2>
			<section className="hidden md:flex">
				<ProductsTable />
			</section>
			<Link
				href={"/admin/create"}
				className="transition-all line duration-300 w-full flex justify-end text-xs font-bold opacity-50 hover:opacity-100 py-4 uppercase items-center"
			>
				<div className="w-1/5 text-end ">Create new product</div>
			</Link>
		</div>
	);
};

export default AdminPage;
