import React from 'react';

function Card({ title, image, director, year, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt={`imagem do filme${title}`} />
      <p>{year}</p>
      <p>{director}</p>
      <p>{description}</p>
    </div>
  );
}
export default Card;
