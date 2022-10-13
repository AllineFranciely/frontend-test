import React from 'react';
import './Card.css';

function Card({ name, climate, terrain, surface_water }) {
  return (
    <div className="CardLocation" data-testid="CardLocation">
      <h1 className="nameLocation">{name}</h1>
      <p data-testid="climate">Clima: {climate}</p>
      <p data-testid="terrain">Terreno: {terrain}</p>
      <p data-testid="surface_water">Superfícia aquática: {surface_water}</p>
    </div>
  );
}
export default Card;
