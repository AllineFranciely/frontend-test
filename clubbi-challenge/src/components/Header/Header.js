import React, { useContext } from 'react';
import Context from '../context/Context';

function Header() {
  const { setFilterByName } = useContext(Context);

  return (
    <header>
      <h1>Clubbi Movies</h1>
      <input
        type="text"
        className="inputSearch"
        onChange={
          (event) => setFilterByName({ name: event.target.value })
        }
      />
    </header>
  );
}

export default Header;