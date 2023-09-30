import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  display: flex;
  gap: 20px;

  a {
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
  }
`;
