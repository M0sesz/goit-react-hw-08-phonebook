import styled from 'styled-components';

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

export const WelcomeMessage = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const LogoutButton = styled.button`
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 8px 12px;
  margin-left: 10px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;

  &:hover {
    background-color: #2980b9;
  }
`;
