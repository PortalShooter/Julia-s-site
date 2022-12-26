import React from "react";
import './Card.scss'
import { urlFor } from "../../../client";

const Card = ({data}) => {
  const {name, description, img, link} = data 

  return (
    <div
      className={'card'}
    >
      <h3 className={'card__title'}><span>{name}</span></h3>
      <img className={'card__img'} src={urlFor(img)} alt="" />
      <p className={'card__description'}>{description}</p>
      {/* <a className={'card__link'} href={link}>Перейти к статье</a> */}
    </div>
  )
}

export default Card