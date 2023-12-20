import EditForm from "@/components/forms/EditForm";
import { db } from "@/firebase/config";
import { collection, doc, getDocs } from "firebase/firestore";

const EditPage = async ({ params }) => {
	const { slug } = params;
	const docRef = doc(db, "products", slug);
	const docSnapshot = await getDoc(docRef);
	console.log(docRef);
	return (
		<div>
			<EditForm item={docSnapshot.data()} />
		</div>
	);
};

export default EditPage;
