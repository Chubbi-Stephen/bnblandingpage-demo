import React from 'react'
import { useState } from 'react'

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false)
  if (!isOpen) return null
  return (
    <div>
      <h2>my modal</h2>
      {/* <button onClick={modalClose}>close modal</button> */}
    </div>
  )
}

export default Modal
