import React, { useState } from 'react';
import { useGameState } from './hooks/useGameState';
import Portada from './components/Portada';
import Registro from './components/Registro';
import Juego from './components/Juego';
import Pregunta from './components/Pregunta';
import Resultado from './components/Resultado';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const gameState = useGameState();
  const { currentScreen } = gameState;

  return (
    <div className="app-container">
      {currentScreen === 'portada' && <Portada gameState={gameState} />}
      {currentScreen === 'registro' && <Registro gameState={gameState} />}
      {currentScreen === 'juego' && <Juego gameState={gameState} />}
      {currentScreen === 'pregunta' && <Pregunta gameState={gameState} />}
      {currentScreen === 'resultado' && <Resultado gameState={gameState} />}
      {currentScreen === 'loginAdmin' && <AdminLogin gameState={gameState} />}
      {currentScreen === 'admin' && <AdminDashboard gameState={gameState} />}
    </div>
  );
}

export default App;
