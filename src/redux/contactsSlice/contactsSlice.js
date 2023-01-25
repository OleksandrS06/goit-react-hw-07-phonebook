import { createSlice } from '@reduxjs/toolkit';
import {
  deleteContactThunk,
  getContactsThunk,
  addContactThunk,
} from 'redux/operations/contactThunk';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState,

  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(getContactsThunk.rejected, (state, action) => {
        state.error = action.payload;
      })
      //delete
      .addCase(deleteContactThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload
        );
      })
      .addCase(deleteContactThunk.rejected, (state, action) => {
        state.error = action.payload;
      })
      //add contact
      .addCase(addContactThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = [...state.contacts, action.payload];
      })
      .addCase(addContactThunk.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

// Генератори екшенів(інструкцій)
export const { addContact, deleteContact } = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;

export const getContactsValue = state => state.contacts.contacts;
export const getIsLoadingValue = state => state.contacts.isLoading;
export const getErrorValue = state => state.contacts.error;
