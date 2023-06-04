import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactList/ContactsList';
import { ContactFilter } from './ContactFilter/ContactFilter';

export const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactFilter />
      <ContactsList />
    </>
  );
};
