// Configuration Firebase
// TODO: Remplacer par vos propres clés de configuration Firebase

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Configuration Firebase (à remplacer par vos propres valeurs)
// Utilise les variables d'environnement si disponibles, sinon utilise les valeurs par défaut
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "YOUR_API_KEY",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "YOUR_AUTH_DOMAIN",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "YOUR_PROJECT_ID",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "YOUR_STORAGE_BUCKET",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "YOUR_MESSAGING_SENDER_ID",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "YOUR_APP_ID"
}

// Initialiser Firebase
const app = initializeApp(firebaseConfig)

// Initialiser les services
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app

