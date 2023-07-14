import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isOpen: false
}

export const createPathModalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        handleOpen: (state):void  => {
            state.isOpen = true
        },
        handleClose: (state):void => {
            state.isOpen = false
        }
    }
})

export const {handleOpen,handleClose} = createPathModalSlice.actions

export const isOpen = (state:any) => state.modal.isOpen

export default createPathModalSlice.reducer