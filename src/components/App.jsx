import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Form from './ContactAddForm/ContactAddForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter';
import {
  getContactsValue,
  getErrorValue,
  getIsLoadingValue,
} from 'redux/contactsSlice/contactsSlice';
import { getContactsThunk } from 'redux/operations/contactThunk';
import Loader from './Loader/Loader';

const App = () => {
  let contacts = useSelector(getContactsValue);
  let isLoading = useSelector(getIsLoadingValue);
  let error = useSelector(getErrorValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <h1 className="heading">Phonebook</h1>
      <Form />
      {contacts.length > 0 ? (
        <>
          <h2>Find Contacts</h2>
          <Filter />
          <ContactsList />
        </>
      ) : (
        <p>There are no any contacts at the moment</p>
      )}
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
    </div>
  );
};

export default App;
