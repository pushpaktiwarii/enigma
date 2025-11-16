// ============================================
// Firebase Web SDK Configuration (v10)
// ENIGMA XIII - Frontend Firebase Setup
// ============================================

// Import Firebase modules
// Note: For static HTML sites, use CDN version (see firebaseConfig-cdn.js)
// For build tools (Vite, Webpack, etc.), install via npm: npm install firebase

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase configuration object
// Replace these placeholders with your actual Firebase project config
// Get these values from: Firebase Console → Project Settings → General → Your apps
export const firebaseConfig = {
    apiKey: "AIzaSyBuCdyrgTr_WSPJ2V7eHj8JnFKAi3bc36Q",
    authDomain: "enigmaregistration.firebaseapp.com",
    projectId: "enigmaregistration",
    storageBucket: "enigmaregistration.firebasestorage.app",
    messagingSenderId: "507290851865",
    appId: "1:507290851865:web:0acb8089694d8c08346888",
    measurementId: "G-0557LMT1W8"
  };

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firestore Database
const db = getFirestore(app);

// Initialize Firebase Storage
const storage = getStorage(app);

// Export for use in other files
export { app, db, storage };
