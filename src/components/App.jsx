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

    if (localStorContacts) {
      const parseContacts = JSON.parse(localStorContacts);
      if (parseContacts.length > 0) return parseContacts;
    }
    return [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  });
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
