import { configureStore } from '@reduxjs/toolkit';
import  productReducer from 'data-stores/slices/productSlice';
const store = configureStore({ reducer: {
    product: productReducer,
} })
export default store;