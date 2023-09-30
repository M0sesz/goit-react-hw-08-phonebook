import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../store/contactsSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [contact, setContact] = useState({ name: '', phone: '' });
  const contacts = useSelector(state => state.contacts.items);

  const handleChange = e => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!contact.name.trim() || !contact.phone.trim()) {
      toast.error('Please fill in all fields.');
      return;
    }

    if (!/^[a-zA-Z]+$/.test(contact.name)) {
      toast.error('Name can only contain letters.');
      return;
    }

    const isNameUnique = contacts.some(
      existingContact => existingContact.name === contact.name
    );

    if (!/^\d+$/.test(contact.phone)) {
      toast.error('Phone can only contain digits.');
      return;
    }

    if (isNameUnique) {
      toast.error('This name is already in your contacts.');
      return;
    }

    dispatch(addContact(contact))
      .then(() => {
        setContact({ name: '', phone: '' });
      })
      .catch(err => {
        toast.error(`Error: ${err.message}`);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone:
        <input
          type="text"
          name="phone"
          value={contact.phone}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Contact</button>
      <ToastContainer />{' '}
    </form>
  );
};

export default ContactForm;
