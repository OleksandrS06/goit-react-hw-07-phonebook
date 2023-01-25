import { useDispatch, useSelector } from 'react-redux';
import css from './ContactsList.module.css';
import { getContactsValue } from 'redux/contactsSlice/contactsSlice';
import { getFilterValue } from 'redux/filterSlice/filterSlice';
import { deleteContactThunk } from 'redux/operations/contactThunk';

const ContactsList = () => {
  const dispatch = useDispatch();

  let contacts = useSelector(getContactsValue);
  let filter = useSelector(getFilterValue);

  const deleteBtHandler = id => {
    dispatch(deleteContactThunk(id));
  };

  const filteredContacts = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };
  const filtered = filteredContacts();

  return (
    <ul className={css.contactList}>
      {filtered.map(el => {
        return (
          <li key={el.id} className={css.contactList__item}>
            <span>{el.name}</span>
            <span className={css.number}>{el.number}</span>
            <button onClick={() => deleteBtHandler(el.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactsList;
