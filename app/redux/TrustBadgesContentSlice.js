// trustBadgesContentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isTrustBadgesEnabled: true,
  presetImage: 'Select',
  position: 'bottom',
  selectedPaymentProcessors: []
};

export const trustBadgesContentSlice = createSlice({
  name: 'trustBadgesContent',
  initialState,
  reducers: {
    toggleTrustBadges: (state, action) => {
      state.isTrustBadgesEnabled = action.payload;
    },
    setPresetImage: (state, action) => {
      state.presetImage = action.payload;
    },
    setPosition: (state, action) => {
      state.position = action.payload;
    },
    setSelectedPaymentProcessors: (state, action) => {
      state.selectedPaymentProcessors = action.payload;
    }
  },
});

export const {
  toggleTrustBadges,
  setPresetImage,
  setPosition,
  setSelectedPaymentProcessors
} = trustBadgesContentSlice.actions;

export default trustBadgesContentSlice.reducer;
