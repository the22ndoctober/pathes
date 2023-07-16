import {createSlice} from '@reduxjs/toolkit'
import * as actions from '../actions/search'

const initialState = {
    value: ''
}

export const createSearchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        handleSearch: (state, action):void  => {
            state.value = actions.handleSearch(action.payload)
        },
    }
})

export const {handleSearch} = createSearchSlice.actions

export const getSearchValue = (state:any) => state.search.value

export default createSearchSlice.reducer