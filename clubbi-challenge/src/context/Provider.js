import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState(''); 
  
  const [filterData, setFilterData] = useState([]);

  const url = 'https://ghibliapi.herokuapp.com';

  useEffect(() => {
    const getAPI = async () => {
      const response = await fetch(url);
      const { results } = await response.json();
      setFilterData(results);
      setData(results);
    };
    getAPI();
  }, []);

  const valueContext = {
    data,
    filterData,
    setFilterData,
  };

  return (
    <Context.Provider value={ valueContext }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;