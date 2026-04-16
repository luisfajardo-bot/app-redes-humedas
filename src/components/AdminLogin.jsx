import React, { useState } from 'react';
import { CFG } from '../data/config';

export default function AdminLogin({ gameState }) {
  const [clave, setClave] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Clave configurada pedida por el usuario
    if (clave === 'Boxculvert123') {
      gameState.setCurrentScreen('admin');
    } else {
      setError(true);
      setClave('');
    }
  };

  return (
    <div className="screen active" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#f5fff5' }}>
      <div style={{ background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 14px rgba(0,0,0,0.1)', textAlign: 'center', width: '90%', maxWidth: '400px' }}>
        <h2 style={{ color: CFG.color, marginBottom: '20px' }}>Acceso Administrador</h2>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input 
            type="password" 
            placeholder="Clave de administrador" 
            value={clave}
            onChange={(e) => { setClave(e.target.value); setError(false); }}
            style={{ padding: '12px', borderRadius: '8px', border: error ? '1px solid #e24b4a' : '1px solid #ccc', fontSize: '1rem', outline: 'none' }}
          />
          {error && <span style={{ color: '#e24b4a', fontSize: '0.85rem' }}>Clave incorrecta</span>}
          
          <button 
            type="submit" 
            style={{ background: CFG.color, color: '#fff', border: 'none', padding: '12px', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }}
          >
            Ingresar al Panel
          </button>
        </form>

        <button 
          onClick={() => gameState.setCurrentScreen('portada')}
          style={{ marginTop: '20px', background: 'transparent', border: 'none', color: '#666', textDecoration: 'underline', cursor: 'pointer' }}
        >
          Volver al Inicio
        </button>
      </div>
    </div>
  );
}
