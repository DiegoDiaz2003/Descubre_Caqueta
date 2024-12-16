// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"; // Importa el módulo de Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9SUdJDwxfvRdMEPGJXpVLLjZP8V2J7D0",
  authDomain: "descubrecaqueta.firebaseapp.com",
  projectId: "descubrecaqueta",
  storageBucket: "descubrecaqueta.appspot.com", // Nota: Corregido el nombre del storage bucket
  messagingSenderId: "771841213517",
  appId: "1:771841213517:web:3baf1e804c6c84488ac804",
  measurementId: "G-8GPQT2ENVK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (si lo necesitas)
const analytics = getAnalytics(app);

// Initialize and export Storage
export const storage = getStorage(app);
