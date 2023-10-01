import React from 'react';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../hooks/useAuth';
import { StyledHeader, StyledNav } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <StyledHeader>
      <div></div>
      <StyledNav>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        {!isLoggedIn && <></>}
      </StyledNav>
    </StyledHeader>
  );
};
