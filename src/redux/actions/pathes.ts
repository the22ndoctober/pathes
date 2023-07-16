import { ADD_PATH, GET_PATHES,SELECT_PATH } from "../types/types"
import {createAsyncThunk} from "@reduxjs/toolkit"
import { getPathes } from "../../api/getPathes"

export const fetchPathes = createAsyncThunk(GET_PATHES, getPathes)

export const addPath = (state:any, type: string, action:any)=>{
    if(type === ADD_PATH)return [...state, action.payload]
    return state
}

export const selectPath = (state:any, type: string, action: any) =>{
    if(type === SELECT_PATH) return action.payload
    return state
}

