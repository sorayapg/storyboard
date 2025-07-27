import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClWfsZ3-cBSR5yEj52tx-idJOx6VJaYR0",
  authDomain: "soraya-porfolio.firebaseapp.com",
  projectId: "soraya-porfolio",
  storageBucket: "soraya-porfolio.firebasestorage.app",
  messagingSenderId: "562296029401",
  appId: "1:562296029401:web:0a971523f34cd6adf67ec8",
  measurementId: "G-B34MKRJJVQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
