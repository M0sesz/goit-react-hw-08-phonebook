import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  h2 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input[type='text'] {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  .error {
    color: red;
    font-size: 14px;
  }

  button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
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
