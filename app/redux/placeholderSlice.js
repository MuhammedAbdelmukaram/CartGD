import { createSlice } from '@reduxjs/toolkit';

export const placeholderSlice = createSlice({
  name: 'placeholder',
  initialState: {
    selected: "Design",
  },
  reducers: {
    selectPlaceholder: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { selectPlaceholder } = placeholderSlice.actions;
export default placeholderSlice.reducer;
