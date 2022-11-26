import React from 'react'

const Modal = ({ isModalOpen, modalClose }) => {
  if (!isModalOpen) return null
  return (
    <div>
      <h2>my modal</h2>
      <button onClick={modalClose}>close modal</button>
    </div>
  )
}

export default Modal
