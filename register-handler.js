
   
    
    
    const firebaseConfig = {
        apiKey: "AIzaSyDPP4zx3becCtJ0Px0h0anczBr-zGBEIa4",
        authDomain: "project-gaia-87b6a.firebaseapp.com",
        databaseURL: "https://project-gaia-87b6a-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "project-gaia-87b6a",
        storageBucket: "project-gaia-87b6a.firebasestorage.app",
        messagingSenderId: "531879488342",
        appId: "1:531879488342:web:6cd8c46b01b30f6b3d44f7",
        measurementId: "G-TS4XZPNZYL"
        };
        // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const db = firebase.firestore();


// Handle form submission
    document.getElementById('registrationForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Clear any previous error message
    document.getElementById('error-message').textContent = '';

    try {
        // Create user with Firebase Authentication
        const userCredential = await auth.createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Store additional user data in Firestore
        await db.collection('users').doc(user.uid).set({
            username: username,
            email: email
        });
        alert('Registration successful!');
        // Optionally, reset the form
        document.getElementById('registrationForm').reset();
    } catch (error) {
        console.error('Error registering user: ', error);
        document.getElementById('error-message').innerText = error.message; // Display error message
    }
});
