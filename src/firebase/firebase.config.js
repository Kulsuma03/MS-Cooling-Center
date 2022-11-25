// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmkAcVAVUGMP2TB90yrV2_JkT851qm14U",
  authDomain: "ms-cooling-point.firebaseapp.com",
  projectId: "ms-cooling-point",
  storageBucket: "ms-cooling-point.appspot.com",
  messagingSenderId: "863931481225",
  appId: "1:863931481225:web:6e8983b918872f0b3f1a58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;