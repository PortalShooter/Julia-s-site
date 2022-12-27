import React, { useEffect, useState } from "react";
import './Portfolio.scss'
import Card from "./Card/Card";
import sanityClient from '../../client.js'

const Portfolio = () => {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "article"]{
          name,
          description,
          img,
          link
        }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <section
      className={'portfolio'}
    >
      <h2 className={'portfolio__title'}>Мои Работы</h2>
      <div className={'portfolio__cards'}>
        {allPostsData && allPostsData.map((data, index) => <Card data={data} key={index} />)}
      </div>
    </section>
  )
}

export default Portfolio