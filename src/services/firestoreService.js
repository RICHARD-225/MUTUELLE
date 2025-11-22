import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit
} from 'firebase/firestore'
import { db } from './firebase'

// Collections
const COLLECTIONS = {
  ADHERENTS: 'adherents',
  PAIEMENTS: 'paiements',
  PRESTATIONS: 'prestations',
  DOCUMENTS: 'documents',
  UTILISATEURS: 'utilisateurs',
  LOGS: 'logs'
}

// ========== ADHÉRENTS ==========
export const createAdherent = async (adherentData) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTIONS.ADHERENTS), {
      ...adherentData,
      date_inscription: new Date(),
      statut: 'actif'
    })
    return { success: true, id: docRef.id }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

export const getAdherents = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTIONS.ADHERENTS))
    const adherents = []
    querySnapshot.forEach((doc) => {
      adherents.push({ id: doc.id, ...doc.data() })
    })
    return { success: true, data: adherents }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

export const getAdherent = async (id) => {
  try {
    const docRef = doc(db, COLLECTIONS.ADHERENTS, id)
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
      return { success: true, data: { id: docSnapshot.id, ...docSnapshot.data() } }
    }
    return { success: false, error: 'Adhérent non trouvé' }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

export const updateAdherent = async (id, data) => {
  try {
    const docRef = doc(db, COLLECTIONS.ADHERENTS, id)
    await updateDoc(docRef, data)
    return { success: true }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

// ========== PAIEMENTS ==========
export const createPaiement = async (paiementData) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTIONS.PAIEMENTS), {
      ...paiementData,
      date: new Date(),
      statut: 'en_attente'
    })
    return { success: true, id: docRef.id }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

export const getPaiements = async (adherentId = null) => {
  try {
    let q
    if (adherentId) {
      q = query(
        collection(db, COLLECTIONS.PAIEMENTS),
        where('adherent_id', '==', adherentId),
        orderBy('date', 'desc')
      )
    } else {
      q = query(collection(db, COLLECTIONS.PAIEMENTS), orderBy('date', 'desc'))
    }
    const querySnapshot = await getDocs(q)
    const paiements = []
    querySnapshot.forEach((doc) => {
      paiements.push({ id: doc.id, ...doc.data() })
    })
    return { success: true, data: paiements }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

export const updatePaiement = async (id, data) => {
  try {
    const docRef = doc(db, COLLECTIONS.PAIEMENTS, id)
    await updateDoc(docRef, data)
    return { success: true }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

// ========== PRESTATIONS ==========
export const createPrestation = async (prestationData) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTIONS.PRESTATIONS), {
      ...prestationData,
      date: new Date(),
      statut: 'en_attente'
    })
    return { success: true, id: docRef.id }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

export const getPrestations = async (adherentId = null) => {
  try {
    let q
    if (adherentId) {
      q = query(
        collection(db, COLLECTIONS.PRESTATIONS),
        where('adherent_id', '==', adherentId),
        orderBy('date', 'desc')
      )
    } else {
      q = query(collection(db, COLLECTIONS.PRESTATIONS), orderBy('date', 'desc'))
    }
    const querySnapshot = await getDocs(q)
    const prestations = []
    querySnapshot.forEach((doc) => {
      prestations.push({ id: doc.id, ...doc.data() })
    })
    return { success: true, data: prestations }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

// ========== DOCUMENTS ==========
export const createDocument = async (documentData) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTIONS.DOCUMENTS), {
      ...documentData,
      date_upload: new Date()
    })
    return { success: true, id: docRef.id }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

// ========== LOGS ==========
export const createLog = async (logData) => {
  try {
    await addDoc(collection(db, COLLECTIONS.LOGS), {
      ...logData,
      timestamp: new Date()
    })
    return { success: true }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

