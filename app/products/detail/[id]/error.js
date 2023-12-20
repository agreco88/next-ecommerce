"use client";
import PrimaryButton from "@/components/ui/Button";

const ProductDetailPageError = ({ error, reset }) => {
	return (
		<div className="container m-auto flex flex-col items-center gap-4 uppercase justify-center">
			<h2 className="text-lg">ERROR: {error.message}</h2>
			<PrimaryButton onClick={reset}>Retry</PrimaryButton>
		</div>
	);
};

export default ProductDetailPageError;
