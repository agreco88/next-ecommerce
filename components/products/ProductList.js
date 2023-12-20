import { collection, getDocs, query, where } from "firebase/firestore";
import ProductCard from "./ProductCard";
import { db } from "@/firebase/config";

const getProducts = async (category) => {
	const productsRef = collection(db, "products");

	const q =
		category === "all"
			? productsRef
			: query(productsRef, where("category", "==", category));

	const querySnapshot = await getDocs(q);
	return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

const ProductList = async ({ category }) => {
	const productList = await getProducts(category);
	return (
		<ul className="md:w-3/4 2xl:w-10/12 grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-4">
			{productList?.map((product) => (
				<li key={product.slug}>
					<ProductCard key={product.slug} product={product} />
				</li>
			))}
		</ul>
	);
};

export default ProductList;
