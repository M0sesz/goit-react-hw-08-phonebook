import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../store/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name} - {contact.phone}
          <button onClick={() => handleDeleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
