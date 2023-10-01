import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../store/contactsSlice';
import { toast } from 'react-toastify';
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
  const [contact, setContact] = useState({ name: '', number: '' });
  const contacts = useSelector(state => state.contacts.items);

  const handleChange = e => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!contact.name.trim() || !contact.number.trim()) {
      toast.error('Please fill in all fields.');
      return;
    }

    const isNameUnique = contacts.some(
      existingContact => existingContact.name === contact.name
    );

    if (!/^\d+$/.test(contact.number)) {
      toast.error('Number can only contain digits.');
      return;
    }

    if (isNameUnique) {
      toast.error('This name is already in your contacts.');
      return;
    }

    dispatch(addContact(contact))
      .then(() => {
        setContact({ name: '', number: '' });
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
          Number:
          <Input
            type="text"
            name="number"
            value={contact.number}
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
