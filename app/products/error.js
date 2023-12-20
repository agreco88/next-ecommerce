"use client";

import PrimaryButton from "@/components/ui/Button";

const ProductsPageError = ({ error, reset }) => {
	return (
		<div className="container m-auto flex flex-col items-center gap-4 uppercase justify-center">
			<h3>Error loading products</h3>
			<PrimaryButton onClick={reset}>Retry</PrimaryButton>
		</div>
	);
};

export default ProductsPageError;
