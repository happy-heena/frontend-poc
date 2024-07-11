import { Link } from 'react-router-dom';
import { MAIN_MENU } from '@constants/path';

function NavBar() {
  return (
    <nav>
      <ul className="gnb-wrapper">
        {MAIN_MENU.map((menu) => (
          <li key={menu.id} className="gnb-box">
            <Link to={menu.path} className={`gnb-item ${menu.status}`}>
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default NavBar;
