import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '../App.css';
import FiltersLocations from '../components/Filters/FiltersLocation';

function Home() {
  return (
    <div className="App">
      <Header />
      <FiltersLocations />
      <Footer />
    </div >
  );
}

export default Home;
