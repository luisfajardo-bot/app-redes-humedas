import React, { useEffect, useState } from 'react';
import { CFG } from '../data/config';

export default function ArbolSVG({ sinFugas }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Orchestrate animation steps depending on tree state
    const t1 = setTimeout(() => setStep(1), 100);
    const t2 = setTimeout(() => setStep(2), 800);
    const t3 = setTimeout(() => setStep(3), 1200);
    const t4 = setTimeout(() => setStep(4), 1500);
    const t5 = setTimeout(() => setStep(5), 1800);
    const t6 = setTimeout(() => setStep(6), 2000);
    const t7 = setTimeout(() => setStep(7), 2200);

    return () => { [t1,t2,t3,t4,t5,t6,t7].forEach(clearTimeout); };
  }, []);

  if (sinFugas) {
    return (
      <svg viewBox="0 0 380 260" style={{ width: '100%', display: 'block' }}>
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a2a10"/>
            <stop offset="100%" stopColor="#0d3a18"/>
          </linearGradient>
        </defs>
        <rect width="380" height="260" fill="url(#sky)"/>
        <ellipse cx="190" cy="246" rx="200" ry="20" fill="#1a3a10"/>
        <circle cx="48" cy="34" r="16" fill="#f0d020" opacity=".85"/>
        <path d="M280 26 Q285 22 290 26" fill="none" stroke="#4cde9a" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M300 18 Q305 14 310 18" fill="none" stroke="#4cde9a" strokeWidth="1.2" strokeLinecap="round"/>
        
        {step >= 1 && <rect x="182" y="188" width="16" height="52" rx="4" fill="#5a3a10" style={{ transformOrigin: '190px 240px', animation: 'crecer .8s ease-out forwards' }} />}
        
        {step >= 1 && [
          [170,240,155,250], [210,240,225,250]
        ].map((r, i) => <line key={i} x1={r[0]} y1={r[1]} x2={r[2]} y2={r[3]} stroke="#5a3a10" strokeWidth="2" strokeLinecap="round" />)}

        {step >= 1 && [
          {cx:190, cy:182, rx:44, ry:28, fill:'#2a8a20', d:'0.8s'},
          {cx:190, cy:164, rx:36, ry:26, fill:'#3aaa28', d:'1s'},
          {cx:167, cy:176, rx:26, ry:20, fill:'#2a9a22', d:'1.1s'},
          {cx:213, cy:176, rx:26, ry:20, fill:'#2a9a22', d:'1.1s'},
          {cx:190, cy:144, rx:28, ry:20, fill:'#4aca30', d:'1.3s'},
          {cx:172, cy:154, rx:20, ry:16, fill:'#3ab828', d:'1.4s'},
          {cx:208, cy:154, rx:20, ry:16, fill:'#3ab828', d:'1.4s'},
          {cx:190, cy:128, rx:20, ry:15, fill:'#5ade38', d:'1.6s'}
        ].map((h, i) => <ellipse key={i} cx={h.cx} cy={h.cy} rx={h.rx} ry={h.ry} fill={h.fill} opacity=".92" style={{ transformOrigin: `${h.cx}px 240px`, animation: `hoja-ap .5s ease-out ${h.d} both` }} />)}

        {step >= 6 && [
          [180,148],[204,145],[175,165],[208,162],[190,132]
        ].map((f, i) => <circle key={i} cx={f[0]} cy={f[1]} r="4.5" fill="#e03020" opacity=".9" />)}

        {step >= 4 && (
          <>
            <rect x="55" y="232" width="80" height="7" rx="3.5" fill="#1D9E75" opacity=".8" />
            <rect x="100" y="218" width="5" height="15" rx="2.5" fill="#4cde9a" opacity=".9" style={{ transformOrigin: '102px 232px', animation: 'crecer .5s ease-out forwards' }} />
            {[
              [102,216,-10,-28], [102,216,0,-32], [102,216,12,-26], [102,216,20,-16], [102,216,-20,-18]
            ].map((gp, i) => <ellipse key={i} cx={gp[0]} cy={gp[1]} rx="2.5" ry="3.5" fill="#4cde9a" opacity=".9" style={{ '--dx': `${gp[2]}px`, '--dy': `${gp[3]}px`, animation: `gota-arco .75s ease-out ${1.8+i*0.08}s both` }} />)}
          </>
        )}

        {step >= 7 && (
          <>
            <Personas f={true} list={[{x:58}, {x:278}, {x:318}]} />
            {[
              ['⭐',235,46], ['✨',258,28], ['🌟',338,42], ['💧',348,66], ['🍃',318,24]
            ].map((s, i) => <text key={i} x={s[1]} y={s[2]} textAnchor="middle" fontSize="13" fontFamily="sans-serif" style={{ animation: `hoja-ap .4s ease-out ${0.2+i*0.15}s both` }}>{s[0]}</text>)}
            <text x="190" y="20" textAnchor="middle" fontSize="10" fontFamily="sans-serif" fill="#4cde9a" fontWeight="bold" style={{ animation: 'hoja-ap .5s ease-out .8s both' }}>✅ Red perfecta · Agua para todos · NC-025 cumplida</text>
          </>
        )}
      </svg>
    );
  } else {
    return (
      <svg viewBox="0 0 380 260" style={{ width: '100%', display: 'block' }}>
        <defs>
          <linearGradient id="sky2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a0e04"/>
            <stop offset="100%" stopColor="#2a1a0a"/>
          </linearGradient>
        </defs>
        <rect width="380" height="260" fill="url(#sky2)"/>
        <ellipse cx="190" cy="246" rx="200" ry="20" fill="#1a1004"/>
        <ellipse cx="78" cy="32" rx="28" ry="11" fill="#2a2a2a" opacity=".6"/>
        <ellipse cx="298" cy="26" rx="24" ry="10" fill="#2a2a2a" opacity=".5"/>
        
        {step >= 1 && <rect x="183" y="190" width="13" height="48" rx="3" fill="#4a3010" style={{ transformOrigin: '189px 238px', animation: 'crecer .8s ease-out forwards' }} />}
        
        {step >= 1 && [
          [183,196,158,168], [196,196,222,168], [183,210,150,190],
          [196,210,230,190], [164,174,144,156], [222,174,242,156]
        ].map((r, i) => <line key={i} x1={r[0]} y1={r[1]} x2={r[2]} y2={r[3]} stroke="#4a3010" strokeWidth="2.5" strokeLinecap="round" style={{ animation: `crecer .5s ease-out ${0.3+i*0.06}s both` }} />)}

        {step >= 2 && [
          [164,172],[216,170],[148,164],[232,160],[158,186],[224,184]
        ].map((h, i) => <ellipse key={i} cx={h[0]} cy={h[1]} rx="7" ry="4.5" fill="#7a5510" opacity=".7" style={{ animation: `seco-cae 1.4s ease-in ${1+i*0.2}s forwards` }} />)}

        {step >= 3 && (
          <>
            <rect x="55" y="232" width="80" height="7" rx="3.5" fill="#7a3010" opacity=".7" />
            <line x1="124" y1="228" x2="134" y2="240" stroke="#e24b4a" strokeWidth="2" strokeLinecap="round" />
            <line x1="134" y1="228" x2="124" y2="240" stroke="#e24b4a" strokeWidth="2" strokeLinecap="round" />
            {[0,1,2,3,4].map(i => <ellipse key={i} cx={90+i*7} cy="232" rx="2" ry="3" fill="#e24b4a" opacity=".7" style={{ animation: `gota-fuga ${0.55+Math.random()*0.4}s ease-in ${i*0.11}s infinite` }} />)}
            <ellipse cx="95" cy="244" rx="16" ry="4.5" fill="#8a2010" opacity=".45" />
            <text x="95" y="243" textAnchor="middle" fontSize="7" fontFamily="sans-serif" fill="#e24b4a" opacity=".9">FUGA</text>
            {[
              [190,188], [175,182], [205,186]
            ].map((m, i) => <ellipse key={i} cx={m[0]} cy={m[1]} rx="5" ry="3.5" fill="#6a4a10" opacity=".3" style={{ animation: `humo 2s ease-out ${i*0.3}s infinite` }} />)}
          </>
        )}

        {step >= 5 && <Personas f={false} list={[{x:58}, {x:278}, {x:318}]} />}
        
        {step >= 6 && <text x="190" y="18" textAnchor="middle" fontSize="10" fontFamily="sans-serif" fill="#e24b4a" fontWeight="bold" style={{ animation: 'hoja-ap .5s ease-out .5s both' }}>❌ Red con fugas · Sin agua · Reparar empalmes</text>}
      </svg>
    );
  }
}

