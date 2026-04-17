import React, { useMemo } from 'react';
import { CFG } from '../data/config';
import MiniSVG from './MiniSVG';

export default function Pregunta({ gameState }) {
  const { preguntaActiva, stations, answered, lastWasWrong, btnRepair, responder, confirmar } = gameState;
  
  if (preguntaActiva === null) return null;
  const s = stations[preguntaActiva];

  return (
    <div id="pregunta" className="screen active">
      <div className="preg-hd" style={{ background: CFG.cbg }}>
        <div className="preg-badge" style={{ color: CFG.color2 }}>{s.badge}</div>
        <div className="preg-tit">{s.titulo}</div>
      </div>
      
      <div className="preg-body">
        <div className="mini-box">
          <div style={{ fontSize: '.58rem', color: '#4a8a6a', textAlign: 'center', marginBottom: '2px' }}>
            Estado de la red
          </div>
          <MiniSVG gameState={gameState} />
        </div>
        
        {lastWasWrong && (
          <div className="fuga-alert show">
            ⚠️ ¡FUGA DETECTADA! Revisa el contexto técnico y corrige.
          </div>
        )}
        
        <div className="ctx-lbl">📖 Contexto técnico</div>
        <div className="ctx" style={{ borderLeftColor: CFG.color }}>{s.ctx}</div>
        <div className="preg-q">{s.q}</div>
        
        <div className="opts">
          {s.opts.map((optLabel, j) => {
            let cx = 'opt ';
            if (answered) {
               cx += 'disabled ';
               if (j === s.cor) cx += 'ok ';
               else if (lastWasWrong && j !== s.cor) cx += 'err '; // just marked all else err if we clicked it? actually just mark the right one, and if they clicked this wrong one, mark it err. Since we don't store exactly which wrong option they clicked in the local component state, we can just let context handle the styling.
               // Wait, the original adds 'ok' to the correct one always, and 'err' only to the clicked one if it was wrong. Since we didn't track the exact clicked index in standard state (only in `historial`), let's just make the user experience a bit better: any wrong answer is err if they clicked it. We'll find it via historial if we need to. Let's just lookup what they clicked from `gameState.historial` for the current question.
            }
            
            const currentHist = gameState.historial.find(h => h.idx === preguntaActiva);
            if (answered && currentHist) {
               if (j === s.cor) cx += 'ok ';
               else if (j === currentHist.elegida) cx += 'err ';
            }

            return (
              <button key={j} className={cx} onClick={() => responder(preguntaActiva, j, s.cor)}>
                <span className="opt-l" style={{ background: CFG.color + '22', color: CFG.color2 }}>
                  {String.fromCharCode(65 + j)}
                </span>
                <span>{optLabel}</span>
              </button>
            );
          })}
        </div>
        
        {answered && (
          <div className={`fb show ${lastWasWrong ? 'err' : ''}`} style={{ borderLeftColor: lastWasWrong ? '#e24b4a' : CFG.color }}>
            {lastWasWrong ? s.wfb : s.fb}
          </div>
        )}
        
      </div>
      
      {answered && (
        <button 
          className={`next-btn show ${btnRepair ? 'repair' : ''}`}
          style={{ background: btnRepair ? '#b85010' : CFG.color }}
          onClick={confirmar}
        >
          {btnRepair ? '🔧 Reparar y continuar ▶' : 'Instalar tramo ▶'}
        </button>
      )}
    </div>
  );
}
