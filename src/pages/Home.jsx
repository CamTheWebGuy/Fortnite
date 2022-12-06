import React, { Fragment } from 'react';
import video from '../assets/bg.mp4';
import Header from '../components/Header';

import chapter4 from '../assets/chapter4.png';
import promo1 from '../assets/overview.jpeg';
import featured1 from '../assets/featured1.png';
import featured2 from '../assets/featured2.png';

export default function Home() {
  return (
    <Fragment>
      <Header />

      <video className='video-hero h-screen' autoPlay muted loop>
        <source src={video} type='video/mp4' />
      </video>
      <img
        className='w-2/4 md:w-1/3 mx-auto pt-20 md:pt-48 lg:pt-56'
        src={chapter4}
        alt='Fortnite Chapter 4'
      />
      <div className='hero-cta text-center mt-5'>
        <button className='fn-btn'>Watch Trailer</button>
      </div>

      <main className='main-content'>
        <section className='featured px-5 flex flex-wrap'>
          <div className='w-full lg:w-3/6 flex flex-wrap mt-clear md:mt-fc featured-card'>
            <img
              className='w-full md:w-3/6 mh-280 md:max-h-fit fc-image'
              src={featured1}
              alt='Fortnite Promo'
            />
            <div className='w-full md:w-3/6 p-5 text-white'>
              <h3 className='font-bold text-3xl lucky-font'>
                The New Island's Your Domain
              </h3>
              <p className='text-sm pt-1'>
                In the fourth chapter of fortnite's battle royale, go forth in a
                new realm and get around in new ways — ride a dirt bike, roll in
                a snowball, launch yourself with the shockwave hammer, and
                hurdle over obstacles.
              </p>
              <button className='fn-btn'>Learn More</button>
            </div>
          </div>

          <div className='w-full lg:w-3/6 mt-clear md:mt-fc flex flex-wrap featured-card'>
            <img
              className='w-full md:w-3/6 mh-280 md:max-h-fit fc-image'
              src={featured2}
              alt='Fortnite Promo'
            />
            <div className='w-full md:w-3/6 p-5 text-white'>
              <h3 className='font-bold text-3xl lucky-font'>
                Take The Offensive In Fortnite Zero Build
              </h3>
              <p className='text-sm pt-1'>
                Zero build is a tactical take on fortnite battle royale. Show
                off your sharp shooting, sharp thinking, and sharp sense of
                space as you take on the battle full-tilt!
              </p>
              <button className='fn-btn'>Learn More</button>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
}
