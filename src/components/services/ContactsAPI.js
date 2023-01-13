import axios from 'axios';

axios.defaults.baseURL = 'https://63c0790aa177ed68abc7828a.mockapi.io';

export const getAllContacts = async () => {
  const response = await axios.get('/contacts');

  return response.data;
};

export const addContact = async newContact => {
  const response = await axios.post({
    url: '/contacts',
    method: 'post',
    data: newContact,
  });

  return response.data;
};

export const deleteContact = async id => {
  const response = await axios.delete({
    url: `/contacts${id}`,
    method: 'delete',
  });

  return response.data;
};
