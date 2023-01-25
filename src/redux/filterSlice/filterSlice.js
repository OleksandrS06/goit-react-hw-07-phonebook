import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  // Ім'я слайсу
  name: 'filter',
  // Початковий стан редюсера слайсу
  initialState: initialState,
  // Об'єкт редюсерів
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

// Генератори екшенів(інструкцій)
export const { filterContacts } = filterSlice.actions;
// Редюсер слайсу
export const filterReducer = filterSlice.reducer;

export const getFilterValue = state => state.filter.filter;
