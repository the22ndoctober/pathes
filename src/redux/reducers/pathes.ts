import {createSlice} from '@reduxjs/toolkit'
import * as actions from '../actions/pathes'


const initialState = {
    pathes:[]
}

export const pathesSlice = createSlice({
    name: 'pathes',
    initialState,
    reducers: {
        addpath: (state,action)=>{
            state.pathes = actions.addPath(state.pathes, action.payload)
        }
    }
})

export const {addpath} = pathesSlice.actions
export const selectActive = (state:any) => state.pathes.days.active
export default pathesSlice.reducer
