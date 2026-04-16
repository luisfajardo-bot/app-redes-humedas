import { useState } from 'react';
import { CFG } from '../data/config';

export function useGameState() {
  const [currentScreen, setCurrentScreen] = useState('portada'); // 'portada', 'registro', 'juego', 'pregunta', 'resultado'
  
  const [participantes, setParticipantes] = useState([]);
  
  const [cur, setCur] = useState(0); // current question index to answer
  const [pts, setPts] = useState(0);
  const [done, setDone] = useState([]); // indices of answered sections
  const [fallos, setFallos] = useState([]); // indices of explicitly failed sections
  const [historial, setHistorial] = useState([]);
  
  const [preguntaActiva, setPreguntaActiva] = useState(null); // which question screen is showing
  const [answered, setAnswered] = useState(false);
  const [lastWasWrong, setLastWasWrong] = useState(false);
  const [btnRepair, setBtnRepair] = useState(false);

  const initGame = () => {
    setCurrentScreen('juego');
  };

  const registerParticipants = (parts) => {
    setParticipantes(parts);
    initGame();
  };

  const openPreg = (idx) => {
    setPreguntaActiva(idx);
    setAnswered(false);
    setLastWasWrong(false);
    setCurrentScreen('pregunta');
  };

  const responder = (idx, chosen, correcta) => {
    if (answered) return;
    setAnswered(true);

    const s = CFG.stations[idx];
    const ok = chosen === correcta;

    if (ok) {
      setPts(prev => prev + (lastWasWrong ? 50 : 100));
      setBtnRepair(false);
    } else {
      setPts(prev => Math.max(0, prev - 20));
      setLastWasWrong(true);
      setBtnRepair(true);
    }

    setHistorial(prev => {
      const already = prev.find(h => h.idx === idx);
      if (already) return prev;
      return [...prev, {
        idx,
        elegida: chosen,
        correcta: s.cor,
        correcto: ok,
        pregunta: s.q,
        titulo: s.titulo,
        opts: s.opts,
        badge: s.badge
      }];
    });
  };

  const confirmar = () => {
    if (lastWasWrong) {
      if (!fallos.includes(preguntaActiva)) setFallos(prev => [...prev, preguntaActiva]);
    }
    
    setDone(prev => {
      if (!prev.includes(preguntaActiva)) {
        const nDone = [...prev, preguntaActiva];
        setCur(nDone.length);
        
        if (nDone.length === CFG.stations.length) {
          setTimeout(() => setCurrentScreen('resultado'), 0);
        } else {
          setCurrentScreen('juego');
        }
        return nDone;
      }
      return prev;
    });
  };

  const resetGame = () => {
    setCur(0);
    setPts(0);
    setDone([]);
    setFallos([]);
    setHistorial([]);
    setCurrentScreen('portada');
  };

  return {
    currentScreen, setCurrentScreen,
    participantes, registerParticipants,
    cur, pts, done, fallos, historial,
    preguntaActiva, openPreg,
    answered, lastWasWrong, btnRepair, responder, confirmar,
    initGame, resetGame
  };
}
