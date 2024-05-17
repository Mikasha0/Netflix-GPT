// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlfwxKZ9-fznFRPQI6S4n3zeerQOQTAJo",
  authDomain: "netflixgpt-6a25c.firebaseapp.com",
  projectId: "netflixgpt-6a25c",
  storageBucket: "netflixgpt-6a25c.appspot.com",
  messagingSenderId: "1029204844029",
  appId: "1:1029204844029:web:fa9067ad97bad17c210d94",
  measurementId: "G-M7ZYX55S3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);