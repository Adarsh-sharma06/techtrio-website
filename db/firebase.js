<<<<<<< HEAD
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Firestore Database
const db = getFirestore(app);

// Firebase Authentication
const auth = getAuth(app);

export { db, auth, collection, getDocs };
=======
// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvjC-2NpTSvokjToqRch5pScrhlJznQF4",
  authDomain: "techtriowebsite.firebaseapp.com",
  projectId: "techtriowebsite",
  storageBucket: "techtriowebsite.firebasestorage.app",
  messagingSenderId: "911023133346",
  appId: "1:911023133346:web:b41a67fd978989a6f03dfb",
  measurementId: "G-ZJF4QFR0TW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
>>>>>>> Dheeraj
