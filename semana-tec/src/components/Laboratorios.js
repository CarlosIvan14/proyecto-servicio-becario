import React from 'react';
import Vista1 from './vista1.jpg';
import Vista2 from './vista2.jpg';
import Vista3 from './vista3.jpg';
import './Laboratorios.css';

const Laboratorios = () => {
  return (
    <div id='Labs'>
    <div className="laboratorios row">
      <div className="col-md-1"></div>
      <div className="info col-12 col-md-5">
        <h1 id="texto1">Laboratorios</h1>
        <p id="texto2">EDIFICIOS DE MEDICINA</p>
        <p id="texto3">According to Wikipedia, a paragraph is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organise longer prose.</p>
        <p id="texto4">www.northbound.co</p>
      </div>
      <div className='carousel col-12 col-md-6'>
        <div id="carouselExampleControls2" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Vista1} alt="Mi Imagen" className="img-fluid aspect-ratio" />
            </div>
            <div className="carousel-item">
              <img src={Vista2} alt="Mi Imagen" className="img-fluid aspect-ratio" />
            </div>
            <div className="carousel-item">
              <img src={Vista3} alt="Mi Imagen" className="img-fluid aspect-ratio" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    </div>
  )
};

export default Laboratorios;



