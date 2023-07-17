import { firestore } from "../firebase/config"

export const getPathes = async () => {
    const req = await firestore
        .collection('Pathes')
        .orderBy('favorites', 'desc')
        .get()
    const data:any = req.docs.map(e=> {
        return {...e.data(), firebaseId: e.id}
    })
    return data
}