import React, { useState, useEffect } from 'react';
import Card from '../components/Card/Card';
import { getMovies } from '../utils/API';
import Header from '../components/Header/Header';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [filterByName, setFilterByName] = useState('');

  async function getAllMovies() {
    const allMovies = await getMovies();
    setMovies(allMovies);
    console.log(movies);
  }

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <div>
      <Header />
      <input
        type="text"
        onChange={(event) => setFilterByName(event.target.value)}
      />
      {movies.filter((filterMovie) => filterMovie.title.toLowerCase()
        .includes(filterByName))
        .map((movie) => (
          <Card
            key={movie.id}
            title={movie.title}
            image={movie.image}
            year={movie.release_date}
            director={movie.director}
            description={movie.description}
          />
        ))}
    </div>
  );
}

export default Movies;
