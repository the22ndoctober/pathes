import {createSlice} from '@reduxjs/toolkit'
import * as actions from '../actions/pathes'
import { GET_PATHES } from '../types/types'

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
            .addCase(actions.fetchPathes.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(actions.fetchPathes.fulfilled, (state, action) => {
                state.status = 'succeeded'
                action.payload.forEach((e:any)=>{
                    state.pathes.push(e)
                })
                
            })
            .addCase(actions.fetchPathes.rejected, (state, action) => {
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
