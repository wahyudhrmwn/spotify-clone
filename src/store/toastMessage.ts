import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface toastMessageState {
  toastMessage: string | null
}

const initialState: toastMessageState = {
  toastMessage: null
}

const toastMessage = createSlice({
  name: 'toastMessage',
  initialState,
  reducers: {
    setToastMessage: (state, action: PayloadAction<string | null>) => {
    state.toastMessage = action.payload
    }
  }
})


export const { setToastMessage } =
  toastMessage.actions;
export default toastMessage.reducer;