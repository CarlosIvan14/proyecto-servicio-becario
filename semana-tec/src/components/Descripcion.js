import React from 'react';
import Vista1 from './vista1.jpg';
import './Descripcion.css';

const Descripcion = () => {
  return (
    <div  id='nosotros'>
    <div className="descripcion row">
      <p id="blank" className="col-12 col-md-1"></p>
      <div className='foto col-12 col-md-6'>
        <img src={Vista1} alt="Vista 1" className="img-fluid" />
      </div>
      <div className="infor col-12 col-md-5">
        <h1 id="texto1">Descripción</h1>
        <p id="texto2">EDIFICIOS DE MEDICINA</p>
        <p id="texto3">According to Wikipedia, a paragraph is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organise longer prose.</p>
        <p id="texto4">www.northbound.co</p>
      </div>
    </div>
    </div>
  )
};

export default Descripcion;


