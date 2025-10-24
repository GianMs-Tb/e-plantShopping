import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Configura la tienda de Redux
const store = configureStore({
  reducer: {
    cart: cartReducer, // 'cart' es la porción del estado manejada por cartReducer
  },
});

export default store;
