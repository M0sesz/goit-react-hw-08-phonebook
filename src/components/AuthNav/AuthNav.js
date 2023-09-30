import React from 'react';
import { StyledAuthNav, StyledNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <StyledAuthNav>
      <StyledNavLink to="/register" activeClassName="active">
        Register
      </StyledNavLink>
      <StyledNavLink to="/login" activeClassName="active">
        Log In
      </StyledNavLink>
    </StyledAuthNav>
  );
};