function Personas({ f, list }) {
  const col = f ? '#2a8a40' : '#7a5a30';
  return (
    <>
      {list.map((p, i) => (
        <g key={i} style={{ animation: f ? 'p-salta 1s ease-in-out infinite' : 'p-triste 3s ease-in-out infinite' }}>
          <circle cx={p.x} cy="218" r="8" fill="#d4a870" />
          <rect x={p.x-5} y="226" width="10" height="13" rx="2.5" fill={col} />
          <line x1={p.x-3} y1="239" x2={p.x-4} y2="250" stroke={col} strokeWidth="3.5" strokeLinecap="round" />
          <line x1={p.x+3} y1="239" x2={p.x+4} y2="250" stroke={col} strokeWidth="3.5" strokeLinecap="round" />
          <circle cx={p.x-2} cy="215" r="1" fill="#3a1a08" />
          <circle cx={p.x+2} cy="215" r="1" fill="#3a1a08" />
          
          {f ? (
            <>
              <line x1={p.x-5} y1="230" x2={p.x-12} y2="222" stroke={col} strokeWidth="2.5" strokeLinecap="round" />
              <line x1={p.x+5} y1="230" x2={p.x+12} y2="222" stroke={col} strokeWidth="2.5" strokeLinecap="round" />
              <path d={`M${p.x-3} 222 Q${p.x} 226 ${p.x+3} 222`} fill="none" stroke="#5a2a10" strokeWidth="1.2" strokeLinecap="round" />
              {i === 0 && (
                <>
                  <circle cx={p.x+11} cy="207" r="7" fill="#4cde9a" opacity=".8" />
                  <text x={p.x+11} y="210" textAnchor="middle" fontSize="7" fontFamily="sans-serif">💧</text>
                </>
              )}
            </>
          ) : (
            <>
              <line x1={p.x-5} y1="230" x2={p.x-11} y2="238" stroke={col} strokeWidth="2.5" strokeLinecap="round" />
              <line x1={p.x+5} y1="230" x2={p.x+11} y2="238" stroke={col} strokeWidth="2.5" strokeLinecap="round" />
              <path d={`M${p.x-3} 224 Q${p.x} 221 ${p.x+3} 224`} fill="none" stroke="#5a2a10" strokeWidth="1.2" strokeLinecap="round" />
              <ellipse cx={p.x+3} cy="220" rx="1.2" ry="2" fill="#4a8aba" opacity=".8" />
            </>
          )}
        </g>
      ))}
    </>
  );
}
