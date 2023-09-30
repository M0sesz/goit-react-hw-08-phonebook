// AppBar.styled.js

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  background-color: #333;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 10px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 16px;
  padding: 8px;
  transition: color 0.3s;

  &:hover {
    color: #ffc107;
  }
`;

export const StyledButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 15px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;

export const StyledNavigation = styled.nav`
  display: flex;
  gap: 20px;
`;
