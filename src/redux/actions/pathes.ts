import { ADD_PATH, HANDLE_FAVORITES, GET_PATHES, SELECT_PATH, HANDLE_DELETE_PATH} from "../types/types"
import {createAsyncThunk} from "@reduxjs/toolkit"
import { getPathes } from "../../api/getPathes"



export const fetchPathes = createAsyncThunk(GET_PATHES, getPathes)


export const selectPath = (state:any, action: any) =>{
    if(action.type === SELECT_PATH){
       if(action.payload !== state) return action.payload
       return 'none'    
    }
    return state
}

export const handleFavorites = (state:any[],action:any) =>{
    if(action.type === HANDLE_FAVORITES) {
        if(!state.some(e=> typeof e.favorites === 'undefined')) return state.map(el=>{
            if(el.id === action.payload) return {...el, favorites: !el.favorites}
            return el
        }).sort((a,b)=> b.favorites - a.favorites)
    }
    
    return state
}

