import React from 'react';
import { useSelector } from 'react-redux';
import DrawerHeader from './DrawerHeader';
import DrawerContent from './DrawerContent';

function Drawer() {
  const { isDrawerOpen } = useSelector(({ common }) => ({
    isDrawerOpen: common.isDrawerOpen,
  }));

  return (
    <nav className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
      <DrawerHeader />
      <DrawerContent />
    </nav>
  );
}

export default Drawer;
