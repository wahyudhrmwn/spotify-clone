import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface detailPlaylistIdState {
  id: number | null
}

const initialState: detailPlaylistIdState = {
  id: null
}

const detailPlaylist = createSlice({
  name: 'detailPlaylist',
  initialState,
  reducers: {
    setDetailPlaylist: (state, action: PayloadAction<number | null>) => {
    state.id = action.payload
    }
  }
})


export const { setDetailPlaylist } =
  detailPlaylist.actions;
export default detailPlaylist.reducer;