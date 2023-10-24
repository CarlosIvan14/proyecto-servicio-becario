import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from './logos.svg';
import { Navbar, Nav } from 'react-bootstrap';


function AppNavbar() {
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" className={`navbar-light ${isScrolled ? 'white-text' : ''}`}>
      <div className="container-fluid">
        <Navbar.Brand href="#home">
          <img src={Logo} alt="Tec de Monterrey" className={`image navbar-brand ${isScrolled ? 'white-text' : ''}`} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ml-auto">
            <Nav.Link href="#nosotros" className={`nav-link l ${isScrolled ? 'white-text' : ''}`}>Conócenos</Nav.Link>
            <Nav.Link href="#Labs" className={`nav-link l ${isScrolled ? 'white-text' : ''}`}>Laboratorios</Nav.Link>
            <Nav.Link href='/Reserva' className={`nav-link l ${isScrolled ? 'white-text' : ''}`}>Reserva Ya</Nav.Link>
          </Nav>  
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default AppNavbar;

