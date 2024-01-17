// additionalNotesContentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAdditionalContentEnabled: true,
  notesTitle: 'Add special instruction here...',
  notesPlaceholder: 'Ring on the doorbell 3 times',
  selectedPosition: 'bottom'
};

export const additionalNotesContentSlice = createSlice({
  name: 'additionalNotesContent',
  initialState,
  reducers: {
    toggleAdditionalContent: (state, action) => {
      state.isAdditionalContentEnabled = action.payload;
    },
    setNotesTitle: (state, action) => {
      state.notesTitle = action.payload;
    },
    setNotesPlaceholder: (state, action) => {
      state.notesPlaceholder = action.payload;
    },
    setSelectedPosition: (state, action) => {
      state.selectedPosition = action.payload;
    }
  },
});

export const {
  toggleAdditionalContent,
  setNotesTitle,
  setNotesPlaceholder,
  setSelectedPosition
} = additionalNotesContentSlice.actions;

export default additionalNotesContentSlice.reducer;
