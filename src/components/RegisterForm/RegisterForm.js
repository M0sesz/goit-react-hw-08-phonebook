import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/authOperations';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <StyledLabel>
        Username
        <StyledInput type="text" name="name" />
      </StyledLabel>
      <StyledLabel>
        Email
        <StyledInput type="email" name="email" />
      </StyledLabel>
      <StyledLabel>
        Password
        <StyledInput type="password" name="password" />
      </StyledLabel>
      <StyledButton type="submit">Register</StyledButton>
    </StyledForm>
  );
};
