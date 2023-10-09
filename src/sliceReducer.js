import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const valueSlice = createSlice({
  name: 'valueSlice',
  initialState,
  reducers: {
    addValue: (state, action) => {
      state.value += action.payload.value;
    },
    subtractValue: (state, action) => {
      state.value -= action.payload.value;
  }
}

});

export const { addValue, subtractValue } = valueSlice.actions;
export const selectValue = (state) => state.valueState.value;
export default valueSlice.reducer;
