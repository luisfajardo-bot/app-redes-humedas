import React, { useMemo } from 'react';
import { CFG } from '../data/config';

export default function RedSVG({ done, fallos, total }) {
  const nx = total;
  const { nodoXs, acomXs } = useMemo(() => {
    const n = [];
    for(let i=0; i<nx; i++){
      n.push(Math.round(20 + i*(300/(Math.max(nx-1,1)))));
    }
    const a = [];
    const ac_count = Math.min(3, Math.floor(nx/3));
    for(let j=0; j<ac_count; j++) {
      a.push(n[Math.floor((j+1)*nx/(ac_count+1))]);
    }
    return { nodoXs: n, acomXs: a };
  }, [nx]);

  return (
    <svg viewBox="0 0 340 180" style={{ width: '100%', display: 'block' }}>
      <rect width="340" height="180" fill="#0a1520" rx="8" />
      <rect x="0" y="115" width="340" height="38" fill="#0c1520" />
      <line x1="0" y1="115" x2="340" y2="115" stroke="#1e2a3a" strokeWidth="1" />
      <rect x="0" y="90" width="340" height="25" fill="#0b1520" />
      <text x="170" y="131" textAnchor="middle" fontSize="7.5" fill="#2a3a4a" fontFamily="sans-serif">CALZADA VEHICULAR</text>
      <text x="170" y="103" textAnchor="middle" fontSize="7" fill="#2a3a4a" fontFamily="sans-serif">ANDÉN</text>
      <line x1={nodoXs[0]} y1="75" x2={nodoXs[nx-1]} y2="75" stroke="#1a2a3a" strokeWidth="7" strokeLinecap="round" strokeDasharray="10 6" />
      
      {acomXs.map((x, j) => {
        const trig = Math.floor((j+1)*nx/(acomXs.length+1));
        const active = done.length >= trig;
        return (
          <g key={'ac'+j}>
            <line x1={x} y1="75" x2={x} y2="24" stroke={active ? CFG.color : "#1a2a3a"} strokeWidth="2.5" strokeDasharray={active ? "none" : "4 3"} />
            <g opacity={active ? "1" : ".2"}>
              <rect x={x-10} y="10" width="20" height="14" rx="2" fill="#4a6a5a" />
              <polygon points={`${x-10},10 ${x+10},10 ${x},4`} fill="#3a5a4a" />
              {active && <circle cx={x} cy="15" r="2.5" fill={CFG.color2} opacity=".85" className="rd-dyn" />}
            </g>
          </g>
        );
      })}

      {done.map((dIdx, k) => {
        const ef = fallos.includes(dIdx);
        const x2 = nodoXs[dIdx];
        const px = dIdx === 0 ? nodoXs[0] : nodoXs[dIdx - 1]; // Segment connecting from px to x2
        if (dIdx === 0) return null; // First node means just node, segment from 0 to 0 is nothing
        
        return (
          <g key={'seg'+k}>
            <line x1={px} y1="75" x2={x2} y2="75" stroke={ef ? '#e24b4a' : CFG.color} strokeWidth={ef ? 6 : 7} strokeLinecap="round" strokeDasharray={ef ? '6 4' : 'none'} className="rd-dyn" />
            {ef && [0,1,2].map(q => {
              const gx = px + (x2-px)*(0.2+q*0.3);
              return (
                <ellipse key={q} cx={gx} cy={83+q} rx="1.8" ry="2.8" fill="#e24b4a" opacity={0.85-q*0.15} style={{ animation: `gota-fuga ${0.65+q*0.18}s ease-in infinite ${q*0.1}s` }} />
              );
            })}
            {ef && <line x1={x2-5} y1="69" x2={x2+4} y2="81" stroke="#e24b4a" strokeWidth="1.2" strokeLinecap="round" />}
          </g>
        );
      })}

      {nodoXs.map((x, i) => {
        const r = (i===0 || i===nx-1) ? 7.5 : 6;
        const isDone = done.includes(i);
        const isFallo = fallos.includes(i);
        const fill = isFallo ? '#5a1a1a' : isDone ? '#1a2a3a' : '#1a2a3a';
        const stroke = isFallo ? '#e24b4a' : isDone ? CFG.color2 : CFG.color;
        const sw = isDone || isFallo ? '1.8' : '1.2';
        return (
          <g key={'nd'+i}>
            <circle cx={x} cy="75" r={r} fill={fill} stroke={stroke} strokeWidth={sw} />
            <text x={x} y="79" textAnchor="middle" fontSize={r-1} fontFamily="sans-serif" fill="#3a6a4a">{CFG.stations[i].icon}</text>
          </g>
        );
      })}

      <line x1="6" y1="75" x2="6" y2="115" stroke="#2a3a4a" strokeWidth=".5" strokeDasharray="2 2" />
      <text x="9" y="99" fontSize="5.5" fill="#2a3a4a" fontFamily="sans-serif">≥80cm</text>
      <text x="4" y="177" fontSize="5.5" fill="#2a3a4a" fontFamily="sans-serif">NC-025: rasante→lomo ≥ 80 cm</text>
    </svg>
  );
}
