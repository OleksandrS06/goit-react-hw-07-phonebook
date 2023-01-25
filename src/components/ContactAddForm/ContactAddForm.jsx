import React from 'react';
import { useState } from 'react';
import { getContactsValue } from 'redux/contactsSlice/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

import css from './ContactAddForm.module.css';
import { addContactThunk } from 'redux/operations/contactThunk';

const Form = () => {
  let contacts = useSelector(getContactsValue);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        return;

      case 'number':
        setNumber(value);
        return;
      default:
        return;
    }
  };

  const dispatch = useDispatch();

  const handleFormSubmit = e => {
    e.preventDefault();
    const nameDuplicationCheck = contacts.find(contact => {
      return contact.name === name;
    });
    const numberDuplicationCheck = contacts.find(contact => {
      return contact.number === number;
    });
    if (nameDuplicationCheck) {
      alert(`Name ${name} is already exist`);
      return;
    } else if (numberDuplicationCheck) {
      alert(`Telephone number ${number} is already exist`);
      return;
    }
    dispatch(addContactThunk({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleFormSubmit} className={css.submitForm}>
      <label htmlFor="">
        <input
          value={name}
          onChange={handleInputChange}
          type="text"
          name="name"
          className={css.nameInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="">
        <input
          value={number}
          onChange={handleInputChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit" className={css.submitForm__btn}>
        add contact
      </button>
    </form>
  );
};

export default Form;
