import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from 'services/api';

export const getContactsThunk = createAsyncThunk(
  'contacts/getAllContacts',
  async (_, thunkApi) => {
    try {
      const data = await getContacts();
      console.log(data);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      const data = await deleteContact(id);
      return data.id;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkApi) => {
    try {
      const data = await addContact(contact);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
