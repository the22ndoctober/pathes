import { initializeApp } from "firebase/app"
import {firebaseConfig} from '../firebase/config'
import { addDoc, collection, getFirestore, setDoc } from "firebase/firestore"


type Markers = Map<string,number>

interface Path {
    title: string,
    id: number,
    shortDescription: string,
    longDescription: string,
    markers: any,
    favorites: boolean,
    pathLength: number
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export const addPathAsync = async (path:Path)=>{
    await addDoc(collection(db,'Pathes'), path)
}