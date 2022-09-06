import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Express } from "express";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = process.env.FIREBASE_CONFIG;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
