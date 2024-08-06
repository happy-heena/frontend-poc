import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '@components/common/Header';
import { logout } from '@modules/user';

function HeaderContainer() {
  const { user } = useSelector(({ user: _user }) => ({ user: _user.user }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return user ? (
    <Header username={user.username} onLogout={onLogout} />
  ) : (
    <Header />
  );
}

export default HeaderContainer;
