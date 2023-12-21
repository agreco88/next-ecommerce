import Image from "next/image";
import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import ButtonWithIcon from "../button/ButtonWithIcon";
import Link from "next/link";
import DeleteButton from "../button/DeleteButton";

const getAllProducts = async () => {
	const productsRef = collection(db, "products");
	const querySnapshot = await getDocs(productsRef);
	return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

const ProductsTable = async () => {
	const products = await getAllProducts();
	return (
		<table className="w-full text-xs text-left text-black bg-gray-50 rounded">
			<thead className="text-xs uppercase">
				<tr className="border-b">
					<th scope="col" className="px-5 p-3 w-2/12">
						Name
					</th>
					<th scope="col" className="p-3 w-2/12">
						Price
					</th>
					<th scope="col" className="p-3 w-2/12">
						Stock
					</th>
					<th scope="col" className="p-3 w-2/12">
						Category
					</th>
					<th scope="col" className="p-3 w-2/12">
						Image
					</th>
					<th scope="col" className="p-3 w-2/12">
						Actions
					</th>
				</tr>
			</thead>
			<tbody className="w-full text-xs text-left relative">
				{products.length > 0 ? (
					products.map((product) => (
						<tr key={product.slug}>
							<td className="px-5 py-2 w-3/12 uppercase">
								{product.title}
							</td>
							<td className="px-3 py-2 w-1/12">
								${product.price}
							</td>
							<td className="px-3 py-2 w-1/12">
								{product.stock}
							</td>
							<td className="px-3 py-2 w-2/12">
								{product.category}
							</td>
							<td className="px-3 py-2">
								<a
									href={product.image}
									target="_blank"
									rel="noopener noreferrer"
									className="flex w-fit"
								>
									<Image
										alt={product.title}
										src={product.image}
										width={40}
										height={40}
										className="border rounded-lg opacity-50 hover:opacity-100 transition-all duration-300"
									/>
								</a>
							</td>
							<td className="pr-3">
								<div className="flex gap-2">
									<Link href={`/admin/edit/${product.slug}`}>
										<ButtonWithIcon
											className="opacity-75 hover:opacity-100 border-lime-500 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lime-300 via-lime-400 to-lime-500"
											icon={<FaRegEdit />}
										>
											Edit
										</ButtonWithIcon>
									</Link>
									<DeleteButton product={product} />
								</div>
							</td>
						</tr>
					))
				) : (
					<div className="h-60 flex items-center justify-center">
						Loading items
					</div>
				)}
			</tbody>
		</table>
	);
};

export default ProductsTable;
