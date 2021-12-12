import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'players',
    initialState: [],
    reducers: {
        'addPlayer':(state, action)=>{
            return [action.payload, ...state];
        }
    }
}

const playersSlice = createSlice(options);

export const { addPlayer } = playersSlice.actions;
export default playersSlice.reducer;