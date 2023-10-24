import React, { useState } from 'react';
import './CardSalon.css';
import './Modal.css';
import { Button, Modal } from 'react-bootstrap';
import Mesas from './Mesas.js';
import Horarios from './Horarios';
import DatosCliente from './DatosCliente';
import MaterialesDisp from './MaterialesDisp';
function CardSalon(props) {
  const { nombre } = props;
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  function obtenerHoraActual() {
    const fechaActual = new Date();
    const hora = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const segundos = fechaActual.getSeconds();
  
    // Formatea la hora, los minutos y los segundos para que tengan dos dígitos
    const horaFormateada = hora < 10 ? `0${hora}` : hora;
    const minutosFormateados = minutos < 10 ? `0${minutos}` : minutos;
    const segundosFormateados = segundos < 10 ? `0${segundos}` : segundos;
  
    // Crea una cadena de texto con la hora actual formateada
    const horaActual = `${horaFormateada}:${minutosFormateados}:${segundosFormateados}`;
  
    return horaActual;
  }
  
  // Llama a la función para obtener la hora actual
  const hora = obtenerHoraActual();

  return (
    <div className="custom-card">
      <div className="card-content">
        {nombre && (
          <div className="card-text">
            <h5 className="numero">{nombre}</h5>
          </div>
        )}
      </div>
      <div className="card-footer">
        <a href="#" className="modal_link" onClick={handleOpenModal}>
          Ver Más<i className="bi bi-chevron-down"></i>
        </a>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Contenido del modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Mesas></Mesas>
          <Horarios></Horarios>
          <DatosCliente></DatosCliente>
          <MaterialesDisp></MaterialesDisp>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CardSalon;
