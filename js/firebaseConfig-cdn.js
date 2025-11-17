// ============================================
// Firebase Web SDK Configuration (v10) - CDN Version
// ENIGMA XIII - Frontend Firebase Setup
// Use this version if you're loading Firebase via CDN in HTML
// ============================================

// This file is for reference when using CDN
// Add this to your HTML <head>:
// <script type="module">
//   import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
//   import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
//   import { getStorage } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js';
// </script>

// Firebase configuration object
const firebaseConfig = {
    apiKey: "your-api-key-here",
    authDomain: "your-project-id.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project-id.appspot.com",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firestore Database
const db = getFirestore(app);

// Initialize Firebase Storage
const storage = getStorage(app);

// Make available globally or export
window.firebaseApp = app;
window.firebaseDb = db;
window.firebaseStorage = storage;

// Or export if using ES modules
export { app, db, storage };











