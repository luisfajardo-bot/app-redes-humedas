import React from 'react';
import { CFG } from '../data/config';
import RedSVG from './RedSVG';

export default function Juego({ gameState }) {
  const total = gameState.stations.length;
  const { stations, done, fallos, pts, cur, openPreg } = gameState;
  
  const pct = total > 0 ? (done.length / total * 100) : 0;
  
  const ld = done.length > 0 ? done[done.length-1] : -1;
  const lf = ld >= 0 && fallos.includes(ld);
  
  let estadoCSS = {};
  let estadoTxt = '';
  
  if (lf) {
    estadoCSS = {
      background: 'rgba(226,75,74,.12)', color: '#e24b4a', border: '1px solid rgba(226,75,74,.25)', animation: 'pulso .7s 3'
    };
    estadoTxt = `🔴 FUGA en tramo ${ld+1} — Empalme incorrecto detectado`;
  } else if (done.length === total) {
    estadoCSS = { background: CFG.color + '18', color: CFG.color2, border: `1px solid ${CFG.color}33` };
    estadoTxt = `✅ Red completa (${total}/${total}) — Sin fugas — NC-025 cumplida`;
  } else {
    estadoCSS = { background: CFG.color + '18', color: CFG.color2, border: `1px solid ${CFG.color}33` };
    estadoTxt = `🔵 Tramo ${done.length}/${total} instalado correctamente`;
  }

  return (
    <div id="juego" className="screen active">
      <div className="hud" style={{ background: CFG.cbg + 'cc' }}>
        <button className="back-btn" onClick={() => window.location.reload()}>← Inicio</button>
        <div className="hud-t" style={{ color: CFG.color2 }}>{CFG.titulo}</div>
        <div style={{ display: 'flex', gap: '4px' }}>
          <div className="hbadge" style={{ borderColor: CFG.color + '55', color: CFG.color2, background: CFG.color + '15' }}>
            {done.length}/{total}
          </div>
          <div className="hbadge" style={{ borderColor: CFG.color + '55', color: CFG.color2, background: CFG.color + '15' }}>
            {pts} pts
          </div>
        </div>
      </div>
      
      <div className="red-wrap">
        <div className="red-tit">Tu red húmeda en construcción</div>
        <div className="pbar-bg">
          <div className="pbar-fill" style={{ width: `${pct}%`, background: CFG.color }}></div>
        </div>
        <div className="red-estado" style={{ ...estadoCSS, fontSize: '.65rem', textAlign: 'center', padding: '.22rem .5rem', borderRadius: '7px', marginBottom: '.38rem' }}>
          {estadoTxt}
        </div>
        <div className="red-svg-box">
          <RedSVG done={done} fallos={fallos} total={total} />
        </div>
      </div>
      
      <div className="est-list">
        {stations.map((s, i) => {
          const dv = done.includes(i - 1);
          const fv = fallos.includes(i - 1);
          const isAvail = i === cur;
          const isDone = done.includes(i);
          const isFallo = fallos.includes(i);
          
          let cardClass = 'est-card ';
          if (isFallo) cardClass += 'fallo';
          else if (isDone) cardClass += 'done';
          else if (isAvail) cardClass += 'avail';
          else cardClass += 'locked';

          return (
            <React.Fragment key={i}>
              {i > 0 && (
                <div 
                  className={`connector ${dv && !fv ? 'on' : fv ? 'fuga' : ''}`}
                  style={{ background: dv && !fv ? CFG.color : fv ? '#e24b4a' : '#1e2a3a' }}
                ></div>
              )}
              <div 
                className={cardClass} 
                style={{ borderColor: isAvail ? CFG.color : '' }}
                onClick={() => { if (isAvail) openPreg(i); }}
              >
                <div className="est-icon" style={{ background: isFallo ? '#2a0808' : isDone ? '#091a10' : isAvail ? CFG.cbg : '#0d1b15' }}>
                  {s.icon}
                </div>
                <div className="est-info">
                  <h3 style={{ color: isFallo ? '#e24b4a' : isDone ? CFG.color2 : isAvail ? '#f0f0f0' : '#3a5a3a' }}>{s.titulo}</h3>
                  <p>{s.badge}</p>
                </div>
                <div className="est-st">
                  {isFallo ? '⚠️' : isDone ? '✅' : isAvail ? '▶' : '🔒'}
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
