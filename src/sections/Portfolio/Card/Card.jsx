import React from "react";
import './Card.scss'
import image from '../../../assets/images/test-img.jpg'

const Card = () => {
  return (
    <div
      className={'card'}
    >
      <h3 className={'card__title'}>Поло: наследие Персии в Пакистане</h3>
      <img src={image} alt="" />
      <p>Шандурские фестивали-поло настолько привлекательны для игроков и туристов, что многие из них отваживаются на пеший поход к Шандурской вершине.</p>
    </div>
  )
}

export default Card