import { configureStore } from '@reduxjs/toolkit';
import categoriasSlice from './reducers/categorias';

const store = configureStore({
  reducer: {
    categorias: categoriasSlice
  }
});

export default store;