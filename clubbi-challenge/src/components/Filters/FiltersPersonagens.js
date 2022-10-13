/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import CardPersonagem from '../Card/CardPersonagem';
import './Filters.css';
import Hi from '../../images/Hi.gif';
import { FcAcceptDatabase } from "react-icons/fc";
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';

function Filters() {
  const [filterByNumericValues, setFilterByNumericValues] = useState([
    {
      param: 'age',
      comparison: 'maior que',
      value: 0,
    },
  ]);
  const { param, comparison, value } = filterByNumericValues[0];
  const [personagens, setPersonagens] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterParam] = useState(['age']);
  const [showFilters, setShowFilter] = useState(true);
  const [loading, setLoading] = useState(true);

  const initialValue = Number(value);

  async function getAllPersonagens() {
    try {
      const response = await fetch("https://ghibliapi.herokuapp.com/people/");
      const data = await response.json();
      console.log(data);
      setPersonagens(data);
      setLoading(false);
      console.log(personagens);
    } catch (error) {
      // console.log(error);
    }
  }

  useEffect(() => {
    getAllPersonagens();
  }, []);

  const filterDataResults = () => personagens.filter((personagem) => {
    if (initialValue || initialValue === 0) {
      if (comparison.includes('maior que')) {
        return (Number(personagem[param]) > initialValue);
      }
      if (comparison.includes('menor que')) {
        return Number(personagem[param]) < initialValue;
      }
      return Number(personagem[param]) === initialValue;
    }
    return personagem;
  });

  return (
    !loading ? (
      <div className="filterCard">
        <div className="menu">
          <FcAcceptDatabase className="iconFilter" onClick={() => setShowFilter(!showFilters)} />
          <Link
            to="/"
            className="linkinterno"
          >
            Filmes
          </Link>
          <Link
            to="/locais"
            className="linkinterno"
          >
            Locais
          </Link>
        </div>
        {showFilters ? (
          <div className="filters">
            <p className="titleFilter">Filtre e encontre seus personagens</p>
            <input
              type="text"
              className="search"
              placeholder="pesquisar por nome"
              onChange={(event) => setFilterByName(event.target.value)}
            />
            <select
              name="param"
              className="filteroption"
              data-testid="select-param"
              onChange={(event) => setFilterByNumericValues([{
                ...filterByNumericValues[0],
                param: event.target.value,
              }])}
            >
              {filterParam.map((parametro) => (
                <option
                  key={parametro}
                  value={parametro}
                >
                  {parametro}
                </option>))}
            </select>
            <select
              name="comparison"
              className="filteroption"
              data-testid="select-comparison"
              onChange={(event) => setFilterByNumericValues([{
                ...filterByNumericValues[0],
                comparison: event.target.value,
              }])}
            >
              <option value="maior que">maior que</option>
              <option value="menor que">menor que</option>
              <option value="igual a">igual a</option>
            </select>
            <input
              type="number"
              className="filteroptionLast"
              value={value}
              onChange={(event) => setFilterByNumericValues([{
                ...filterByNumericValues[0],
                value: event.target.value,
              }])}
            />
            <div className="buttons">
              <button
                type="button"
                className="button"
                data-testid="button-filter"
                onClick={() => {
                  setPersonagens(() => filterDataResults());
                }}
              >
                Filtrar
              </button>
              <button
                className="button"
                onClick={() => {
                  var url = window.location.href + "?filter=true";
                  window.location.href = url;
                }}
              >
                Limpar Filtros
              </button>
            </div>
          </div>
        ) : (
          ''
        )}
        <div className="cards">
          <img className="imgHi" src={Hi} alt="Gif de anime" />
          {personagens && personagens.filter((filterPersonagem) => filterPersonagem.name
            .includes(filterByName))
            .map((personagem) => (
              <CardPersonagem
                key={personagem.id}
                name={personagem.name}
                gender={personagem.gender}
                age={personagem.age}
                eye_color={personagem.eye_color}
                hair_color={personagem.hair_color}
              />
            ))}
        </div>
      </div>
    ) : (<Loading />)
  );
}

export default Filters;
