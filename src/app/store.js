import { configureStore } from '@reduxjs/toolkit';
import playersReducer from '../features/players/playersSlice';
import searchReducer from '../features/search/searchSlice'

const rootReducer = {
    players:playersReducer,
    search:searchReducer,
}

const store = configureStore({reducer: rootReducer });

export default store;