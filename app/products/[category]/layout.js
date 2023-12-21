import Navbar from "@/components/ui/Navbar";
import productCategories from "@/constants/productCategories";

const ProductsPageLayout = ({ children }) => {
	return (
		<div className="flex flex-col md:flex-row w-full justify-between mt-16">
			<div className="flex md:hidden">
				<Navbar
					navbarOptions={productCategories}
					orientation="horzontal"
				/>
			</div>
			<div className="hidden md:flex">
				<Navbar
					navbarOptions={productCategories}
					orientation="vertical"
				/>
			</div>
			{children}
		</div>
	);
};

export default ProductsPageLayout;
