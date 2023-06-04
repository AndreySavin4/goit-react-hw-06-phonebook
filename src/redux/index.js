import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { phoneBookReducer } from './createSlice';

export const store = configureStore({
  reducer: {
    phoneBook: phoneBookReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
