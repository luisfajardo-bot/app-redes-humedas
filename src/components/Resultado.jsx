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
  
  const pct = Math.round((1 - fallos.length/total) * 100);
  
  let estadoCalidad = 'bueno';
  if (pct <= 80) estadoCalidad = 'malo';
  else if (pct < 90) estadoCalidad = 'regular';

  const sinFugas = fallos.length === 0;

  const bgStyle = estadoCalidad === 'bueno' 
    ? { background: 'linear-gradient(170deg,#041a0c,#082a14,#041008)' }
    : estadoCalidad === 'regular'
      ? { background: 'linear-gradient(170deg,#1a1a04,#2a2a08,#101002)' }
      : { background: 'linear-gradient(170deg,#1a0e04,#2a1808,#100a02)' };

  const rows = [
    { l: 'Participantes', v: participantes.length > 0 ? participantes.map(p => p.nombre).join(', ') : 'No registrados', c: 'ok' },
    { l: 'Tramos correctos', v: `${total - fallos.length}/${total}`, c: estadoCalidad === 'bueno' ? 'ok' : estadoCalidad === 'regular' ? 'warn' : 'bad' },
    { l: 'Fugas detectadas', v: `${fallos.length}`, c: fallos.length === 0 ? 'ok' : 'bad' },
    { l: 'Norma NC-025', v: sinFugas ? '✓ Cumplida' : '✗ Incumplida', c: sinFugas ? 'ok' : 'bad' },
    { l: 'Calidad', v: `${pct}%`, c: estadoCalidad === 'bueno' ? 'ok' : estadoCalidad === 'regular' ? 'warn' : 'bad' },
    { l: 'Estado', v: estadoCalidad === 'bueno' ? '✅ Operativo' : estadoCalidad === 'regular' ? '⚠️ Con fugas' : '🔴 Red dañada', c: estadoCalidad === 'bueno' ? 'ok' : estadoCalidad === 'regular' ? 'warn' : 'bad' }
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
        <ArbolSVG estadoCalidad={estadoCalidad} />
      </div>
      
      <div className="res-titulo" style={{ color: estadoCalidad === 'bueno' ? CFG.color2 : estadoCalidad === 'regular' ? '#f0d020' : '#e24b4a' }}>
        {estadoCalidad === 'bueno' ? '🌳 ¡Red perfecta!' : estadoCalidad === 'regular' ? '⚠️ Red con fugas' : '🥀 Red dañada'}
      </div>
      
      <div className="res-msg">
        {estadoCalidad === 'malo'
          ? `La red tiene ${fallos.length} tramo(s) con fuga. El árbol se seca sin agua. ¡Repasa los temas fallidos!`
          : estadoCalidad === 'regular'
            ? 'La red tiene fugas y está perdiendo agua, pero sigue funcionando. El árbol está un poco florecido, pero sin frutos ni mucho verde.'
            : '¡Excelente! El árbol ha florecido y tiene unas buenas bases de conocimiento sobre las redes húmedas.'
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
