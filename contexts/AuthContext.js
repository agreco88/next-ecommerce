"use client";
import { auth, db } from "@/firebase/config";
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

const provider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({
		logged: false,
		email: null,
		uid: null,
	});

	const router = useRouter();

	const createUser = async (values) => {
		try {
			// Create the user in Firebase Authentication
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				values.email,
				values.password
			);

			// Access the newly created user
			const newUser = userCredential.user;

			// Set the default role for the new user in Firestore
			const userDocRef = doc(db, "roles", newUser.uid);
			await setDoc(userDocRef, {
				email: values.email,
				role: "user", // Set the default role to "user"
			});

			console.log("User created successfully!");
		} catch (error) {
			console.error("Error creating user:", error.message);
		}
	};

	const loginUser = async (values) => {
		await signInWithEmailAndPassword(auth, values.email, values.password);
	};

	const logoutUser = async () => {
		signOut(auth);
	};

	const loginGoogle = async () => {
		await signInWithPopup(auth, provider);
	};

	useEffect(() => {
		onAuthStateChanged(auth, async (user) => {
			if (user) {
				const docRef = doc(db, "roles", user.uid);
				const userDoc = await getDoc(docRef);

				if (userDoc.data()?.role === "admin") {
					setUser({
						logged: true,
						email: user.email,
						uid: user.uid,
						role: "admin",
					});
					router.push("/admin");
				} else {
					setUser({
						logged: true,
						email: user.email,
						uid: user.uid,
						role: "user",
					});
					router.push("/");
				}
			} else {
				setUser({
					logged: false,
					emaiL: null,
					uid: null,
				});
				router.push("/");
			}
		});
	}, [router]);

	return (
		<AuthContext.Provider
			value={{ user, createUser, loginUser, logoutUser, loginGoogle }}
		>
			{children}
		</AuthContext.Provider>
	);
};
