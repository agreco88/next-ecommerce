import { mockData } from "@/app/data/products";
import { NextResponse } from "next/server";

// ** POST ENDPOINT THAT SENDS USER DATA **
// Request endpoint: xx/api/productos/tvs
// /api/products?id=tvs

export const POST = async (request) => {
	const data = await request.json();
	console.log(data);
	// const products =
	// 	category === "all"
	// 		? mockData
	// 		: mockData.filter((product) => product.type === category);

	//Pass message to form so you can display it to the user
	return NextResponse.json("User created");
};
