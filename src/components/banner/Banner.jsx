import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
import './Banner.css'

const Banner = () => {
  return (
    <section
      className="banner"
    >
      <LeftBanner />
     <RightBanner />
    </section>
  );
}

export default Banner