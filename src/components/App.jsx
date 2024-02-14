import { SearchBox } from './SearchBox/SearchBox';
import { ContactList } from './ContactList/ContactList';
import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { showWarning } from '../js/message';
import { Notification } from './Notification/Notification';
import { Title } from './Title/Title';

function App() {
  const [contacts, setContacts] = useState(() => {
    const localStorContacts = localStorage.getItem('contacts');
    return localStorContacts ? JSON.parse(localStorContacts) : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = values => {
    const contact = { id: nanoid(), ...values };
    const normalizedName = values.name.toLowerCase();

    if (
      contacts.find(contact => contact.name.toLowerCase() === normalizedName)
    ) {
      return showWarning(values.name);
    }

    setContacts([contact, ...contacts]);
  };

  const filterContacts = event => {
    setFilter(event.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId)
    );
  };
  const filteredContacts = getFilteredContacts();
  return (
    <>
      <Title />
      <ContactForm onSubmit={addContact} />
      <SearchBox value={filter} onChange={filterContacts} />
      {contacts.length > 0 ? (
        <ContactList
          contactsArr={filteredContacts}
          deleteContact={deleteContact}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
