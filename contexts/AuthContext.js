"use client";
import { auth } from "@/firebase/config";
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
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

	const createUser = async (values) => {
		await createUserWithEmailAndPassword(
			auth,
			values.email,
			values.password
		);
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
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser({
					logged: true,
					email: user.email,
					uid: user.uid,
				});
			} else {
				setUser({
					logged: false,
					email: null,
					uid: null,
				});
			}
		});
	}, []);

	return (
		<AuthContext.Provider
			value={{ user, createUser, loginUser, logoutUser, loginGoogle }}
		>
			{children}
		</AuthContext.Provider>
	);
};
