import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoImage from './logo_tec_white.webp';
import './Navbar.css';

export const NavReserva = () => {
  return (
    <Navbar expand="lg" className={'navbar-light'} bg="dark" data-bs-theme="dark">
      <div className="container-fluid">
        <Navbar.Brand href="#home">
          <img src={LogoImage} alt="Tec de Monterrey" className={`image navbar-brand`} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mr-auto">
            <Nav.Link href="/Reserva" className={`nav-link l`}>Laboratorios Disponibles</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#mats" className={`nav-link l derecha`}>Materiales</Nav.Link>
            <Nav.Link href='/' className={`nav-link l bot derecha`}>Regresar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavReserva;
