import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBdbHQEcgjpJ2HGvp7g7cfN6piJNAULmog",
  authDomain: "bingo-bash-58d11.firebaseapp.com",
  projectId: "bingo-bash-58d11",
  storageBucket: "bingo-bash-58d11.appspot.com",
  messagingSenderId: "807307409307",
  appId: "1:807307409307:web:1d0be720c3ebf2beb1133e",
  databaseURL: "bingo-bash-58d11-default-rtdb.firebaseio.com/",
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
