import React from 'react'
import location from './location.png'

const Location = () => {
  return (
    <article className="location">
      <nav>
        <ul>
          <li>Resturant</li>
          <li>Cottage</li>
          <li>Castle</li>
          <li>Fantast city</li>
          <li>Beach</li>
          <li>Carbins</li>
          <li>Off-grid</li>
          <li>Farm</li>
        </ul>
        <div>
          <img src={location} alt="" />
        </div>
      </nav>
    </article>
  )
}

export default Location
