import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  // addContact(state, action) {
  //   state.items.push(action.payload);
  // },
  // removeContact(state, action) {
  //   return {
  //     items: state.items.filter(contact => contact.id !== action.payload),
  //   };
  // },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  contactsSlice.actions;
