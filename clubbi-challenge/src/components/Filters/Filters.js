import React, { useState, useEffect } from 'react';
import { getMovies } from '../../utils/API';
import Card from '../Card/Card';

function Filters() {
  const [filterByNumericValues, setFilterByNumericValues] = useState([
    {
      param: 'release_date',
      comparison: 'maior que',
      value: 0,
    },
  ]);
  const { param, comparison, value } = filterByNumericValues[0];
  const [movies, setMovies] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [filterParam] = useState(['release_date', 'rt_score', 'running_time']);

  const initialValue = Number(value);

  async function getAllMovies() {
    const allMovies = await getMovies();
    setMovies(allMovies);
    console.log(movies);
  }

  useEffect(() => {
    getAllMovies();
  }, []);

  const filterDataResults = () => movies.filter((movie) => {
    if (initialValue || initialValue === 0) {
      if (comparison.includes('maior que')) {
        return (Number(movie[param]) > initialValue);
      }
      if (comparison.includes('menor que')) {
        return Number(movie[param]) < initialValue;
      }
      return Number(movie[param]) === initialValue;
    }
    return movie;
  });

  return (
    <div>
      <input
        type="text"
        onChange={(event) => setFilterByName(event.target.value)}
      />
      <select
        name="param"
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
        value={value}
        onChange={(event) => setFilterByNumericValues([{
          ...filterByNumericValues[0],
          value: event.target.value,
        }])}
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={() => {
          setMovies(() => filterDataResults());
        }}
      >
        Filtrar
      </button>
      <button
        onClick={() => {
          var url = window.location.href + "?filter=true";
          window.location.href = url;
        }}
      >
        Limpar Filtros
      </button>
      {movies && movies.filter((filterMovie) => filterMovie.title
        .includes(filterByName))
        .map((movie) => (
          <Card
            key={movie.id}
            title={movie.title}
            image={movie.image}
            originalTitle={movie.original_title}
            originalTitleRomanised={movie.original_title_romanised}
            year={movie.release_date}
            director={movie.director}
            nota={movie.rt_score}
            duracao={movie.running_time}
            description={movie.description}
          />
        ))}
    </div>
  );
}

export default Filters;