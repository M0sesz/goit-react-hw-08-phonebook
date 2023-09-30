import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';

import ContactForm from 'components/Phonebook/ContactForm';
import ContactList from 'components/Phonebook/ContactList';
import Filter from 'components/Phonebook/Filter';

import { fetchContacts } from '../store/contactsSlice';
import { Toaster } from 'react-hot-toast';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>

      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />

      <ContactList />

      <Toaster />
    </>
  );
}
