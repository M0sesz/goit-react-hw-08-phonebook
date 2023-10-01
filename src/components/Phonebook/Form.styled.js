import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const FormContainer = styled.div`
  max-width: 350px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const ToastContainerStyled = styled(ToastContainer)`
  .Toastify__toast {
    background: #e74c3c;
    color: white;
  }
`;

export const FilterContainer = styled.div`
  margin-bottom: 20px;

  label {
    font-weight: bold;
    margin-right: 10px;
  }

  input[type='text'] {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
`;

export const ContactListContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

export const ContactName = styled.span`
  font-weight: bold;
`;

export const DeleteButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
`;
