import React, { useState } from 'react';
import { CFG } from '../data/config';

export default function Registro({ gameState }) {
  const [parts, setParts] = useState([
    { nom: '', ced: '' }
  ]);

  const handleConfirm = () => {
    const nom = parts[0].nom.trim();
    const ced = parts[0].ced.trim();

    if (!nom || !ced) {
      alert('Debes ingresar tanto el nombre como la cédula del participante para poder empezar.');
      return;
    }
    
    gameState.registerParticipants([{ nombre: nom, cedula: ced, rol: 'Evaluado' }]);
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
          📋 Registra el nombre completo y la cédula del participante. Al finalizar se generará un certificado con el reporte detallado de resultados.
        </div>
        
        <div id="reg-participantes">
          {parts.map((p, i) => (
            <div key={i} className="part-block" style={{ borderColor: CFG.color + '33' }}>
              <div className="part-num" style={{ color: CFG.color2 }}>
                Datos del Participante
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
      </div>
    </div>
  );
}
