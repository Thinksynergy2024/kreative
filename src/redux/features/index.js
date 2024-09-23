import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  tests: [],
};

const TestSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setTests: (state, action) => {
      state.tests = action.payload;
    },
  },
});

export const {
  setTests
} = TestSlice.actions;






export default TestSlice.reducer;
