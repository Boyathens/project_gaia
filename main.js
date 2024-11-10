// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPP4zx3becCtJ0Px0h0anczBr-zGBEIa4",
  authDomain: "project-gaia-87b6a.firebaseapp.com",
  projectId: "project-gaia-87b6a",
  storageBucket: "project-gaia-87b6a.firebasestorage.app",
  messagingSenderId: "531879488342",
  appId: "1:531879488342:web:6cd8c46b01b30f6b3d44f7",
  measurementId: "G-TS4XZPNZYL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get instances of Firebase services
const auth = getAuth(app);
const firestore = getFirestore(app);

// Example function using Firebase Authentication
const signUpUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User created:", userCredential.user);
  } catch (error) {
    console.error("Error signing up:", error.message);
  }
};

// Example function using Firestore
const saveUserData = async (userId, userData) => {
  try {
    const docRef = await firestore.collection('users').doc(userId).set(userData);
    console.log("Document written with ID:", docRef.id);
  } catch (error) {
    console.error("Error adding document:", error);
  }
};