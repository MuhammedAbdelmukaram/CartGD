// designContentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {

  strikethroughPricesChecked: true,
  inheritFontsChecked: false,
  backgroundColor: '#ffffff',
  cartAccentColor: '#f6f6f6',
  buttonColor: '#0a0a0a',
  buttonTextColor: '#ffffff',
  buttonTextHoverColor: '#2d2d2d',
  cartTextColor: '#000000',
  cartType:'drawer'
};

export const designContentSlice = createSlice({
  name: 'designContent',
  initialState,
  reducers: {

    setStrikethroughPricesChecked: (state, action) => {
      state.strikethroughPricesChecked = action.payload;
    },
    setInheritFontsChecked: (state, action) => {
      state.inheritFontsChecked = action.payload;
    },
    setBackgroundColor: (state, action) => {
      state.backgroundColor = action.payload;
    },
    setCartAccentColor: (state, action) => {
      state.cartAccentColor = action.payload;
    },
    setButtonColor: (state, action) => {
      state.buttonColor = action.payload;
    },
    setButtonTextColor: (state, action) => {
      state.buttonTextColor = action.payload;
    },
    setButtonTextHoverColor: (state, action) => {
      state.buttonTextHoverColor = action.payload;
    },
    setCartTextColor: (state, action) => {
      state.cartTextColor = action.payload;
    },
    setCartType: (state, action) => {
      state.cartType = action.payload;
    },
  },
});

export const {
  setStrikethroughPricesChecked,
  setInheritFontsChecked,
  setBackgroundColor,
  setCartAccentColor,
  setButtonColor,
  setButtonTextColor,
  setButtonTextHoverColor,
  setCartTextColor,
  setCartType
} = designContentSlice.actions;

export default designContentSlice.reducer;
