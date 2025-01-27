import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectedDetailState {
  currentMenu: string | null;
  menuHistory: string[]; // Menyimpan riwayat menu
  futureMenus: string[]; // Menyimpan menu yang bisa di-"Redo"
}

const initialState: SelectedDetailState = {
  currentMenu: null,
  menuHistory: [],
  futureMenus: [],
};

const selectedDetailSlice = createSlice({
  name: "selectedDetail",
  initialState,
  reducers: {
    setSelectedDetail: (state, action: PayloadAction<string | null>) => {
      if (action.payload !== state.currentMenu) {
        if (action.payload !== null) {
          state.menuHistory = [...state.menuHistory, action.payload]; // Membuat array baru dengan push
        }
        state.currentMenu = action.payload;
        state.futureMenus = []; // Reset futureMenus karena ada perubahan
        console.log("Menu updated:", state.menuHistory, state.futureMenus);
      }
    },
    undoMenu: (state) => {
      if (state.menuHistory.length > 0) {
        const lastMenu = state.menuHistory[state.menuHistory.length - 1]; // Ambil menu terakhir
        console.log(lastMenu, " LastMenu");
        state.menuHistory = state.menuHistory.slice(
          0,
          state.menuHistory.length - 1
        ); // Hapus menu terakhir tanpa mengubah array secara langsung
        console.log(state.menuHistory, " menuHistory");
        state.futureMenus = [lastMenu, ...state.futureMenus]; // Membuat array baru dengan shift
        console.log(state.futureMenus, " futuresMenu");
        state.currentMenu =
          state.menuHistory[state.menuHistory.length - 1] || null; // Set ke menu sebelumnya
        console.log(state.currentMenu, " currentMenu");
      }
    },
    redoMenu: (state) => {
      if (state.futureMenus.length > 0) {
        const nextMenu = state.futureMenus[0]; // Ambil menu pertama dari futureMenus
        state.menuHistory = [...state.menuHistory, nextMenu]; // Membuat array baru dengan push
        state.futureMenus = state.futureMenus.slice(1); // Hapus menu pertama dari futureMenus
        state.currentMenu = nextMenu; // Perbarui menu saat ini
      }
    },
  },
});

export const { setSelectedDetail, undoMenu, redoMenu } =
  selectedDetailSlice.actions;
export default selectedDetailSlice.reducer;
