import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SUB_MENU } from '@constants/path';

function SubNavBar(props) {
  const { onMouseEnter, onMouseLeave } = props;

  return (
    <nav
      className="lnb-wrapper"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <ul>
        {SUB_MENU.map((menu) => (
          <li key={menu.id} className="lnb-item">
            <Link to={menu.path} className="lnb-link">
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

SubNavBar.propTypes = {
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default SubNavBar;
