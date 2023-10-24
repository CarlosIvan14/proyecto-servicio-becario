import React from 'react';
import { Link } from 'react-router-dom';
import Componente1 from './components/Componente1';
import AppNavbar from './components/AppNavbar';
import Descripcion from './components/Descripcion';
import Laboratorios from './components/Laboratorios';
import Footer from './components/footer'; // Asegúrate de que 'Footer' esté escrito en minúsculas

const Home = () => {
  return (
    <div>
      <div>
        <AppNavbar />
      </div>

      <div>
        <Componente1 />
      </div>

      <div style={{ marginTop: '30px', marginBottom: '30px' }}>
        {/* Agregamos un margen superior a 'Descripcion' */}
        <Descripcion />
      </div>

      <div style={{ marginBottom: '30px' }}>
        {/* Agregamos un margen inferior a 'Laboratorios' */}
        <Laboratorios />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
