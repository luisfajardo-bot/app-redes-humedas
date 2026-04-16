import React, { useState } from 'react';
import { CFG } from '../data/config';

export default function Registro({ gameState }) {
  const [parts, setParts] = useState([
    { nom: '', ced: '' },
    { nom: '', ced: '' },
    { nom: '', ced: '' },
    { nom: '', ced: '' },
    { nom: '', ced: '' }
  ]);

  const handleConfirm = () => {
    const validParts = [];
    parts.forEach((p, i) => {
      const nom = p.nom.trim();
      const ced = p.ced.trim();
      if (nom) {
        validParts.push({ nombre: nom, cedula: ced || '—', rol: i === 0 ? 'Líder' : 'Participante' });
      }
    });

    if (validParts.length === 0) {
      alert('Ingresa al menos el nombre del participante.');
      return;
    }
    
    gameState.registerParticipants(validParts);
  };

  const updatePart = (index, field, value) => {
    const np = [...parts];
    np[index][field] = value;
    setParts(np);
  };

  return (
    <div id="registro" className="screen active">
      <div className="reg-hd">
        <div className="reg-hd-icon" id="reg-icon">{CFG.icon}</div>
        <div>
          <h2 id="reg-h2">Registro — {CFG.titulo}</h2>
          <p>Ingresa los datos para el certificado de resultados</p>
        </div>
      </div>
      
      <div className="reg-body">
        <div className="reg-desc">
          📋 Registra el nombre y cédula de cada participante. Al finalizar podrás descargar el reporte en PDF y CSV con todos los datos y respuestas de cada pregunta.
        </div>
        
        <div id="reg-participantes">
          {parts.map((p, i) => (
            <div key={i} className="part-block" style={{ borderColor: CFG.color + '33' }}>
              <div className="part-num" style={{ color: CFG.color2 }}>
                Participante {i + 1} {i === 0 ? ' — Líder' : ''}
              </div>
              <input 
                className="inp" 
                placeholder="Nombre completo" 
                autoComplete="off" 
                style={{ borderColor: CFG.color + '33' }}
                value={p.nom}
                onChange={e => updatePart(i, 'nom', e.target.value)}
              />
              <input 
                className="inp" 
                placeholder="Número de cédula" 
                inputMode="numeric" 
                autoComplete="off" 
                style={{ borderColor: CFG.color + '33' }}
                value={p.ced}
                onChange={e => updatePart(i, 'ced', e.target.value)}
              />
            </div>
          ))}
        </div>
        
        <button 
          className="reg-btn" 
          id="reg-btn-ok" 
          style={{ background: CFG.color }}
          onClick={handleConfirm}
        >
          ✅ Guardar y comenzar
        </button>
        
        <button 
          className="skip-btn" 
          onClick={() => gameState.initGame()}
        >
          Omitir registro (solo puntaje)
        </button>
      </div>
    </div>
  );
}
