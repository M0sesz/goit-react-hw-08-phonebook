import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../store/contactsSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FormContainer,
  Label,
  Input,
  Button,
  ToastContainerStyled,
} from './Form.styled';

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
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Label>
          Name:
          <Input
            type="text"
            name="name"
            value={contact.name}
            onChange={handleChange}
          />
        </Label>
        <Label>
          Phone:
          <Input
            type="text"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
          />
        </Label>
        <Button type="submit">Add Contact</Button>
      </form>
      <ToastContainerStyled />
    </FormContainer>
  );
};

export default ContactForm;
