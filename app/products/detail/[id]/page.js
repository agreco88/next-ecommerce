import ProductDetail from "@/components/products/ProductDetail";
import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";

const getProductDetail = async (id) => {
	const docRef = doc(db, "products", id);
	const docSnapshot = await getDoc(docRef);
	return docSnapshot.data();
};

const ProductDetailPage = async ({ params }) => {
	const { id } = params;

	const selectedProduct = await getProductDetail(id);

	return (
		<div className="grid md:grid-cols-2 h-full items-center md:mt-20 2xl:mt-48">
			<ProductDetail selectedProduct={selectedProduct} />
		</div>
	);
};

export default ProductDetailPage;
