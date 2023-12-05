import Navbar from "@/components/ui/Navbar";
import productCategories from "@/constants/productCategories";

const ProductsPageLayout = ({ children }) => {
	return (
		<div className="flex flex-col md:flex-row w-full justify-between mt-16">
			<Navbar navbarOptions={productCategories} orientation="vertical" />
			{children}
		</div>
	);
};

export default ProductsPageLayout;
