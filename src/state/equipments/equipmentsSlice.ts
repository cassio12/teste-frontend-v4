import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import data from './data.json'

interface Equipment { 
    id: string,
    equipmentModelId: string,
    name: string,
}

export interface EquipmentsState { 
    equipimentsList: Equipment[]
}

const initialState: EquipmentsState = {
    equipimentsList: data,
}

const equipmentsSlice = createSlice({
    name: 'equipments',
    initialState,
    reducers: {
        // add: (state, action: PayloadAction<EquipmentsState>)=>{
        //     state.equipimentsList = {...state.equipimentsList, action.payload},
        // }
    },
})

export default equipmentsSlice.reducer