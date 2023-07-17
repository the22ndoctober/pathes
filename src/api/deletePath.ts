import { initializeApp } from "firebase/app"
import {firebaseConfig} from '../firebase/config'
import { deleteDoc, doc, getFirestore, setDoc } from "firebase/firestore"
import { useDispatch } from "react-redux"


const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export const deletePath = async (path:any)=>{
    await deleteDoc(doc(db, "Pathes", path))
}