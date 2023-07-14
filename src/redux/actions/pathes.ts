import { ADD_PATH } from "../types/types"

export const addPath = (state:any, type: string, action:any)=>{
    if(type === ADD_PATH)return [...state, action.payload]
    return state
}