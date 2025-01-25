// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpxbitCLcIsBLksABD0ixue-maaECpoIU",
  authDomain: "movieapp-jwd.firebaseapp.com",
  projectId: "movieapp-jwd",
  storageBucket: "movieapp-jwd.firebasestorage.app",
  messagingSenderId: "147007955893",
  appId: "1:147007955893:web:fecb16db0c1142b15deffc",
  measurementId: "G-890H59VMJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);