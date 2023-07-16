import { configureStore } from "@reduxjs/toolkit"
import pathesSlice from './reducers/pathes'
import createPathModalSlice  from "./reducers/createPathModal"
import createSearchSlice from "./reducers/search"


export const store = configureStore({
    reducer: {
        pathes: pathesSlice,
        modal: createPathModalSlice,
        search: createSearchSlice,
    }
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
