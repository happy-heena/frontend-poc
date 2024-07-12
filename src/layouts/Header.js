import { useState } from 'react';
import NavBar from './NavBar';
import SubNavBar from './SubNavBar';

function Header() {
  const [showSubNavBar, setShowSubNavBar] = useState(false);

  const onMouseEnter = () => {
    setShowSubNavBar(true);
  };

  const onMouseLeave = () => {
    setShowSubNavBar(false);
  };

  return (
    <header id="header">
      <div id="title">Frontend POC</div>
      <NavBar onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
      {showSubNavBar && (
        <SubNavBar onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
      )}
    </header>
  );
}

export default Header;
