import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDkqfuQ2VfNh764fZHHQNQ7F9PsRCk3IGY",
	authDomain: "next-ecommerce-a641f.firebaseapp.com",
	projectId: "next-ecommerce-a641f",
	storageBucket: "next-ecommerce-a641f.appspot.com",
	messagingSenderId: "893471510540",
	appId: "1:893471510540:web:6204167a9555ae4f929e29",
};

// Initialize Firebase. FireStore, Storage, and Auth
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
