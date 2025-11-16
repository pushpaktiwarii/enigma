// ============================================
// Firebase Admin SDK Initialization
// ============================================

import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize Firebase Admin SDK
let db;

try {
    // Check if serviceAccountKey.json exists
    const serviceAccountPath = join(__dirname, 'serviceAccountKey.json');
    
    let serviceAccount;
    
    try {
        // Try to read serviceAccountKey.json file
        const serviceAccountData = readFileSync(serviceAccountPath, 'utf8');
        serviceAccount = JSON.parse(serviceAccountData);
    } catch (error) {
        // If file doesn't exist, try to use environment variables
        if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_PRIVATE_KEY) {
            serviceAccount = {
                type: "service_account",
                project_id: process.env.FIREBASE_PROJECT_ID,
                private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
                private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
                client_email: process.env.FIREBASE_CLIENT_EMAIL,
                client_id: process.env.FIREBASE_CLIENT_ID,
                auth_uri: "https://accounts.google.com/o/oauth2/auth",
                token_uri: "https://oauth2.googleapis.com/token",
                auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
                client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL
            };
        } else {
            throw new Error('Firebase service account not found. Please provide serviceAccountKey.json or set environment variables.');
        }
    }

    // Initialize Firebase Admin
    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        });
    }

    // Get Firestore instance
    db = admin.firestore();

    console.log('✅ Firebase Admin SDK initialized successfully');
    console.log(`📊 Firestore database connected`);

} catch (error) {
    console.error('❌ Error initializing Firebase Admin SDK:', error.message);
    console.error('Please ensure serviceAccountKey.json exists or Firebase environment variables are set');
    // Don't throw error, allow server to start but db will be undefined
}

export { db, admin };



