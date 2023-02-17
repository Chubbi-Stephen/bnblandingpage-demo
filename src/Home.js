import React from "react"
import Hero from "./Hero"
import Adventure from "./Adventure"
import Nft from "./Nft"
import Footer from "./Footer"
import Modal from "./Modal"
import Button from "./Button"
import { useState } from "react"

function Home() {
  const [isOpen, setIsOpen] = useState(false)

  function handleCloseModal (){
    setIsOpen(false)
  }
  return (
    <>
      <header>
        <Hero />
        <Adventure />
        <Nft />
        <Footer />
        <Modal isOpen={isOpen} onClose={handleCloseModal}/>
      </header>
    </>
  )
}

export default Home
