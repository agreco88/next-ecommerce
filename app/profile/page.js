"use client";
import React from "react";
import { useAuthContext } from "@/contexts/AuthContext";
import UpdateUserForm from "@/components/forms/UpdateUserForm";
import Link from "next/link";

const ProfilePage = () => {
	const { user } = useAuthContext();

	if (user.logged) {
		return (
			<div className="w-full">
				<h2 className="text-4xl text- font-thin mt-8">
					Hello {user.role}!
				</h2>
				<div className="flex justify-between w-full items-center">
					<p className="w-1/2">Your username prompt</p>
					<UpdateUserForm />
				</div>
			</div>
		);
	} else {
		<div className="flex flex-col">
			<h2>You need to login first</h2>
			<Link href="/admin">Login</Link>
		</div>;
	}
};

export default ProfilePage;
