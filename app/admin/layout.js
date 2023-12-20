"use client";
import { useAuthContext } from "@/contexts/AuthContext";

const AdminLayout = ({ children, login }) => {
	const { user } = useAuthContext();
	return (
		<section className="flex flex-col gap-4 container mx-auto">
			<h2 className="text-4xl text- font-thin mt-8">Hello {user.uid}!</h2>
			{user.logged
				? children
				: login || <p>Please log in to access this page.</p>}
		</section>
	);
};

export default AdminLayout;
