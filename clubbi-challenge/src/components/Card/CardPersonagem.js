import React from 'react';
import './Card.css';

function CardPersonagem({ name, gender, age, eye_color, hair_color }) {
  return (
    <div className="CardPersonagem" data-testid="CardPersonagem">
      <h1 className="name">{name}</h1>
      <p data-testid="diretor">Gênero: {gender}</p>
      <p data-testid="ano">Idade: {age}</p>
      <p data-testid="nota">Cor dos olhos: {eye_color}</p>
      <p data-testid="tempo">Cor do cabelo: {hair_color}</p>
    </div>
  );
}
export default CardPersonagem;
