import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledAuthNav = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 16px;
  padding: 8px;
  transition: color 0.3s;

  &:hover {
    color: #ffc107;
  }

  &.active {
    color: #ffc107;
  }
`;
