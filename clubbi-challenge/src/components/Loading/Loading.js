import React from 'react';
import './Loading.css';
import Naruto from '../../images/naruto.jpg';
import OnePiece from '../../images/onepiece.jpg';
import Nanatsu from '../../images/nanatsu.jpeg';

function Loading() {
  return (
    <body className='body-loading'>
      <div className='loading'>
        <div className='squares'>
          <div className='square-1'>
            <img src={ Naruto } alt='Naruto' className='img-loading'/>
          </div>
          <div className='square-2'>
            <img src={ OnePiece } alt='OnePiece' className='img-loading'/>
          </div>
          <div className='square-3'>
            <img src={ Nanatsu } alt='Nanatsu' className='img-loading'/>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Loading;
