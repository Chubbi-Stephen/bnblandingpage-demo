import React from 'react'
import { useState } from 'react'
import Head from './Head'
import Hero from './Hero'
import Adventure from './Adventure'
import Nft from './Nft'
import Footer from './Footer'
import Modal from './Modal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <header>
        <Head onClick={() => setIsModalOpen(true)} />
        <Hero />
        <Adventure />
        <Nft />
        <Footer />
        <Modal
          modalOpen={isModalOpen}
          modalClose={() => setIsModalOpen(false)}
        ></Modal>
      </header>
    </>
  )
}

export default App
