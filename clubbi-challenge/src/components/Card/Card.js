import React from 'react';

function Card({ title, image, originalTitle, originalTitleRomanised, director, year, nota, description, duracao }) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt={`imagem do filme${title}`} />
      <p>{originalTitle} - {originalTitleRomanised}</p>
      <p>Diretor: {director}</p>
      <p>Ano: {year}</p>
      <p>Nota: {nota}</p>
      <p>Tempo: {duracao} min</p>
      <p>{description}</p>
    </div>
  );
}
export default Card;
