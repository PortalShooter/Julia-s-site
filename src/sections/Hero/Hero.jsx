import React from "react";
import heroImage from '../../assets/images/hero.jpg'
import './Hero.scss'

const Hero = () => {
  return (
    <section
      className={'hero'}
      style={{
        backgroundImage: `url(${heroImage})`
      }}
    >
      <h1 className={'hero__title'}>Портфолио</h1>
      <span className={'hero__name'}>Кутернега Юлии</span>
    </section>
  )
}

export default Hero