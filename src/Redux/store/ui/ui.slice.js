import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nightMode: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    disableNightMode: (state) => {
      state.nightMode = false;
    },
    enableNightMode: (state) => {
      state.nightMode = true;
    },
  },
});

export const { disableNightMode, enableNightMode } = uiSlice.actions;
