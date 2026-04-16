import React, { useMemo } from 'react';
import { CFG } from '../data/config';

export default function MiniSVG({ gameState }) {
  const { done, fallos, preguntaActiva, answered, lastWasWrong } = gameState;
  const nx = CFG.stations.length;
  
  const miniXs = useMemo(() => {
    const a = [];
    for(let i=0; i<nx; i++){
      a.push(Math.round(10 + i*(280/(Math.max(nx-1,1)))));
    }
    return a;
  }, [nx]);

  const n = done.length;
  const xA = n === 0 ? miniXs[0] : miniXs[Math.min(n, nx-1)];
  
  const isFugaNow = answered && lastWasWrong;
  const xf1 = isFugaNow ? miniXs[Math.max(0, preguntaActiva-1)] : 0;
  const xf2 = isFugaNow ? miniXs[preguntaActiva] : 0;

  return (
    <svg viewBox="0 0 300 48" style={{ width: '100%', display: 'block' }}>
      <rect width="300" height="48" fill="#0a1520" />
      <line x1="10" y1="28" x2="290" y2="28" stroke="#1a2a3a" strokeWidth="5" strokeLinecap="round" strokeDasharray="8 5" />
      <line x1="10" y1="28" x2={xA} y2="28" stroke={CFG.color} strokeWidth="5" strokeLinecap="round" />
      
      {isFugaNow && (
        <line x1={xf1} y1="28" x2={xf2} y2="28" stroke="#e24b4a" strokeWidth="5" strokeLinecap="round" strokeDasharray="5 3" opacity="1" />
      )}
      
      {isFugaNow && [0,1,2].map(q => (
         <ellipse 
            key={q}
            cx={xf1 + (xf2 - xf1) * (0.2 + q*0.3)} 
            cy={36+q}
            rx="1.2" ry="2" fill="#e24b4a" opacity={0.85-q*0.2}
            style={{ animation: `gota-fuga ${0.55+q*0.18}s ease-in infinite ${q*0.1}s` }}
         />
      ))}
      
      {nx === 21 && (
        <>
          <line x1={(miniXs[6]+miniXs[7])/2} y1="18" x2={(miniXs[6]+miniXs[7])/2} y2="38" stroke="#1e2a3a" strokeWidth=".8" strokeDasharray="2 2" />
          <line x1={(miniXs[13]+miniXs[14])/2} y1="18" x2={(miniXs[13]+miniXs[14])/2} y2="38" stroke="#1e2a3a" strokeWidth=".8" strokeDasharray="2 2" />
        </>
      )}

      {miniXs.map((x, i) => {
        const r = (i===0 || i===nx-1) ? 4 : 3.5;
        const isDone = done.includes(i);
        const isFallo = fallos.includes(i);
        const fill = isFallo ? '#5a1a1a' : '#1a2a3a';
        const stroke = isFallo ? '#e24b4a' : isDone ? CFG.color2 : '#2a3a4a';
        return (
          <circle key={i} cx={x} cy="28" r={r} fill={fill} stroke={stroke} strokeWidth="1" />
        );
      })}

      <text 
        x="150" y="44" 
        textAnchor="middle" 
        fontSize="7" 
        fill={isFugaNow ? '#e24b4a' : n > 0 ? CFG.color2 : '#2a4a3a'} 
        fontFamily="sans-serif"
      >
        {isFugaNow 
          ? `🔴 FUGA en tramo ${preguntaActiva+1}` 
          : n === 0 ? 'Construyendo...' : `🔵 ${n}/${nx} tramos instalados`}
      </text>
    </svg>
  );
}
