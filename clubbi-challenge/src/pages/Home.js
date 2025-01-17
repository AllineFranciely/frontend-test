import React from 'react';
// import Card from '../components/Card/Card';
import Filters from '../components/Filters/Filters';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '../App.css';
import { BiChevronUp } from 'react-icons/bi';

function Home() {
  return (
    <div className="App">
      <Header />
      <Filters />
      <section className='section-a'>
        <a href='#container-header'>
        <p className="back"> Voltar ao topo < BiChevronUp /></p> 
        </a>
      </section>
      <Footer />
    </div >
  );
}

export default Home;
