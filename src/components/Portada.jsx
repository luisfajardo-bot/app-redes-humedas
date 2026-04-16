import React from 'react';
import { CFG } from '../data/config';

export default function Portada({ gameState }) {
  return (
    <div id="portada" className="screen active" style={{ position: 'relative' }}>
      <button 
        style={{ position: 'absolute', top: 15, right: 15, background: 'transparent', border: 'none', fontSize: '1.2rem', cursor: 'pointer', opacity: 0.5, transition: 'opacity 0.2s' }}
        onMouseOver={e => e.target.style.opacity = 1}
        onMouseOut={e => e.target.style.opacity = 0.5}
        onClick={() => gameState.setCurrentScreen('loginAdmin')}
        title="Panel de Administrador"
      >
        ⚙️
      </button>
      <div className="logo-big" id="port-logo">{CFG.icon}</div>
      <h1 className="port-h1" id="port-h1">{CFG.titulo}</h1>
      <p className="port-sub">Manos que Transforman_ICEIN · Universidad de los Andes</p>
      <p className="port-inst" id="port-inst">{CFG.inst}</p>
      <div className="port-temas">
        <strong id="port-temas-title">{CFG.temasTitle}</strong>
        <span id="port-temas-list">{CFG.temas}</span>
      </div>
      <button 
        className="start-btn" 
        id="port-btn" 
        style={{ background: CFG.color }}
        onClick={() => gameState.setCurrentScreen('registro')}
      >
        ▶ {CFG.btnLabel || 'Comenzar'}
      </button>
    </div>
  );
}
