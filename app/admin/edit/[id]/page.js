import EditForm from "@/components/forms/EditForm";
import ProductDetail from "@/components/products/ProductDetail";
import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";

const getProductDetail = async (id) => {
	const docRef = doc(db, "products", id);
	const docSnapshot = await getDoc(docRef);
	return docSnapshot.data();
};

const EditProductPage = async ({ params }) => {
	const { id } = params;

	const selectedProduct = await getProductDetail(id);
	return <EditForm item={selectedProduct} />;
};

export default EditProductPage;
