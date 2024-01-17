import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isUpsellEnabled: true,
  upsellMethod: 'AI',
  checkbox1Checked: false, // New state for first checkbox
  checkbox2Checked: false, // New state for second checkbox
  upsellTitle: '',
  rangeValue: 1,
  selectedType: 'block',
  selectedPosition: 'bottom',
  notesPlaceholder: '',
  textFieldValue: '', // New state for text field
};

export const upsellContentSlice = createSlice({
  name: 'upsellContent',
  initialState,
  reducers: {
    toggleUpsell: (state, action) => {
      state.isUpsellEnabled = action.payload;
    },
    setUpsellTitle: (state, action) => {
      state.upsellTitle = action.payload;
    },
    setNotesPlaceholder: (state, action) => {
      state.notesPlaceholder = action.payload;
    },
    setSelectedType: (state, action) => {
      state.selectedType = action.payload;
    },
    setRangeValue: (state, action) => {
      state.rangeValue = action.payload;
    },
    setSelectedPosition: (state, action) => {
      state.selectedPosition = action.payload;
    },
    setUpsellMethod: (state, action) => {
      state.upsellMethod = action.payload;
    },
    setCheckbox1Checked: (state, action) => { // Reducer for first checkbox
      state.checkbox1Checked = action.payload;
    },
    setCheckbox2Checked: (state, action) => { // Reducer for second checkbox
      state.checkbox2Checked = action.payload;
    },
    setTextFieldValue: (state, action) => { // Reducer for text field
      state.textFieldValue = action.payload;
    }
  },
});

export const {
  toggleUpsell,
  setUpsellTitle,
  setNotesPlaceholder,
  setSelectedType,
  setRangeValue,
  setSelectedPosition,
  setUpsellMethod,
  setCheckbox1Checked,
  setCheckbox2Checked,
  setTextFieldValue
} = upsellContentSlice.actions;

export default upsellContentSlice.reducer;
