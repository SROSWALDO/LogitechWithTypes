import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';

export const store = configureStore({
    reducer,
});

// Exporta los tipos derivados del store
export type RootState = ReturnType<typeof store.getState>; // Tipo para el estado global
export type AppDispatch = typeof store.dispatch;          // Tipo para el dispatch