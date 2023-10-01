import { useDispatch } from 'react-redux';
import { logOut } from '../redux/auth/authOperations';
import { useAuth } from '../hooks/useAuth';
import {
  UserMenuContainer,
  WelcomeMessage,
  LogoutButton,
} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuContainer>
      <WelcomeMessage>Welcome, {user.name}</WelcomeMessage>
      <LogoutButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogoutButton>
    </UserMenuContainer>
  );
};
