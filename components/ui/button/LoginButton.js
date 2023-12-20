"use client";
import PrimaryButton from "../Button";
import Link from "next/link";

export const LoginButton = () => {
	return (
		<Link href={"/admin"}>
			<PrimaryButton>Login</PrimaryButton>
		</Link>
	);
};
