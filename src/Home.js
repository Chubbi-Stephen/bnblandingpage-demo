import React from 'react'
import Hero from './Hero'
import Adventure from './Adventure'
import Nft from './Nft'
import Footer from './Footer'
import Modal from './Modal'

function Home() {
  return (
    <>
      <header>
        <Hero />
        <Adventure />
        <Nft />
        <Footer />
        <Modal />
      </header>
    </>
  )
}

export default Home
