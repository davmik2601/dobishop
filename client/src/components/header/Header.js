import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../images/dobby8.png';

const Header = () => {
  return (
    <div className="header">
      <nav className='navbar'>
        <Link to="/" className="logo">
          <img src={logoImage} alt="" className='rounded-circle' />
          <h4 className="navbar-brand text-uppercase">DobbyShop</h4>
        </Link>
      </nav>
    </div>
  )
}

export default Header;
