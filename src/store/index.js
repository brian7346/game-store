import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from './games/reducer';
import cartReducer from './cart/reducer';

export const store = configureStore({
    reducer: {
        games: gamesReducer,
        cart: cartReducer
    }
  })