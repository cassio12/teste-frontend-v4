import { EquipmentsState } from './../equipments/equipmentsSlice';
import { createSlice } from '@reduxjs/toolkit';
import data from './data.json'

interface Position {
    date: string,
    lat: number ,
    lon: number,
}

interface Location {
    equipmentId: string,
    positions: Position[]
}

export interface LocationState {
    locations: Location[]
}

const initialState: LocationState = {
    locations: data
}

const locationSlice = createSlice({
    name: 'locations',
    initialState,
    reducers: {}
})

export default locationSlice.reducer