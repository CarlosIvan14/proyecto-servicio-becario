import React from 'react';
import Vista1 from './miImagen.jpg';
import Vista2 from './vista2.jpg';
import Vista3 from './vista3.jpg';
import './Componente1.css'
const Componente1 = () => {
  return (
    <div>
      <div className="container-fluid p-0">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Vista1} alt="Mi Imagen" className="d-block w-100 custom-img-height" />
            </div>
            <div className="carousel-item">
              <img src={Vista2} alt="Mi Imagen" className="d-block w-100 custom-img-height" />
            </div>
            <div className="carousel-item">
              <img src={Vista3} alt="Mi Imagen" className="d-block w-100 custom-img-height" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Componente1;


