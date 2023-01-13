import axios from 'axios';
import {
  fetchingError,
  fetchingInProgress,
  fetchingSuccess,
} from 'redux/contactsSlice';

axios.defaults.baseURL = 'https://63c0790aa177ed68abc7828a.mockapi.io/contacts';

export const getAllContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());

    const response = await axios.get();

    dispatch(fetchingSuccess(response.data));
  } catch (error) {
    dispatch(fetchingError(error.message));
  }
};

export const addContact = newContact => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    console.log(newContact);
    const response = await axios.post('/', newContact);

    console.log(response.status);

    // dispatch(fetchingSuccess(response.status));
  } catch (error) {
    // dispatch(fetchingError(error.message));
  }
};

export const deleteContact = async id => {
  const response = await axios.delete({
    url: `/${id}`,
  });

  return response.data;
};
