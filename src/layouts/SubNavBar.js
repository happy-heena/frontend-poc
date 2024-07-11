import { Link } from 'react-router-dom';
import { SUB_MENU } from '@constants/path';

function SubNavBar() {
  return (
    <nav>
      <ul className="lnb-wrapper">
        {SUB_MENU.map((menu) => (
          <li key={menu.id} className="lnb-item">
            <Link to={menu.path}>{menu.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SubNavBar;
