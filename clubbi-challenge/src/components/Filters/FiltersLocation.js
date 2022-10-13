/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import CardLocation from '../Card/CardLocation';
import './Filters.css';
import Hi from '../../images/Hi.gif';
import { FcAcceptDatabase } from "react-icons/fc";
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';

function FiltersLocations() {
  const [filterBy, setFilterBy] = useState([]);
  const [filterParam] = useState(['Selecione um clima', 'Continental', 'Mild', 'TODO', 'Tropical', 'Dry', 'Wet']);
  const [filterParamTerrain] = useState(['Selecione um terreno', 'Mountain', 'Hill', 'Plain', 'Marsh', 'TODO', 'Forest', 'City', 'River', 'Ocean']);
  const [locations, setLocations] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [showFilters, setShowFilter] = useState(true);
  const [loading, setLoading] = useState(true);


  async function getAllLocations() {
    try {
      const response = await fetch("https://ghibliapi.herokuapp.com/locations");
      const data = await response.json();
      console.log(data);
      setLocations(data);
      console.log(locations);
      setLoading(false);
    } catch (error) {
    }
  }

  useEffect(() => {
    getAllLocations();
  }, []);

  const filterDataResults = () => locations.filter((location) => {
    const param = filterBy;
    console.log(param);
    return location.climate === param || location.terrain === param;
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
            to="/personagens"
            className="linkinterno"
          >
            Personagens
          </Link>
        </div>
        {showFilters ? (
          <div className="filters">
            <p className="titleFilter">Filtre e encontre seus lugaress</p>
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
              onChange={(event) => setFilterBy(event.target.value)}
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
              name="param"
              className="filteroption"
              data-testid="select-param"
              onChange={(event) => setFilterBy(event.target.value)}
            >
              {filterParamTerrain.map((parametro) => (
                <option
                  key={parametro}
                  value={parametro}
                >
                  {parametro}
                </option>))}
            </select>
            <div className="buttons">
              <button
                type="button"
                className="button"
                data-testid="button-filter"
                onClick={() => {
                  setLocations(() => filterDataResults());
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
        <div className={showFilters ? "cards" : "cardsInt"}>
          <img className="imgHi" src={Hi} alt="Gif de anime" />
          {locations && locations.filter((filterLocation) => filterLocation.name
            .includes(filterByName))
            .map((location) => (
              <CardLocation
                key={location.id}
                name={location.name}
                climate={location.climate}
                terrain={location.terrain}
                surface_water={location.surface_water}
              />
            ))}
        </div>
      </div>
    ) : (
      <Loading />
    )
  );
}

export default FiltersLocations;
