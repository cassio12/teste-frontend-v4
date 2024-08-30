import { configureStore } from '@reduxjs/toolkit'
import equipmentsReducer from './equipments/equipmentsSlice'
import equipLocationReducer from './equipmentsLocations/equipLocation'

export const store = configureStore({
  reducer: {
    equipments: equipmentsReducer,
    locations: equipLocationReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch