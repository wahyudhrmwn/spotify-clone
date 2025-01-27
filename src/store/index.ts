import { configureStore } from '@reduxjs/toolkit';
import selectedDetailReducer from './selectedDetailSlice';
import titlePlaylistReducer from './titlePlaylist'

export const store = configureStore({
  reducer: {
    selectedDetail: selectedDetailReducer,
    titlePlaylist: titlePlaylistReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
