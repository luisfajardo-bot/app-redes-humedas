// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// ¡IMPORTANTE! Reemplaza este objeto con la configuración de tu proyecto de Firebase.
// Ve a la consola de Firebase (console.firebase.google.com), crea un proyecto,
// añade una aplicación web (</>) y copia el objeto firebaseConfig aquí.
const firebaseConfig = {
  apiKey: "AIzaSyAztyqsUxnsuUH4bZAiecjvibFrO3tIATs",
  authDomain: "mqt-redes-humedas.firebaseapp.com",
  projectId: "mqt-redes-humedas",
  storageBucket: "mqt-redes-humedas.firebasestorage.app",
  messagingSenderId: "576692080745",
  appId: "1:576692080745:web:cd263bce067edd770bd2f8"
};


// Inicializar de forma condicional para evitar errores si aún no está configurado
let app;
let db = null;

try {
  // Solo se inicializa si se han agregado las llaves
  if (Object.keys(firebaseConfig).length > 0 && firebaseConfig.apiKey) {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
  }
} catch (error) {
  console.error("Error inicializando Firebase", error);
}

export { db };
