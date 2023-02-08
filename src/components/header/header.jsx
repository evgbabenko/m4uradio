import React from 'react';
import Soon from '../soon/soon'
import './header.css';
import $ from 'jquery'
import Schedule from '../schedule/schedule';

function Header() {
  $(() => {
    $(window).scrollTop(0);
  })
  return (
    <header>
      <section className='header-section'>
        <div className='header-text'>
          <Soon />
        </div>
        <div className='slogan'>
        Founded in Ukraine, broadcasts all over the world
        </div>
      </section>
      <section className='today-on-air'>
        <Schedule page='main' />
      </section>
    </header>
  )
}

export default Header