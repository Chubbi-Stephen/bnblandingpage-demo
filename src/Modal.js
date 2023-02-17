import React from "react"
import ReactDom from "react-dom"
import { useState } from "react"
import wallet from "./wallet.png"

const OverlayStyles = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  position: "fixed",
  background: "rgba(0, 0, 0, 0.76)",
  zindex: 1000,
}


function Modal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div style={OverlayStyles} />
      <article className="modal-container">
      <button onClick={onClose} className="btn leftBtn">Close Modal</button>
        <section>
          <img src={wallet} alt="" />
        </section>
      </article>
    </>
  )

}

export default Modal
