import React from 'react';
import FiltersPersonagens from '../components/Filters/FiltersPersonagens';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '../App.css';

function Home() {
  return (
    <div className="App">
      <Header />
      <FiltersPersonagens />
      <Footer />
    </div >
  );
}

export default Home;
