import React, { useEffect, useState } from 'react';
import NavReserva from './components/NavReserva';
import CardSalon from './components/CardSalon';
import './components/CardSalon.css'; // Importa el archivo CSS actualizado

function Reserva() {
  const [datos, setDatos] = useState([]);

  // Función para realizar la consulta a la API y actualizar los datos
  const fetchData = async () => {
    try {
      const response = await fetch('https://reservas-edificio-medicina-tecgdl.onrender.com/api/salones_disponibles');
      const data = await response.json();
      setDatos(data);
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };

  // Llama a fetchData() cuando el componente se monta y cada 5 segundos (puedes ajustar este intervalo)
  useEffect(() => {
    fetchData(); // Llama a fetchData() al montar el componente

    const intervalId = setInterval(() => {
      fetchData(); // Llama a fetchData() cada 5 segundos (5000 ms)
    }, 2000);

    // Limpia el intervalo cuando el componente se desmonta para evitar fugas de memoria
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="App">
      <div>
        <NavReserva />
        <br/>
        <br/>
        <br/>
      </div>
      <div className="container" style={{ marginTop: '20px' }}> {/* Agrega margen superior con estilos en línea */}
        <div className="row mx-auto">
          {datos.map((dato, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <CardSalon
                nombre={dato.ID}
                imagen={dato.imagen}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reserva;
