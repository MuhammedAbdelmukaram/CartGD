import { configureStore } from '@reduxjs/toolkit';
import placeholderReducer from './placeholderSlice'; // Adjust the import path as needed
import designContentReducer from './designContentSlice';
import discountContentReducer from './discountContentSlice';
import trustBadgesContentReducer from './TrustBadgesContentSlice';
import announcementContentReducer from './announcementContentSlice';
import additionalNotesContentReducer from "./additionalNotesContentSlice";
import upsellContentSlice from "./upsellContentSlice";


export const store = configureStore({
  reducer: {
    placeholder: placeholderReducer,
    designContent: designContentReducer,
    discountContent: discountContentReducer,
    announcementContent:announcementContentReducer,
    additionalNotesContent: additionalNotesContentReducer ,
    trustBadgesContent: trustBadgesContentReducer,
    upsellContent: upsellContentSlice,
  },
});

export default store;
