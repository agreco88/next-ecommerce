import { mockData } from "@/app/data/products";
import { NextResponse } from "next/server";

// ** GET ENDPOINT THAT RETURNS ALL ITEMS GIVEN A CATEGORY ** (Used by product category page)
// Request endpoint: xx/api/productos/tvs
// /api/products?id=tvs

export const GET = async (_, { params }) => {
	const { category } = params;

	const products =
		category === "all"
			? mockData
			: mockData.filter((product) => product.type === category);

	return NextResponse.json(products);
};
