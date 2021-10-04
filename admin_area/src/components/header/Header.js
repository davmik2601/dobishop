import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logout from './Logout';

const Header = () => {

  const { auth } = useSelector(state => state);

  return (
    <div className="header">
      <nav className="navbar">
        <Link className="logo" to="/admin/dashboard">
          <h5>DobbyShop</h5>
        </Link>

        <div className="header_menu">
          { auth.token && <Logout /> }
        </div>
      </nav>
    </div>
  )
}

export default Header;
