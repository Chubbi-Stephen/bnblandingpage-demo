import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/png/logopng.png';

const NavBar = () => (
  <header className='head'>
    <nav className='nav'>
      <img src={Logo} alt='logo-illustration' className='logo' />
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          {' '}
          <Link to='/places'>Place to stay</Link>
        </li>
        <li>
          <Link>NFT's</Link>
        </li>
        <li>
          <Link>Community</Link>
        </li>
      </ul>
      <button type='submit' className='btn'>
        Connect wallet
      </button>
    </nav>
  </header>
);

export default NavBar;
