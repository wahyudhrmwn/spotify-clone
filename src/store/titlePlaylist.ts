import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface titlePlaylistState {
  title: string
}

const initialState: titlePlaylistState = {
  title: ''
}

const titlePlaylist = createSlice({
  name: 'tiktokPlaylist',
  initialState,
  reducers: {
    setTitlePlaylist: (state, action: PayloadAction<string>) => {
    state.title = action.payload
    }
  }
})


export const { setTitlePlaylist } =
  titlePlaylist.actions;
export default titlePlaylist.reducer;