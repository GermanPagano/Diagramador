import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { hojas } from '../services/hojas-Diagramas'

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




  export async function cargarHojas(db, hojas) {
    try {
      await Promise.all(
        hojas.map(async (hoja) => {
          await addDoc(collection(db, "hojas"), hoja);
        })
      );
      console.log("Hojas cargadas exitosamente en Firebase Firestore");
    } catch (error) {
      console.error("Error al cargar las hojas en Firebase Firestore:", error);
    }
  }
