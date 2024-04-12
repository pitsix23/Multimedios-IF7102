import './App.css';
import Counter from './components/Counter';
import Likes from './components/Likes';
import Modal from './components/Modal';
import NameState from './components/NameState';
import React, { useState } from 'react';
function App() {

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Likes></Likes>
        <NameState />
        <h1>Bienvenido al boletín</h1>
        <button onClick={handleModalToggle}>Abrir Modal</button>
        <Modal isOpen={modalOpen} onClose={handleModalToggle} />
        <Counter></Counter>
      </header>
    </div>
  );
}

export default App;
