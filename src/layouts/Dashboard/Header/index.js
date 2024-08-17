import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openDrawer } from '@modules/common';

function Header() {
  const dispatch = useDispatch();
  const { isDrawerOpen } = useSelector(({ common }) => ({
    isDrawerOpen: common.isDrawerOpen,
  }));

  const onClickMenu = () => {
    dispatch(openDrawer());
  };

  return (
    <header className={`header ${isDrawerOpen ? 'open' : ''}`}>
      <div className="header-left">
        <button type="button" onClick={onClickMenu}>
          menu
        </button>
        <input placeholder="검색" />
      </div>
      <div className="header-right">
        <button type="button">알림</button>
        <button type="button">프로필</button>
      </div>
    </header>
  );
}

export default Header;
