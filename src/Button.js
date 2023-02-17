import React from 'react'
import { useState } from 'react'
import Modal from './Modal'

const Button = () => {
    const [isOpen, setIsOpen] = useState(false)

    function handleOpenModal (){
        setIsOpen(true)
    }

    function handleCloseModal() {
        setIsOpen(false)
    }

  return (
    <div>
      <button type="submit" onClick={handleOpenModal} className="btn">
        Connect wallet
      </button>
      <Modal isOpen={isOpen} onClose={handleCloseModal}/>
    </div>
  )
}

export default Button