// ============================================
// Registration Form - Custom Implementation
// ============================================

// Import Firebase Storage (using CDN or ES modules)
// For CDN: Make sure Firebase is loaded before this script
// For ES modules: import { storage } from './firebaseConfig.js';

// ID card upload removed - no longer needed

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRegistration);
} else {
    // DOM is already ready
    initRegistration();
}

function initRegistration() {
    console.log('🚀 Starting registration form initialization...');
    // Event data - same as event-detail.js
    const eventData = {
        'open-mic': { name: 'Open Mic', type: 'Solo (Offline)', category: 'Literary' },
        'kbc-quiz': { name: 'KBC Quiz', type: 'Team (Offline)', category: 'Literary' },
        'dramatics': { name: 'Dramatics', type: 'Team (Offline)', category: 'Theatre' },
        'chess': { name: 'Chess', type: 'Solo (Offline)', category: 'Sports' },
        'face-painting': { name: 'Face Painting', type: 'Solo (Offline)', category: 'Creative' },
        'canvas-painting': { name: 'Canvas Painting', type: 'Solo (Offline)', category: 'Creative' },
        'bug-brawl': { name: 'Bug Brawl', type: 'Team (Online)', category: 'Creative' },
        'fashion-show': { name: 'Fashion Show', type: 'Team (Offline)', category: 'Fashion' },
        'dance': { name: 'Dance', type: 'Team (Offline)', category: 'Dance' },
        'singing': { name: 'Singing', type: 'Solo (Offline)', category: 'Music' },
        'instrumental': { name: 'Instrumental', type: 'Solo/Team (Offline)', category: 'Music' },
        'roadies': { name: 'Roadies', type: 'Team (Offline)', category: 'Creative' },
        'power-lifting': { name: 'Power Lifting', type: 'Solo (Offline)', category: 'Sports' },
        'mehndi-art': { name: 'Mehndi Art', type: 'Solo (Offline)', category: 'Creative' },
        'rangoli': { name: 'Rangoli', type: 'Solo/Team (Offline)', category: 'Creative' },
        'mandala-art': { name: 'Mandala Art', type: 'Solo (Offline)', category: 'Creative' },
        'shark-tank': { name: 'Shark Tank', type: 'Team (Offline)', category: 'Business' },
        'framefest': { name: 'Framefest', type: 'Solo/Team (Offline)', category: 'Photo & Film' },
        'treasure-hunt': { name: 'Treasure Hunt', type: 'Team (Offline)', category: 'Creative' },
        'web-die': { name: 'Web Die', type: 'Team (Online)', category: 'Creative' },
        'gamers-arena': { name: 'Gamers Arena', type: 'Team (Online)', category: 'Gaming' }
    };

    const form = document.getElementById('registrationForm');
    const event1Select = document.getElementById('event1');
    const event2Select = document.getElementById('event2');
    
    // Check if elements exist
    if (!form) {
        console.error('❌ Registration form not found!');
        return;
    }
    
    if (!event1Select || !event2Select) {
        console.error('❌ Event select elements not found!');
        return;
    }
    
    console.log('✅ Form elements found');
    
    // Populate event dropdowns
    function populateEventDropdowns() {
        if (!event1Select || !event2Select) {
            console.error('❌ Event selects not available');
            return;
        }
        
        console.log('📋 Populating event dropdowns...');
        
        // Clear existing options (except first)
        while (event1Select.children.length > 1) {
            event1Select.removeChild(event1Select.lastChild);
        }
        while (event2Select.children.length > 1) {
            event2Select.removeChild(event2Select.lastChild);
        }
        
        // Add events to both dropdowns
        Object.keys(eventData).forEach(slug => {
            const event = eventData[slug];
            const option1 = document.createElement('option');
            option1.value = slug;
            option1.textContent = event.name;
            event1Select.appendChild(option1);
            
            const option2 = document.createElement('option');
            option2.value = slug;
            option2.textContent = event.name;
            event2Select.appendChild(option2);
        });
        
        console.log(`✅ Added ${Object.keys(eventData).length} events to dropdowns`);
        
        // Prevent selecting same event in both dropdowns
        event1Select.addEventListener('change', function() {
            if (event2Select.value === this.value && this.value !== '') {
                event2Select.value = '';
                alert('You cannot select the same event twice. Please choose a different event.');
            }
        });
        
        event2Select.addEventListener('change', function() {
            if (event1Select.value === this.value && this.value !== '') {
                event1Select.value = '';
                alert('You cannot select the same event twice. Please choose a different event.');
            }
        });
    }
    
    // Form validation
    function validateField(field, errorElement) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';
        
        // Remove previous error styling
        field.classList.remove('error');
        if (errorElement) {
            errorElement.classList.remove('show');
        }
        
        // Check if required field is empty
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        }
        
        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }
        
        // Phone validation (10 digits)
        if (field.type === 'tel' && value) {
            const phoneRegex = /^[0-9]{10}$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid 10-digit phone number';
            }
        }
        
        // Aadhaar validation (12 digits)
        if (field.id === 'aadhaarNo' && value) {
            const aadhaarRegex = /^[0-9]{12}$/;
            if (!aadhaarRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid 12-digit Aadhaar number';
            }
        }
        
        // File validation
        if (field.type === 'file' && field.hasAttribute('required')) {
            if (!field.files || field.files.length === 0) {
                isValid = false;
                errorMessage = 'Please upload your ID card';
            } else {
                const file = field.files[0];
                if (file.size > 1048576) {
                    isValid = false;
                    errorMessage = 'File size must be less than 1 MB';
                }
                const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
                if (!allowedTypes.includes(file.type)) {
                    isValid = false;
                    errorMessage = 'Only JPG, JPEG, and PNG files are allowed';
                }
            }
        }
        
        // Show error if invalid
        if (!isValid && errorElement) {
            field.classList.add('error');
            errorElement.textContent = errorMessage;
            errorElement.classList.add('show');
        }
        
        return isValid;
    }
    
    // Validate all fields
    function validateForm() {
        let isValid = true;
        
        // Validate all required fields
        const requiredFields = [
            { field: document.getElementById('studentName'), error: document.getElementById('studentNameError') },
            { field: document.getElementById('studIdNo'), error: document.getElementById('studIdNoError') },
            { field: document.getElementById('college'), error: document.getElementById('collegeError') },
            { field: document.getElementById('aadhaarNo'), error: document.getElementById('aadhaarNoError') },
            { field: document.getElementById('course'), error: document.getElementById('courseError') },
            { field: document.getElementById('branch'), error: document.getElementById('branchError') },
            { field: document.getElementById('year'), error: document.getElementById('yearError') },
            { field: document.getElementById('contactNumber'), error: document.getElementById('contactNumberError') },
            { field: document.getElementById('emailId'), error: document.getElementById('emailIdError') },
            { field: document.getElementById('event1'), error: document.getElementById('event1Error') },
            { field: document.getElementById('event2'), error: document.getElementById('event2Error') }
        ];
        
        requiredFields.forEach(({ field, error }) => {
            if (field && !validateField(field, error)) {
                isValid = false;
            }
        });
        
        // Validate custom college if "Other" is selected
        const collegeSelect = document.getElementById('college');
        if (collegeSelect && collegeSelect.value === 'Other') {
            const customCollegeInput = document.getElementById('customCollege');
            const customCollegeError = document.getElementById('customCollegeError');
            if (customCollegeInput && !validateField(customCollegeInput, customCollegeError)) {
                isValid = false;
            }
        }
        
        // Validate checkboxes
        const terms = document.getElementById('terms');
        const rules = document.getElementById('rules');
        const termsError = document.getElementById('termsError');
        const rulesError = document.getElementById('rulesError');
        
        if (!terms.checked) {
            isValid = false;
            if (termsError) {
                termsError.textContent = 'You must agree to the terms and conditions';
                termsError.classList.add('show');
            }
        } else if (termsError) {
            termsError.classList.remove('show');
        }
        
        if (!rules.checked) {
            isValid = false;
            if (rulesError) {
                rulesError.textContent = 'You must agree to the rules and regulations';
                rulesError.classList.add('show');
            }
        } else if (rulesError) {
            rulesError.classList.remove('show');
        }
        
        return isValid;
    }
    
    // Real-time validation
    const formFields = form.querySelectorAll('input[required], select[required]');
    formFields.forEach(field => {
        field.addEventListener('blur', function() {
            const errorId = field.id + 'Error';
            const errorElement = document.getElementById(errorId);
            if (errorElement) {
                validateField(field, errorElement);
            }
        });
        
        field.addEventListener('input', function() {
            const errorId = field.id + 'Error';
            const errorElement = document.getElementById(errorId);
            if (errorElement && errorElement.classList.contains('show')) {
                validateField(field, errorElement);
            }
        });
    });
    
    // Handle checkbox validation
    document.getElementById('terms').addEventListener('change', function() {
        const errorElement = document.getElementById('termsError');
        if (this.checked && errorElement) {
            errorElement.classList.remove('show');
        }
    });
    
    document.getElementById('rules').addEventListener('change', function() {
        const errorElement = document.getElementById('rulesError');
        if (this.checked && errorElement) {
            errorElement.classList.remove('show');
        }
    });
    
    // Handle custom college field visibility
    function setupCustomCollegeField() {
        const collegeSelect = document.getElementById('college');
        const customCollegeRow = document.getElementById('customCollegeRow');
        const customCollegeInput = document.getElementById('customCollege');
        const customCollegeError = document.getElementById('customCollegeError');
        
        console.log('🔍 Setting up custom college field...');
        console.log('College select:', collegeSelect);
        console.log('Custom college row:', customCollegeRow);
        console.log('Custom college input:', customCollegeInput);
        
        if (!collegeSelect) {
            console.error('❌ College select element not found!');
            return;
        }
        
        if (!customCollegeRow) {
            console.error('❌ Custom college row element not found!');
            return;
        }
        
        if (!customCollegeInput) {
            console.error('❌ Custom college input element not found!');
            return;
        }
        
        // Function to show custom college field
        function showCustomCollegeField() {
            console.log('✅ Showing custom college field');
            // Force show with multiple methods - use !important via setProperty
            customCollegeRow.style.setProperty('display', 'grid', 'important');
            customCollegeRow.style.setProperty('visibility', 'visible', 'important');
            customCollegeRow.style.setProperty('opacity', '1', 'important');
            customCollegeRow.removeAttribute('hidden');
            customCollegeRow.classList.remove('hidden');
            customCollegeInput.setAttribute('required', 'required');
            // Auto focus after a small delay
            setTimeout(() => {
                customCollegeInput.focus();
            }, 150);
            // Clear error when showing
            if (customCollegeError) {
                customCollegeError.classList.remove('show');
            }
        }
        
        // Function to hide custom college field
        function hideCustomCollegeField() {
            console.log('✅ Hiding custom college field');
            // Force hide with multiple methods - use !important via setProperty
            customCollegeRow.style.setProperty('display', 'none', 'important');
            customCollegeRow.style.setProperty('visibility', 'hidden', 'important');
            customCollegeRow.style.setProperty('opacity', '0', 'important');
            customCollegeInput.removeAttribute('required');
            customCollegeInput.value = '';
            // Clear error when hiding
            if (customCollegeError) {
                customCollegeError.classList.remove('show');
            }
        }
        
        // Check initial state
        if (collegeSelect.value === 'Other') {
            showCustomCollegeField();
        } else {
            hideCustomCollegeField();
        }
        
        // Add change event listener
        collegeSelect.addEventListener('change', function() {
            console.log('🔄 College changed to:', this.value);
            if (this.value === 'Other') {
                showCustomCollegeField();
            } else {
                hideCustomCollegeField();
            }
        });
        
        // Also listen for input event (for programmatic changes)
        collegeSelect.addEventListener('input', function() {
            if (this.value === 'Other') {
                showCustomCollegeField();
            } else {
                hideCustomCollegeField();
            }
        });
        
        // Validate custom college on blur
        customCollegeInput.addEventListener('blur', function() {
            if (collegeSelect.value === 'Other') {
                validateField(customCollegeInput, customCollegeError);
            }
        });
        
        console.log('✅ Custom college field setup complete');
    }
    
    // Setup custom college field
    setupCustomCollegeField();
    
    // Backend API URL - Production URL
    // IMPORTANT: This URL is hardcoded for production deployment
    // DO NOT use placeholder URLs - always use the actual backend URL
    const API_BASE_URL = (() => {
        // Development: Use localhost
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            return 'http://localhost:5000';
        }
        // Production: Use deployed backend URL
        // Backend URL: https://enigmaugi.onrender.com
        // Note: Both frontend URLs work (enigmaugi.netlify.app and enigmaugii.netlify.app)
        // Backend CORS is configured to accept requests from both
        const PRODUCTION_BACKEND_URL = 'https://enigmaugi.onrender.com';
        
        // Safety check: Never allow placeholder URLs
        if (PRODUCTION_BACKEND_URL.includes('your-backend') || PRODUCTION_BACKEND_URL.includes('placeholder')) {
            console.error('❌ ERROR: Placeholder URL detected! This should never happen.');
            throw new Error('Invalid backend URL configuration');
        }
        
        return PRODUCTION_BACKEND_URL;
    })();
    
    // Log API URL for debugging - This will show in console
    console.log('🔗 Backend API URL:', API_BASE_URL);
    console.log('📍 Current hostname:', window.location.hostname);
    console.log('🌐 Full URL:', window.location.href);
    
    // Razorpay key (placeholder - replace with actual key from backend response)
    let razorpayKey = 'rzp_test_RdkBIbYhYwLVr7'; // Will be updated from create-order response
    
    // Form submission with Razorpay integration
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        console.log('📝 Form submitted');
        
        // Validate form
        if (!validateForm()) {
            console.log('❌ Form validation failed');
            // Scroll to first error
            const firstError = form.querySelector('.error-message.show, .error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }
        
        console.log('✅ Form validation passed');
        
        // Get form data
        const name = document.getElementById('studentName').value.trim();
        const email = document.getElementById('emailId').value.trim();
        const event1 = document.getElementById('event1').value;
        const event2 = document.getElementById('event2').value;
        
        // Get college value (include custom college if "Other" is selected)
        const collegeSelect = document.getElementById('college');
        let collegeValue = collegeSelect ? collegeSelect.value : '';
        if (collegeValue === 'Other') {
            const customCollege = document.getElementById('customCollege');
            collegeValue = customCollege ? customCollege.value.trim() : 'Other';
        }
        
        // Both events are required - amount is fixed ₹300
        if (!event1 || !event2) {
            alert('Please select both events');
            return;
        }
        
        // Fixed amount: ₹300 for 2 events
        const amount = 300;
        
        // Collect ALL form data BEFORE payment (so it's available even if verification fails)
        const allFormDataBeforePayment = {
            name: name,
            email: email,
            amount: amount,
            payment_status: 'pending',
            createdAt: new Date(),
            // All form fields - explicitly get each one
            studIdNo: document.getElementById('studIdNo')?.value.trim() || '',
            groupName: document.getElementById('groupName')?.value.trim() || '',
            college: collegeValue || '',
            customCollege: (collegeSelect && collegeSelect.value === 'Other') ? (document.getElementById('customCollege')?.value.trim() || '') : '',
            aadhaarNo: document.getElementById('aadhaarNo')?.value.trim() || '',
            course: document.getElementById('course')?.value.trim() || '',
            branch: document.getElementById('branch')?.value.trim() || '',
            year: document.getElementById('year')?.value || '',
            contactNumber: document.getElementById('contactNumber').value.trim() || '',
            event1: event1 || '',
            event2: event2 || ''
        };
        
        console.log('📦 Form data collected before payment:', allFormDataBeforePayment);
        
        // Store form data in sessionStorage BEFORE payment (as backup)
        const dataForStorageBeforePayment = {
            ...allFormDataBeforePayment,
            createdAt: allFormDataBeforePayment.createdAt.toISOString()
        };
        sessionStorage.setItem('registration_data_backup', JSON.stringify(dataForStorageBeforePayment));
        sessionStorage.setItem('user_name', name);
        sessionStorage.setItem('user_email', email);
        console.log('✅ Form data stored in sessionStorage (backup)');
        
        // Show loading state
        const submitBtn = document.getElementById('submitBtn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoader = submitBtn.querySelector('.btn-loader');
        
        btnText.style.display = 'none';
        btnLoader.style.display = 'flex';
        submitBtn.disabled = true;
        
        try {
            console.log('🔄 Creating Razorpay order...');
            console.log('API URL:', `${API_BASE_URL}/create-order`);
            console.log('Amount:', amount);
            
            // Step 1: Create Razorpay order
            const orderResponse = await fetch(`${API_BASE_URL}/create-order`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    amount: amount,
                    currency: 'INR',
                    name: name,
                    email: email
                })
            });
            
            if (!orderResponse.ok) {
                const errorText = await orderResponse.text();
                console.error('❌ Order creation failed:', errorText);
                throw new Error(`Failed to create order: ${orderResponse.status} ${orderResponse.statusText}`);
            }
            
            const orderData = await orderResponse.json();
            console.log('✅ Order created:', orderData);
            
            // Update Razorpay key from response
            if (orderData.key_id) {
                razorpayKey = orderData.key_id;
            }
            
            // Step 2: Open Razorpay Checkout
            const options = {
                key: razorpayKey,
                amount: orderData.amount * 100, // Convert to paise
                currency: orderData.currency,
                order_id: orderData.order_id,
                name: 'ENIGMA XIII Registration',
                description: `Registration for 2 events`,
                prefill: {
                    name: name,
                    email: email,
                    contact: document.getElementById('contactNumber').value.trim()
                },
                theme: {
                    color: '#00FFFF'
                },
                handler: async function(response) {
                    // Step 3: Payment success - Verify payment
                    try {
                        const verifyResponse = await fetch(`${API_BASE_URL}/verify-payment`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_signature: response.razorpay_signature,
                                name: name,
                                email: email,
                                amount: amount,
                                // All form fields
                                studIdNo: document.getElementById('studIdNo').value.trim(),
                                groupName: document.getElementById('groupName').value.trim(),
                                college: collegeValue,
                                customCollege: collegeSelect && collegeSelect.value === 'Other' ? (document.getElementById('customCollege')?.value.trim() || '') : '',
                                aadhaarNo: document.getElementById('aadhaarNo').value.trim(),
                                course: document.getElementById('course').value.trim(),
                                branch: document.getElementById('branch').value.trim(),
                                year: document.getElementById('year').value,
                                contactNumber: document.getElementById('contactNumber').value.trim(),
                                event1: event1,
                                event2: event2
                            })
                        });
                        
                        if (!verifyResponse.ok) {
                            const errorText = await verifyResponse.text();
                            console.error('❌ Verification request failed:', verifyResponse.status, errorText);
                            throw new Error(`Verification request failed: ${verifyResponse.status}`);
                        }
                        
                        const verifyData = await verifyResponse.json();
                        console.log('📋 Verification response:', verifyData);
                        
                        // Update form data with payment details
                        const allFormData = {
                            ...allFormDataBeforePayment,
                            payment_id: response.razorpay_payment_id,
                            order_id: response.razorpay_order_id,
                            payment_status: verifyData.verified ? 'paid' : 'verification_failed',
                            createdAt: new Date()
                        };
                        
                        if (verifyData.verified) {
                            // Step 4: Save to Firestore (frontend) - All form data
                            console.log('📦 Complete form data to save:', allFormData);
                            
                            // Save to Firestore
                            try {
                                await saveToFirestore(allFormData);
                            } catch (firestoreError) {
                                console.error('⚠️ Firestore save error (non-critical):', firestoreError);
                                // Continue even if Firestore save fails
                            }
                            
                            // Store all data in sessionStorage for success page and ticket
                            // Convert Date to string for JSON storage
                            const dataForStorage = {
                                ...allFormData,
                                createdAt: allFormData.createdAt.toISOString()
                            };
                            
                            sessionStorage.setItem('payment_id', response.razorpay_payment_id);
                            sessionStorage.setItem('order_id', response.razorpay_order_id);
                            sessionStorage.setItem('user_name', name);
                            sessionStorage.setItem('user_email', email);
                            sessionStorage.setItem('registration_data', JSON.stringify(dataForStorage));
                            
                            console.log('✅ All data stored in sessionStorage');
                            
                            // Redirect to success page
                            window.location.href = `success.html?payment_id=${response.razorpay_payment_id}&order_id=${response.razorpay_order_id}&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`;
                            
                            // Reset form
                            form.reset();
                        } else {
                            // Verification failed but payment went through - still store data and redirect
                            console.warn('⚠️ Payment verification failed, but storing data anyway');
                            
                            // Store data even if verification failed (payment went through)
                            const dataForStorage = {
                                ...allFormData,
                                createdAt: allFormData.createdAt.toISOString()
                            };
                            
                            sessionStorage.setItem('payment_id', response.razorpay_payment_id);
                            sessionStorage.setItem('order_id', response.razorpay_order_id);
                            sessionStorage.setItem('user_name', name);
                            sessionStorage.setItem('user_email', email);
                            sessionStorage.setItem('registration_data', JSON.stringify(dataForStorage));
                            sessionStorage.setItem('verification_warning', 'true');
                            
                            console.log('✅ Data stored despite verification failure');
                            
                            // Still redirect to success page (payment went through)
                            window.location.href = `success.html?payment_id=${response.razorpay_payment_id}&order_id=${response.razorpay_order_id}&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&warning=verification_failed`;
                        }
                    } catch (error) {
                        console.error('❌ Payment verification error:', error);
                        console.error('Error details:', error.message, error.stack);
                        
                        // Even if verification fails, if payment went through, store data and redirect
                        // Payment went through (we're in the handler), so store data anyway
                        const allFormData = {
                            ...allFormDataBeforePayment,
                            payment_id: response.razorpay_payment_id,
                            order_id: response.razorpay_order_id,
                            payment_status: 'verification_error',
                            createdAt: new Date()
                        };
                        
                        const dataForStorage = {
                            ...allFormData,
                            createdAt: allFormData.createdAt.toISOString()
                        };
                        
                        sessionStorage.setItem('payment_id', response.razorpay_payment_id);
                        sessionStorage.setItem('order_id', response.razorpay_order_id);
                        sessionStorage.setItem('user_name', name);
                        sessionStorage.setItem('user_email', email);
                        sessionStorage.setItem('registration_data', JSON.stringify(dataForStorage));
                        sessionStorage.setItem('verification_error', error.message);
                        
                        console.log('✅ Data stored despite verification error');
                        
                        // Redirect to success page anyway (payment was successful)
                        window.location.href = `success.html?payment_id=${response.razorpay_payment_id}&order_id=${response.razorpay_order_id}&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&error=verification`;
                    } finally {
                        // Reset button
                        btnText.style.display = 'inline';
                        btnLoader.style.display = 'none';
                        submitBtn.disabled = false;
                    }
                },
                modal: {
                    ondismiss: function() {
                        // User closed the checkout
                        btnText.style.display = 'inline';
                        btnLoader.style.display = 'none';
                        submitBtn.disabled = false;
                    }
                }
            };
            
            const razorpay = new Razorpay(options);
            razorpay.open();
            
        } catch (error) {
            console.error('❌ Error creating order:', error);
            console.error('Error details:', error.message);
            alert(`Failed to initiate payment: ${error.message}\n\nPlease check:\n1. Backend is running on ${API_BASE_URL}\n2. Check browser console for details`);
            
            // Reset button
            btnText.style.display = 'inline';
            btnLoader.style.display = 'none';
            submitBtn.disabled = false;
        }
    });
    
    // Function to save registration data to Firestore
    async function saveToFirestore(data) {
        try {
            // Check if Firestore is available
            if (typeof window.firebaseDb === 'undefined') {
                console.warn('⚠️ Firestore not available, skipping frontend save');
                console.warn('Backend will save the data instead');
                return;
            }
            
            console.log('💾 Saving to Firestore...');
            console.log('Data:', data);
            
            // Import Firestore functions
            const { collection, addDoc, serverTimestamp, Timestamp } = await import('firebase/firestore');
            
            // Convert Date to Firestore Timestamp
            let createdAtValue;
            if (data.createdAt instanceof Date) {
                createdAtValue = Timestamp.fromDate(data.createdAt);
            } else {
                createdAtValue = serverTimestamp();
            }
            
            const firestoreData = {
                ...data,
                createdAt: createdAtValue
            };
            
            // Log all fields being saved
            console.log('📦 Saving to Firestore - Fields:', Object.keys(firestoreData));
            console.log('📦 Complete data:', firestoreData);
            
            // Add document to 'registrations' collection
            const docRef = await addDoc(collection(window.firebaseDb, 'registrations'), firestoreData);
            
            console.log('✅ Registration saved to Firestore with ID:', docRef.id);
            console.log('📊 Total fields saved:', Object.keys(firestoreData).length);
            console.log('📋 Field list:', Object.keys(firestoreData).join(', '));
            return docRef.id;
        } catch (error) {
            console.error('❌ Error saving to Firestore:', error);
            console.error('Error details:', error.message, error.stack);
            // Don't throw - backend already saved it
            // But log the error for debugging
        }
    }
    
    // Initialize
    console.log('🚀 Initializing registration form...');
    populateEventDropdowns();
    console.log('✅ Registration form initialized');
}
