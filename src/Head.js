import React from 'react'
import logo from './logopng.png'
// import { useState } from 'react'

const Head = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      {/* Figure out how to add the source attribute man! */}

      <header className="head">
        <nav className="nav">
          <img src={logo} alt="logo-illustration" className="logo" />
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Place to stay</a>
            </li>
            <li>
              <a href="#">NFT's</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
          <button
            // type="submit"
            className="btn"
          >
            Connect wallet
          </button>
        </nav>
      </header>
    </>
  )
}

export default Head
