import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  measurements: [],
  tests: [],
};

const TestSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setTests: (state, action) => {
      state.tests = action.payload;
    },
    setMeasurement: (state, action) => {
      state.measurements = action.payload;
    },
  },
});

export const {
  setTests,
  setMeasurement,
} = TestSlice.actions;






export default TestSlice.reducer;
