import React from 'react';
import LogoImg from '../../../assets/images/png/logo2.png';

const Footer = () => (
  <footer className='footer'>
    <div className='footer-img'>
      <img src={LogoImg} alt='' />
    </div>
    <section className='footer-list'>
      <div>
        <h4>community</h4>
        <ul>
          <li>NFT</li>
          <li>Tokens</li>
          <li>Landlords</li>
          <li>Discord</li>
        </ul>
      </div>
      <div>
        <h4>places</h4>
        <ul>
          <li>Castle</li>
          <li>Farms</li>
          <li>Beach</li>
          <li>Learn more</li>
        </ul>
      </div>
      <div>
        <h4>About Us</h4>
        <ul>
          <li>Roadmap</li>
          <li>Creators</li>
          <li>Career</li>
          <li>Contact us</li>
        </ul>
      </div>
    </section>
  </footer>
);

export default Footer;
