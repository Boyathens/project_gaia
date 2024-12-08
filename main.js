// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);