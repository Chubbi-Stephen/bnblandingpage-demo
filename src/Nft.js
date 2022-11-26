import React from 'react'
import NftImg from './Frame 59546.png'

const Nft = () => {
  return (
    <article className="nft">
      <section className="nft-info">
        <div>
          <h2>Metabnb NFTs</h2>
          <p>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <button type="button">Learn More</button>
        </div>
      </section>
      <section className="nft-img">
        <img src={NftImg} alt="" />
      </section>
    </article>
  )
}

export default Nft
