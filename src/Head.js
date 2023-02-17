import React from 'react'
import logo from './logopng.png'
import { Link } from 'react-router-dom'
import Button from './Button'
// import ReactDom from 'react-dom'
// import { useState } from 'react'
// import wallet from './wallet.png'
// import Modal from './Modal'


const Head = () => {
  return (
    <>
      {/* Figure out how to add the source attribute man! */}

      <header className="head">
        <nav className="nav">
          <img src={logo} alt="logo-illustration" className="logo" />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              {' '}
              <Link to="/places">Place to stay</Link>
            </li>
            <li>
              <Link>NFT's</Link>
            </li>
            <li>
              <Link>Community</Link>
            </li>
          </ul>
          <Button/>
        </nav>
      </header>
    </>
  )
}

export default Head
