// firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJ0LxUrrjkkirfG-npDQT-xgXuLPopQiY",
  authDomain: "infoproj-29a35.firebaseapp.com",
  projectId: "infoproj-29a35",
  storageBucket: "infoproj-29a35.firebasestorage.app",
  messagingSenderId: "245142872020",
  appId: "1:245142872020:web:bee5fd812d1118297dc041",
  measurementId: "G-DHWTQKYS55"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
