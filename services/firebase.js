import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBZyBYi6p90G4zsZuWvc6fLMAv7_rvltII",
  authDomain: "diagramador-7b12c.firebaseapp.com",
  projectId: "diagramador-7b12c",
  storageBucket: "diagramador-7b12c.appspot.com",
  messagingSenderId: "1034077999002",
  appId: "1:1034077999002:web:52c3f4b74a1f0a18a87423"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  // Obtiene la instancia de Firestore
  export const db = getFirestore();
