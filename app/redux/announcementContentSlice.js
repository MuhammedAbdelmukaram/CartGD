// announcementContentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAnnouncementContentEnabled: true,
  position: 'top',
  timeValue: '',
  announcementFontSize:'',
  announcementFontWeight:true,
  timeLeftFontSize: 15,
  timeLeftFontWeight: true,
  announcementText: 'Buy one, Get one FREE! Limited Time Only!!!',
  backgroundColor: '#e7e7e7',
  borderColor: '#fffff3',
  timeLeftColor:'#000000'
};

export const announcementContentSlice = createSlice({
  name: 'announcementContent',
  initialState,
  reducers: {
    toggleAnnouncementContent: (state, action) => {
      state.isAnnouncementContentEnabled = action.payload;
    },
    setPosition: (state, action) => {
      state.position = action.payload;
    },
    setAnnouncementFontSize: (state, action) => {
      state.announcementFontSize = action.payload;
    },
    setAnnouncementFontWeight: (state, action) => {
      state.announcementFontWeight = action.payload;
    },
    setTimeLeftFontSize: (state, action) => {
      state.timeLeftFontSize = action.payload;
    },
    setTimeLeftFontWeight: (state, action) => {
      state.timeLeftFontWeight = action.payload;
    },
    setTimeValue: (state, action) => {
      state.timeValue = action.payload;
    },
    setAnnouncementText: (state, action) => {
      state.announcementText = action.payload;
    },
    setBackgroundColor: (state, action) => {
      state.backgroundColor = action.payload;
    },
    setBorderColor: (state, action) => {
      state.borderColor = action.payload;
    },
    setTimeLeftColor: (state, action) => {
      state.timeLeftColor = action.payload;
    }
  },
});

export const {
  toggleAnnouncementContent,
  setPosition,
  setTimeValue,
  setAnnouncementFontSize,
  setAnnouncementText,
  setTimeLeftFontSize,
  setTimeLeftFontWeight,
  setAnnouncementFontWeight,
  setBackgroundColor,
  setBorderColor,
  setTimeLeftColor
} = announcementContentSlice.actions;

export default announcementContentSlice.reducer;
