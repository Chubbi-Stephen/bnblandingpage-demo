import React from 'react';
import HeroImg from '../../../assets/images/png/hero.png';
import FrameImg from '../../../assets/images/png/sectionImg.png';

const Hero = () => (
  <>
    <article className='hero'>
      <section className='hero-container'>
        <main>
          <section className='main'>
            <h1>
              Rent a <span className='purple'>place</span> away from <br />{' '}
              <span className='purple'>home</span> in the{' '}
              <span className='purple'>metaverse</span>
            </h1>
          </section>
          <section className='hero-paragraph'>
            <p>
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone.
            </p>
          </section>
          <form>
            <input
              type='text'
              placeholder='search for location'
              className='hero-input'
            />
            <button type='button' className='btn hero-btn'>
              search
            </button>
          </form>
        </main>
        <div>
          <img src={HeroImg} alt='illustration' className='hero-image' />
        </div>
      </section>
    </article>
    <section className='frame'>
      <img src={FrameImg} alt='frame-illustration' />
    </section>
  </>
);

export default Hero;
