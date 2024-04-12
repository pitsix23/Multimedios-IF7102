import React, { useState } from 'react';
import './Modal.css';

function Modal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Correo electrónico suscrito:', email);
    setEmail('');
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Suscribirse al boletín</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Ingresa tu correo electrónico" 
            value={email} 
            onChange={handleInputChange} 
            required 
          />
          <button type="submit">Suscribirse</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;