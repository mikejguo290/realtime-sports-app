import { configureStore } from '@reduxjs/toolkit';
import playersReducer from '../features/players/playersSlice';

const rootReducer = {
    players:playersReducer,
}

const store = configureStore({reducer: rootReducer });

export default store;