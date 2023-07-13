import { configureStore } from "@reduxjs/toolkit"
import pathesSlice from './reducers/pathes'


export const store = configureStore({
    reducer: {
        pathes: pathesSlice,
    }
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
