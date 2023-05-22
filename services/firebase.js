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



  async function cargarHojas () {

    try {
        const hojas = [
          { "nombre": 701, "turnos": [1, 2, 3, 4, 5, 6, 7] },
          { "nombre": 702, "turnos": [1, 2, 3, 4, 5, 6, 7] },
          { "nombre": 703, "turnos": [1, 2, 3, 4, 5, 6, 7] },
          { "nombre": 704, "turnos": [1, 2, 3, 4, 5, 6, 7] },
          { "nombre": 705, "turnos": [1, 2, 3, 4, 5, 6, 7] },
          { "nombre": 706, "turnos": [1, 2, 3, 4, 5, 6, 7] },
          { "nombre": 707, "turnos": [1, 2, 3, 4, 5, 6, 7] },
          { "nombre": 708, "turnos": [1, 2, 3, 4, 5, 6, 7] },
          { "nombre": 709, "turnos": [1, 2, 3, 4, 5, 6, 7] },
          { "nombre": 710, "turnos": [1, 2, 3, 4, 5, 6, 7] }
        ];
    
        for (const hoja of hojas) {
          await addDoc(collection(db, "hojas"), hoja);
        }
    
        console.log("Hojas cargadas exitosamente en Firebase Firestore");
      } catch (error) {
        console.error("Error al cargar las hojas en Firebase Firestore:", error);
      }
  }
  export { cargarHojas };