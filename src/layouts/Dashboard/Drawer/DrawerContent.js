import React from 'react';
import { Link } from 'react-router-dom';

function DrawerContent() {
  return (
    <div className="drawer-content">
      <ul>
        <div>Navigation</div>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
      </ul>
      <ul>
        <div>Authentication</div>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>Regitser</li>
      </ul>
      <ul>
        <div>Utilties</div>
        <li>Typography</li>
        <li>Color</li>
        <li>Shadow</li>
      </ul>
    </div>
  );
}

export default DrawerContent;
