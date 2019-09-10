import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = () => (
  <div className="header">
    <Link to="/" className="logo">
      Dungeon Mates
    </Link>
    <div className="options">
      <Link to="groups" className="option">
        Groups
      </Link>
    </div>
  </div>
);

export default Header;