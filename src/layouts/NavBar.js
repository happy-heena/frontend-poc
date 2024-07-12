import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MAIN_MENU } from '@constants/path';

function NavBar(props) {
  const { onMouseEnter, onMouseLeave } = props;

  return (
    <nav onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <ul className="gnb-wrapper">
        {MAIN_MENU.map((menu) => (
          <li key={menu.id} className="gnb-item">
            <Link to={menu.path} className={`gnb-link ${menu.status}`}>
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default NavBar;
