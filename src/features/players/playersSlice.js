import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'players',
    initialState: {
        players:[],
    },
    reducers: {
        'addPlayer':(state, action)=>{
            const data = action.payload; 
            // data transformation step - Data grid needs the unique id property to work 
            const newPlayer = {
                ...data,
                id:data.MSTID, 
              }

            // conditional to deal with duplicate player ids. 
            if(!state.players.find(player => player.id===newPlayer.id) ){
                // if not a record with duplicate id, add it.
                state.players = [newPlayer, ...state.players]
                // without immer, will have to write two returns, one of which is return state 
                // the other is return {...state, players: [newPlayer, ...state.players]};
            }
        }
    }
}

const playersSlice = createSlice(options);

export const selectPlayers = state => state.players.players;
export const { addPlayer } = playersSlice.actions;
export default playersSlice.reducer;