// firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

 const firebaseConfig = {
      apiKey: "AIzaSyCjTuXvYe5uJ7dwIemoeVXaFsJ-lNJjjrg",
      authDomain: "infosec-ea172.firebaseapp.com",
      projectId: "infosec-ea172",
      storageBucket: "infosec-ea172.appspot.com",
      messagingSenderId: "521681697123",
      appId: "1:521681697123:web:4236bfca683dcbfa033b56",
      measurementId: "G-8QX9P5WV5Z"
    };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
