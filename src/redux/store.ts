import { configureStore } from "@reduxjs/toolkit"
import pathesSlice from './reducers/pathes'
import createPathModalSlice  from "./reducers/createPathModal"


export const store = configureStore({
    reducer: {
        pathes: pathesSlice,
        modal: createPathModalSlice,
    }
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
