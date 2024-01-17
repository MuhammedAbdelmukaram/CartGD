// discountContentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDiscountContentEnabled: true,
  discountCode: '',
  buttonName: ''
};

export const discountContentSlice = createSlice({
  name: 'discountContent',
  initialState,
  reducers: {
    toggleDiscountContent: (state, action) => {
      state.isDiscountContentEnabled = action.payload;
    },
    setDiscountCode: (state, action) => {
      state.discountCode = action.payload;
    },
    setButtonName: (state, action) => {
      state.buttonName = action.payload;
    }
  },
});

export const { toggleDiscountContent, setDiscountCode, setButtonName } = discountContentSlice.actions;

export default discountContentSlice.reducer;
