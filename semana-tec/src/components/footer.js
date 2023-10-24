import React from 'react';
import "./Footer.css"
import log from "./logos.jpg";
function Footer() {
  return (
    <div className="container-fluid">
      <div className="row fondo3">
        <div className="col-12 col-md-1">
          <img src={log} alt="Tec de Monterrey" className='image navbar-brand' width="70%" />
        </div>
        <div className="col-12 col-md-5 pie_pag">
          <h4>Educación</h4>
          <h6>PREPATEC  PROFESIONAL  POSGRADOS</h6>
          <h4>Investigación</h4>
          <h6>GRUPOS  INVESTIGADORES  </h6>
          <h4>Vinculación</h4>
          <h6>FILANTROPÍA  FLORECIMIENTO HUMANO  </h6>
          <h4>Conócenos</h4>
          <br /> <br />
          <h6>TEC STORE    VENUES   NEWSROOM  </h6>
        </div>

        <div className="col-6 col-md-2 pie_pag">
          <h6>Profesores</h6>
          <br /> <br />
          <h6>Egresados  </h6>
          <br /> <br />
          <h6>Noticias </h6>
        </div>

        <div className="col-6 col-md-2 pie_pag">
          <h6>SÍGUENOS</h6>
          <br /> <br />
          <h6>CONTÁCTANOS  </h6>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
            {/* Insertar el contenido SVG de Facebook aquí */}
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-btn-fill" viewBox="0 0 16 16">
            {/* Insertar el contenido SVG de Play Button aquí */}
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
            {/* Insertar el contenido SVG de Twitter aquí */}
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
            {/* Insertar el contenido SVG de LinkedIn aquí */}
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
            {/* Insertar el contenido SVG de Instagram aquí */}
          </svg>
          <br /> <br />
          <h6>ÚNETE A NUESTRO EQUIPO </h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
