import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface expandedLeftState {
  expand: boolean
}

const initialState: expandedLeftState = {
  expand: false
}

const expandedLeft = createSlice({
  name: 'expandedLeft',
  initialState,
  reducers: {
    setExpandedLeft: (state, action: PayloadAction<boolean>) => {
    state.expand = action.payload
    }
  }
})


export const { setExpandedLeft } =
  expandedLeft.actions;
export default expandedLeft.reducer;