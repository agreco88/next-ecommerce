import { mockData } from "@/app/data/products";
import { NextResponse } from "next/server";

// ** GET ENDPOINT THAT RETURNS AN ITEM BASED ON AN ID ** (Used by product detail)
// Request endpoint: xx/api/product/smart-tv-samsung-qn55q65bagxzd-qled-tizen

export const GET = async (_, { params }) => {
	const { id } = params;

	const selectedItem = mockData.find((product) => {
		return product.slug.toLowerCase() === id.toLowerCase();
	});

	return NextResponse.json(selectedItem);
};
