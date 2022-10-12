import React from 'react';
import './Card.css';

function CardPersonagem({ name, gender, age, eye_color, hair_color }) {
  return (
    <div className="CardPersonagem" data-testid="CardPersonagem">
      <h1 className="name">{name}</h1>
      <p data-testid="gender">Gênero: {gender}</p>
      <p data-testid="age">Idade: {age}</p>
      <p data-testid="eyes">Cor dos olhos: {eye_color}</p>
      <p data-testid="hair">Cor do cabelo: {hair_color}</p>
    </div>
  );
}
export default CardPersonagem;
