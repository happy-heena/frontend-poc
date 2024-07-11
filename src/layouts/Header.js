import NavBar from './NavBar';
import SubNavBar from './SubNavBar';

function Header() {
  return (
    <header id="header">
      <div id="title">Frontend POC</div>
      <NavBar />
      <SubNavBar />
    </header>
  );
}

export default Header;
