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