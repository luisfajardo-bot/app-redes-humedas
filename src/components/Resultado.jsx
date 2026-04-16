import React, { useEffect, useRef } from 'react';
import { CFG } from '../data/config';
import ArbolSVG from './ArbolSVG';
import { descargarPDF, descargarCSV } from '../utils/reports';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function Resultado({ gameState }) {
  const { fallos, pts, participantes, historial, done } = gameState;
  const savedRef = useRef(false);

  useEffect(() => {
    // Evitar guardar dos veces en StrictMode
    if (savedRef.current) return;
    
    const guardarEnFirebase = async () => {
      if (!db) return; // Si no han configurado Firebase aún
      
      try {
        savedRef.current = true;
        await addDoc(collection(db, "resultados"), {
          fecha: new Date().toISOString(),
          participantes,
          pts,
          fallos,
          historial,
          done
        });
        console.log("Resultado guardado en Firebase exitosamente.");
      } catch (e) {
        console.error("Error guardando en Firebase: ", e);
        savedRef.current = false;
      }
    };

    guardarEnFirebase();
  }, [participantes, pts, fallos, historial, done]);
  const total = CFG.stations.length;
  
  const sinFugas = fallos.length === 0;
  const pct = Math.round((1 - fallos.length/total) * 100);

  const bgStyle = sinFugas 
    ? { background: 'linear-gradient(170deg,#041a0c,#082a14,#041008)' }
    : { background: 'linear-gradient(170deg,#1a0e04,#2a1808,#100a02)' };

  const rows = [
    { l: 'Participantes', v: participantes.length > 0 ? participantes.map(p => p.nombre).join(', ') : 'No registrados', c: 'ok' },
    { l: 'Tramos correctos', v: `${total - fallos.length}/${total}`, c: fallos.length === 0 ? 'ok' : fallos.length <= 2 ? 'warn' : 'bad' },
    { l: 'Fugas detectadas', v: `${fallos.length}`, c: fallos.length === 0 ? 'ok' : 'bad' },
    { l: 'Norma NC-025', v: sinFugas ? '✓ Cumplida' : '✗ Incumplida', c: sinFugas ? 'ok' : 'bad' },
    { l: 'Calidad', v: `${pct}%`, c: pct >= 85 ? 'ok' : pct >= 60 ? 'warn' : 'bad' },
    { l: 'Estado', v: sinFugas ? '✅ Operativo' : '🔴 Con fallas', c: sinFugas ? 'ok' : 'bad' }
  ];

  if (fallos.length > 0) {
    const names = fallos.map(f => CFG.stations[f].titulo);
    rows.push({ l: 'Temas a repasar', v: names.join(' · '), c: 'bad' });
  }

  const handleDescargarPDF = () => {
    descargarPDF(gameState, CFG);
  };

  const handleDescargarCSV = () => {
    descargarCSV(gameState, CFG);
  };

  return (
    <div id="resultado" className="screen active" style={bgStyle}>
      <div className="escena-box">
        <ArbolSVG sinFugas={sinFugas} />
      </div>
      
      <div className="res-titulo" style={{ color: sinFugas ? CFG.color2 : '#e24b4a' }}>
        {sinFugas ? '🌳 ¡Red perfecta!' : '🥀 Red con fugas'}
      </div>
      
      <div className="res-msg">
        {sinFugas
          ? '¡Excelente! La red está instalada correctamente, sin fugas. El árbol florece y el agua llega a todos los hogares.'
          : `La red tiene ${fallos.length} tramo(s) con fuga. El árbol se seca sin agua. ¡Repasa los temas fallidos!`
        }
      </div>
      
      <div className="diagnostico">
        {rows.map((r, i) => (
          <div key={i} className="diag-row">
            <span className="diag-label">{r.l}</span>
            <span style={{
              fontWeight: 600, fontSize: '.74rem', textAlign: 'right',
              color: r.c === 'ok' ? CFG.color2 : r.c === 'warn' ? '#f0a020' : '#e24b4a'
            }}>
              {r.v}
            </span>
          </div>
        ))}
      </div>
      
      <div className="pts-box">
        <span>Puntuación final</span>
        {pts} pts
      </div>
      
      <button className="replay-btn" onClick={() => window.location.reload()}>
        ↺ Volver al inicio
      </button>
    </div>
  );
}
