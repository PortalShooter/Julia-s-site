import React from "react";
import './Card.scss'
import { urlFor } from "../../../client";

const Card = ({data}) => {
  const {name, description, img, link} = data 

  return (
    <a
      href={link}
      className={'card'}
      target={'_blank'} rel="noreferrer"
    >
      <h3 className={'card__title'}><span>{name}</span></h3>
      <div className={'card__img-wrapper'}>
        <img className={'card__img'} src={urlFor(img)} alt="" />
      </div>
      
      <p className={'card__description'}>{description}</p>
      <span className={'card__link'}>Перейти к статье ...</span>
    </a>
  )
}

export default Card