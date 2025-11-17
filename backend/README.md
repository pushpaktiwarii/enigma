# ENIGMA XIII Registration Backend

Node.js + Express backend for Razorpay-based registration system.

## Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment Variables**
   - Copy `.env.example` to `.env`
   - Add your Razorpay credentials:
     ```
     RAZORPAY_KEY_ID=your_key_id
     RAZORPAY_KEY_SECRET=your_key_secret
     PORT=5000
     ```

3. **Setup Firebase**
   - Download your Firebase service account key from Firebase Console
   - Go to Firebase Console → Project Settings → Service Accounts
   - Click "Generate New Private Key" and download the JSON file
   - Save it as `serviceAccountKey.json` in the `backend/` folder
   - OR set Firebase environment variables in `.env` file

3. **Run Server**
   ```bash
   npm start
   ```
   
   For development with auto-reload:
   ```bash
   npm run dev
   ```

## API Endpoints

### 1. Create Order
**POST** `/create-order`

Creates a Razorpay order for payment.

**Request Body:**
```json
{
  "amount": 300,
  "currency": "INR",
  "receipt": "receipt_123"
}
```

**Response:**
```json
{
  "order_id": "order_xxxxx",
  "amount": 300,
  "currency": "INR",
  "status": "created",
  "key_id": "rzp_test_xxxxx"
}
```

### 2. Verify Payment
**POST** `/verify-payment`

Verifies Razorpay payment signature and saves registration data to Firestore.

**Request Body:**
```json
{
  "razorpay_order_id": "order_xxxxx",
  "razorpay_payment_id": "pay_xxxxx",
  "razorpay_signature": "signature_xxxxx",
  "name": "John Doe",
  "email": "john@example.com",
  "amount": 300
}
```

**Response (Success):**
```json
{
  "status": "success",
  "message": "Payment verified successfully and registration saved",
  "order_id": "order_xxxxx",
  "payment_id": "pay_xxxxx",
  "registration_id": "firestore_doc_id",
  "verified": true
}
```

**Note:** Registration data is automatically saved to Firestore `registrations` collection with:
- name
- email
- amount
- payment_id
- order_id
- payment_status: "paid"
- createdAt: timestamp

### 3. Get Order Details
**GET** `/order/:orderId`

Fetches order details from Razorpay.

**Response:**
```json
{
  "status": "success",
  "order": {
    "id": "order_xxxxx",
    "amount": 300,
    "currency": "INR",
    "status": "paid",
    "created_at": 1234567890
  }
}
```

## Razorpay Setup

1. Sign up at [Razorpay](https://razorpay.com/)
2. Get your API keys from Dashboard → Settings → API Keys
3. Use Test keys for development
4. Use Live keys for production

## Notes

- Amount should be in rupees (will be converted to paise automatically)
- Minimum amount: ₹1 (100 paise)
- Default currency: INR
- Payment is auto-captured (payment_capture: 1)

