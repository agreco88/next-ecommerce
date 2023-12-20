"use client";
import { useAuthContext } from "@/contexts/AuthContext";
import PrimaryButton from "../Button";

export const LogoutButton = () => {
	const { logoutUser } = useAuthContext();
	return <PrimaryButton onClick={logoutUser}>Logout</PrimaryButton>;
};
