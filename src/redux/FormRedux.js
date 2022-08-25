import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    row: [],
    userEdit: null,
    idCounter: 1,
  },
  reducers: {
    addUser: (state, action) => {
      state.row.push({
        ...action.payload,
        id: state.idCounter,
      });
      state.idCounter += 1;
    },
    deleteUser: (state, action) => {
      state.row = state.row.filter((r) => r.id !== action.payload.id);
      state.idCounter -= 1;
    },
  },
});

export const { addUser, deleteUser } = formSlice.actions;
export default formSlice.reducer;
