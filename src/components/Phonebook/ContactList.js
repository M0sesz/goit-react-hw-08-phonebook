import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../store/contactsSlice';
import {
  ContactListContainer,
  ContactItem,
  ContactName,
  DeleteButton,
} from './Form.styled';

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

  const handleDeleteContact = async contactId => {
    try {
      await dispatch(deleteContact(contactId));
      dispatch(fetchContacts());
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <ContactListContainer>
      <ul>
        {filteredContacts.map(contact => (
          <ContactItem key={contact.id}>
            <ContactName>
              {contact.name} - {contact.number}
            </ContactName>
            <DeleteButton onClick={() => handleDeleteContact(contact.id)}>
              Delete
            </DeleteButton>
          </ContactItem>
        ))}
      </ul>
    </ContactListContainer>
  );
};
export default ContactList;
