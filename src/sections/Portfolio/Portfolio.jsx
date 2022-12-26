import React from "react";
import './Portfolio.scss'
import Card from "./Card/Card";

const Portfolio = () => {
  return (
    <section
      className={'portfolio'}
    >
      <h2 className={'portfolio__title'}>Мои работы</h2>
      <div className={'portfolio__cards'}>
        <Card />
      </div>
    </section>
  )
}

export default Portfolio