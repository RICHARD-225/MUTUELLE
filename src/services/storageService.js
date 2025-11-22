import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { storage } from './firebase'

// Upload un fichier
export const uploadFile = async (file, path) => {
  try {
    const storageRef = ref(storage, path)
    const snapshot = await uploadBytes(storageRef, file)
    const downloadURL = await getDownloadURL(snapshot.ref)
    return { success: true, url: downloadURL, path: snapshot.ref.fullPath }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

// Upload un document d'adhérent
export const uploadAdherentDocument = async (file, adherentId, type) => {
  const fileName = `${type}_${Date.now()}_${file.name}`
  const path = `adherents/${adherentId}/${fileName}`
  return await uploadFile(file, path)
}

// Supprimer un fichier
export const deleteFile = async (path) => {
  try {
    const storageRef = ref(storage, path)
    await deleteObject(storageRef)
    return { success: true }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

