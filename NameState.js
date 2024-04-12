import React, { useState } from 'react';
import './Modal.css';

function NameState() {
  const [nombre, setNombre] = useState('No definido');

  const handleChange = (event) => {
    setNombre(event.target.value);
  };

  return (
    <div>
      <h1>Bienvenido, {nombre}</h1>
      <input className='text'
        type="text" 
        placeholder="Ingresa tu nombre" 
        value={nombre} 
        onChange={handleChange} 
      />
    </div>
  );
}

export default NameState;