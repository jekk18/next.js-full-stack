// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqPfp0cbEpeVaORCI3-vcq7mYMzikAg4c",
  authDomain: "react-test-db-24da7.firebaseapp.com",
  databaseURL: "https://react-test-db-24da7-default-rtdb.firebaseio.com",
  projectId: "react-test-db-24da7",
  storageBucket: "react-test-db-24da7.appspot.com", // Ensure the correct format here
  messagingSenderId: "949873099344",
  appId: "1:949873099344:web:5db549946620c7590f8755",
  measurementId: "G-2CRSXQB26E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (only on client side)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

// Initialize Firestore and Storage
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, db, storage };