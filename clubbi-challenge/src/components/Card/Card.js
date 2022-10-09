import React from 'react';
import './Card.css';

function Card({ title, image, originalTitle, originalTitleRomanised, director, year, nota, description, duracao }) {
  return (
    <div className="Card" data-testid="Card">
      <h1>{title}</h1>
      <img className="filmIMG" src={image} alt={`imagem do filme${title}`} />
      <p data-testid="tituloOriginal">{originalTitle} - {originalTitleRomanised}</p>
      <p data-testid="diretor">Diretor: {director}</p>
      <p data-testid="ano">Ano: {year}</p>
      <p data-testid="nota">Nota: {nota}</p>
      <p data-testid="tempo">Tempo: {duracao} min</p>
      <p className="description" data-testid="descricao">{description}</p>
    </div>
  );
}
export default Card;
