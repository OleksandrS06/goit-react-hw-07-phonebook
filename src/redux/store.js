import { configureStore } from '@reduxjs/toolkit';

import { filterReducer } from './filterSlice/filterSlice';
import { contactsReducer } from './contactsSlice/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
