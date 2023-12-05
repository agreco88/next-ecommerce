import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDkqfuQ2VfNh764fZHHQNQ7F9PsRCk3IGY",
	authDomain: "next-ecommerce-a641f.firebaseapp.com",
	projectId: "next-ecommerce-a641f",
	storageBucket: "next-ecommerce-a641f.appspot.com",
	messagingSenderId: "893471510540",
	appId: "1:893471510540:web:6204167a9555ae4f929e29",
};

// Initialize Firebase and FireStore
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
