import React from 'react'
import logo from './logopng.png'
import { Link } from 'react-router-dom'
// import ReactDom from 'react-dom'
// import { useState } from 'react'
// import wallet from './wallet.png'
// import Modal from './Modal'

// const OverlayStyles = {
//   top: 0,
//   right: 0,
//   bottom: 0,
//   left: 0,
//   position: 'fixed',
//   background: 'rgba(0, 0, 0, 0.76)',
//   zindex: 1000,
// }

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
          <button type="submit" className="btn">
            Connect wallet
          </button>
        </nav>
      </header>
    </>
  )
}

// const Modal = () => {
//   const [isOpen, setIsOpen] = useState(true)
//   if (isOpen === true) return null
//   return ReactDom.createPortal(
//     <>
//       <div style={OverlayStyles} />
//       <article className="modal-container">
//         <section>
//           <img src={wallet} alt="" />
//         </section>
//       </article>
//     </>,
//     document.getElementById('portal')
//   )
// }

export default Head
