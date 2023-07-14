import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import * as actions from '../actions/pathes'
import {firestore} from '../../firebase/config'
import { GET_PATHES } from '../types/types'

const getPathes = async () => {
    const req = await firestore
        .collection('Pathes')
        .orderBy('favorites', 'desc')
        .get()
    const data:any[] = req.docs.map(e=> e.data())
    return data
}

export const fetchPathes = createAsyncThunk(GET_PATHES, getPathes)


type Pathes = {
    pathes: any[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: any
}

const initialState: Pathes = {
    pathes: [],
    status: 'idle',
    error: null
}

export const pathesSlice = createSlice({
    name: 'pathes',
    initialState,
    reducers: {
        addpath: (state,action)=>{
            state.pathes = actions.addPath(state.pathes, action.type, action.payload)
        }
    },
    extraReducers(builder){
        builder
            .addCase(fetchPathes.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchPathes.fulfilled, (state, action) => {
                state.status = 'succeeded'
                action.payload.forEach((e:any)=>{
                    state.pathes.push(e)
                })
                
            })
            .addCase(fetchPathes.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            
    }
})

export const {addpath} = pathesSlice.actions

export const selectPathes = (state:any) => state.pathes.pathes
export const getPathesStatus = (state:any) => state.pathes.status
export const getPathesError = (state:any) => state.pathes.error

export default pathesSlice.reducer
