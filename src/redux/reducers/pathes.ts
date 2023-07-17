import {createSlice} from '@reduxjs/toolkit'
import * as actions from '../actions/pathes'

type Pathes = {
    pathes: any[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: any,
    activePath: number | 'none'
}

const initialState: Pathes = {
    pathes: [],
    status: 'idle',
    error: null,
    activePath: 'none'
}

export const pathesSlice = createSlice({
    name: 'pathes',
    initialState,
    reducers: {
        selectPath: (state, action) =>{
            state.activePath = actions.selectPath(state.activePath, action.payload)
        },
        handleFavorites: (state,action)=>{
            state.pathes = actions.handleFavorites(state.pathes,action.payload)
        },
        handlePathes: (state,action) =>{
            state.pathes = actions.handlePathes(state.pathes, action.payload)
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
                    if(typeof e.markers[0] !== 'string'){
                        state.pathes.push(e)
                    }
                    else{
                        state.pathes.push({...e, markers: e.markers.map((marker:any) => JSON.parse(marker))})
                    }
                })
                
            })
            .addCase(actions.fetchPathes.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            
    }
})

export const {selectPath,handleFavorites,handlePathes} = pathesSlice.actions

export const selectPathes = (state:any) => state.pathes.pathes
export const activePath = (state:any) => state.pathes.activePath
export const getPathesStatus = (state:any) => state.pathes.status
export const getPathesError = (state:any) => state.pathes.error

export default pathesSlice.reducer
