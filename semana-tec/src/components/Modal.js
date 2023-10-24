import React, { Component } from 'react';
import Mesas from './Mesas';
import Horarios from './Horarios';
import DatosCliente from './DatosCliente';
import MaterialesDisp from './MaterialesDisp';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <div>
        <button onClick={this.openModal}>Abrir Modal</button>
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <button className="close-button" onClick={this.closeModal}>
                Cerrar Modal
              </button>
              <Mesas />
              <Horarios />
              <DatosCliente />
              <MaterialesDisp />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Modal;