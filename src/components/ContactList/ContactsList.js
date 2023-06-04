import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/createSlice';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactsList = () => {
  const dispach = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filterList = () => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <ul className={css.Contacts}>
      {filterList().map(contact => {
        return (
          <li key={contact.id} className={css.ContactsList}>
            <p className={css.ContactsInitials}>
              {contact.name}: {contact.number}
            </p>
            <button
              className={css.ContactsButton}
              onClick={() => dispach(deleteContact(contact.id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
