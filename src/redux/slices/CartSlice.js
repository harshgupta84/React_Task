import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  series: "",
  doorType: "",
  assembly: "",
  winch: "",
  wfeet: "",
  hinch: "",
  hfeet: "",
  windcode: "",
  color: "",
  design: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSeries: (state, action) => {
      state.series = action.payload;
    },
    setDoorType: (state, action) => {
      state.doorType = action.payload;
    },
    setAssembly: (state, action) => {
      state.assembly = action.payload;
    },
    setWinch: (state, action) => {
      state.winch = action.payload;
    },
    setWfeet: (state, action) => {
      state.wfeet = action.payload;
    },
    setHinch: (state, action) => {
      state.hinch = action.payload;
    },
    setHfeet: (state, action) => {
      state.hfeet = action.payload;
    },
    setWindCode: (state, action) => {
      state.windcode = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
    setDesign: (state, action) => {
      state.design = action.payload;
    },
    resetCart: (state) => {
      state.category = "";
      state.series = "";
      state.doorType = "";
      state.assembly = "";
      state.winch = "";
      state.wfeet = "";
      state.hinch = "";
      state.hfeet = "";
      state.windcode = "";
      state.color = "";
      state.design = "";
    },
  },
});

export const {
  setCategory,
  setSeries,
  setDoorType,
  setAssembly,
  setWinch,
  setWfeet,
  setHinch,
  setHfeet,
  setWindCode,
  setColor,
  setDesign,
  resetCart,
} = cartSlice.actions;
export default cartSlice.reducer;
