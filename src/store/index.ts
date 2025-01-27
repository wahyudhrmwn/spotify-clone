import { configureStore } from '@reduxjs/toolkit';
import selectedDetailReducer from './selectedDetailSlice';
import expandedLeftReducer from './expandedLeft'
import toastMessageReducer from './toastMessage'
import detailPlaylistReducer from './detailPlaylistId'
import playlistReducer from './playlistSlice';

export const store = configureStore({
  reducer: {
    selectedDetail: selectedDetailReducer,
    expandedLeft: expandedLeftReducer,
    toast: toastMessageReducer,
    detail: detailPlaylistReducer,
    playlist: playlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
