import React from 'react'
import ReactDom from 'react-dom'
import { useState } from 'react'
import wallet from './wallet.png'

const OverlayStyles = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  position: 'fixed',
  background: 'rgba(0, 0, 0, 0.76)',
  zindex: 1000,
}

const Modal = () => {
  const [isOpen, setIsOpen] = useState(true)
  // if (isOpen === true) return null
  return ReactDom.createPortal(
    <>
      <div style={OverlayStyles} />
      <article className="modal-container">
        <section>
          <img src={wallet} alt="" />
        </section>
      </article>
    </>,
    document.getElementById('portal')
  )
}

export default Modal
