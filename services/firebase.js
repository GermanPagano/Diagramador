import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


 async function cargarDatos() {
// Your web app's Firebase configuration
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
  const db = getFirestore();

  try {
    const datos = [
      { "nombre": 701, "turnos": [1, 2, 3, 4, 5, 6, 7] },
      { "nombre": 702, "turnos": [1, 2, 3, 4, 5, 6, 7] },
      { "nombre": 703, "turnos": [1, 2, 3, 4, 5, 6, 7] },
      // Resto de los datos...
    ];

    for (const dato of datos) {
      await addDoc(collection(db, "diagramas"), dato);
    }

    console.log("Datos cargados exitosamente en Firebase Firestore");
  } catch (error) {
    console.error("Error al cargar los datos en Firebase Firestore:", error);
  }
  
}