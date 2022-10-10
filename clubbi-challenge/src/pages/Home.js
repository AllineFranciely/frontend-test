import React from 'react';
// import Card from '../components/Card/Card';
import Filters from '../components/Filters/Filters';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '../App.css';

function Home() {
  return (
    <div className="App">
      <Header />
      <Filters />
      <Footer />
    </div >
  );
}

export default Home;
