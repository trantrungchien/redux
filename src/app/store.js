import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/Product/ProductSlice'
import categoryReducer from '../features/Category/categorySlice'
export const store = configureStore({
  reducer: {
   product : productReducer,
   category : categoryReducer
  }
});
