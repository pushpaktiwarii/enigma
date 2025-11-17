# Firebase Setup Guide

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add Project" or select existing project
3. Follow the setup wizard

## Step 2: Enable Firestore Database

1. In Firebase Console, go to **Firestore Database**
2. Click **Create Database**
3. Start in **Production mode** (or Test mode for development)
4. Choose a location for your database
5. Click **Enable**

## Step 3: Get Service Account Key

1. Go to **Project Settings** (gear icon)
2. Click on **Service Accounts** tab
3. Click **Generate New Private Key**
4. Download the JSON file
5. Rename it to `serviceAccountKey.json`
6. Place it in the `backend/` folder

## Step 4: Set Firestore Rules (Optional)

For development, you can use these rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /registrations/{document=**} {
      allow read, write: if request.auth != null;
      // Or for public write (NOT recommended for production):
      // allow write: if true;
    }
  }
}
```

## Step 5: Verify Setup

1. Start the backend server:
   ```bash
   npm start
   ```

2. Check console output:
   - Should see: `✅ Firebase Admin SDK initialized successfully`
   - Should see: `📊 Firestore database connected`
   - Should see: `🔥 Firestore: Connected`

## Alternative: Environment Variables

Instead of `serviceAccountKey.json`, you can use environment variables:

1. Add to `.env`:
   ```
   FIREBASE_PROJECT_ID=your-project-id
   FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
   FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project.iam.gserviceaccount.com
   FIREBASE_CLIENT_ID=123456789
   FIREBASE_PRIVATE_KEY_ID=key_id_here
   FIREBASE_CLIENT_X509_CERT_URL=https://www.googleapis.com/robot/v1/metadata/x509/...
   ```

2. Get these values from your `serviceAccountKey.json` file

## Firestore Collection Structure

The registration data is stored in the `registrations` collection:

```
registrations/
  └── {auto-generated-id}/
      ├── name: string
      ├── email: string
      ├── amount: number
      ├── payment_id: string
      ├── order_id: string
      ├── payment_status: "paid"
      ├── createdAt: timestamp
      └── ... (any additional fields from registration form)
```

## Security Notes

- **Never commit** `serviceAccountKey.json` to version control
- The file is already in `.gitignore`
- For production, use environment variables or secure secret management
- Set proper Firestore security rules before going live











