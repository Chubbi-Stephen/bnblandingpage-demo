import React from 'react'
import card1 from './card-1.png'
import card2 from './card-2.png'
import card3 from './card-3.png'
import card4 from './card-4.png'
import card5 from './card-5.png'
import card6 from './card-6.png'
import card7 from './card-7.png'
import card8 from './card-8.png'
import star from './stars.png'

const Adventure = () => {
  return (
    <>
      <article className="card">
        <h2>Inspiration for your next adventure</h2>
        <section className="cards">
          <div className="card-info">
            <img src={card1} alt="" />
            <div className="top-card-descr">
              <span>Desert king</span>
              <span className="span-bold">1MBT per night</span>
            </div>
            <div className="top-card-descr">
              <span>2345km </span>
              <span> available for two weeks to stay</span>
            </div>
            <img src={star} alt="" className="star" />
          </div>

          <div className="card-info">
            <img src={card2} alt="" />
            <div className="top-card-descr">
              <span>Desert king</span>
              <span className="span-bold">1MBT per night</span>
            </div>
            <div className="top-card-descr">
              <span>2345km </span>
              <span>available for two weeks to stay</span>
            </div>
            <img src={star} alt="" className="star" />
          </div>

          <div className="card-info">
            <img src={card3} alt="" />
            <div className="top-card-descr">
              <span>Desert king</span>
              <span className="span-bold">1MBT per night</span>
            </div>
            <div className="top-card-descr">
              <span>2345km </span>
              <span>available for two weeks to stay</span>
            </div>
            <img src={star} alt="" className="star" />
          </div>

          <div className="card-info">
            <img src={card4} alt="" />
            <div className="top-card-descr">
              <span>Desert king</span>
              <span className="span-bold">1MBT per night</span>
            </div>
            <div className="top-card-descr">
              <span>2345km </span>
              <span>available for two weeks to stay</span>
            </div>
            <img src={star} alt="" className="star" />
          </div>

          <div className="card-info">
            <img src={card5} alt="" />
            <div className="top-card-descr">
              <span>Desert king</span>
              <span className="span-bold">1MBT per night</span>
            </div>
            <div className="top-card-descr">
              <span>2345km </span>
              <span>available for two weeks to stay</span>
            </div>
            <img src={star} alt="" className="star" />
          </div>

          <div className="card-info">
            <img src={card6} alt="" />
            <div className="top-card-descr">
              <span>Desert king</span>
              <span className="span-bold">1MBT per night</span>
            </div>
            <div className="top-card-descr">
              <span>2345km </span>
              <span>available for two weeks to stay</span>
            </div>
            <img src={star} alt="" className="star" />
          </div>

          <div className="card-info">
            <img src={card7} alt="" />
            <div className="top-card-descr">
              <span>Desert king</span>
              <span className="span-bold">1MBT per night</span>
            </div>
            <div className="top-card-descr">
              <span>2345km </span>
              <span>available for two weeks to stay</span>
            </div>
            <img src={star} alt="" className="star" />
          </div>

          <div className="card-info">
            <img src={card8} alt="" />
            <div className="top-card-descr">
              <span>Desert king</span>
              <span className="span-bold">1MBT per night</span>
            </div>
            <div className="top-card-descr">
              <span>2345km </span>
              <span>available for two weeks to stay</span>
            </div>
            <img src={star} alt="" className="star" />
          </div>
        </section>
      </article>
    </>
  )
}

export default Adventure
