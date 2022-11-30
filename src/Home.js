import React from 'react'
import Hero from './Hero'
import Adventure from './Adventure'
import Nft from './Nft'
import Footer from './Footer'

function Home() {
  return (
    <>
      <header>
        <Hero />
        <Adventure />
        <Nft />
        <Footer />
      </header>
    </>
  )
}

export default Home
