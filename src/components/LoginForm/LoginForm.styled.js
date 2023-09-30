import styled from 'styled-components';

export const StyledForm = styled.form`
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  box-sizing: border-box;
`;

export const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;
