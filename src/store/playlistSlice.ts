import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Song {
  songId: number;
  imgSrc: string;
  title: string;
  artist: string;
  album: string;
  date: string;
  time: string;
}

interface Playlist {
  playlistId: number;
  url: string;
  name: string;
  description: string;
  songs: Song[];
}

interface PlaylistState {
  playlist: Playlist | null;
  error: string | null;
  isLoading: boolean
}

const initialState: PlaylistState = {
  playlist: null,
  error: null,
  isLoading: false,
};

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    setPlaylist: (state, action: PayloadAction<Playlist>) => {
      state.playlist = action.payload;
      state.error = null;
      state.isLoading = false; // Loading selesai setelah berhasil
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false; // Loading selesai meskipun terjadi error
    },
    resetPlaylist: (state) => {
      state.playlist = null;
      state.error = null;
      state.isLoading = false;
    },
    setLoading: (state) => {
      state.isLoading = true; // Menandakan loading sedang berlangsung
    },
  },
});

export const { setPlaylist, setError, resetPlaylist } = playlistSlice.actions;
export default playlistSlice.reducer;
