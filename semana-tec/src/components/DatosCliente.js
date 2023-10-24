import React from 'react';

function DatosCliente() {
  return (
    <div className='row'>
      <div className="datos col-6">
        <p className="subtitle">Nombre</p>
        <input type="text" className="dato" placeholder="Nombre" />
      </div>
      <div>
        <p  className="subtitle">Número de personas</p>
        <input type="number" className="dato" placeholder="Número" />
      </div>
    </div>
  );
}

export default DatosCliente;