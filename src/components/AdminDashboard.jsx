import React, { useEffect, useState } from 'react';
import { CFG } from '../data/config';
import { db } from '../firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { descargarPDF } from '../utils/reports';

export default function AdminDashboard({ gameState }) {
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorDb, setErrorDb] = useState(false);

  useEffect(() => {
    const fetchResultados = async () => {
      if (!db) {
        setErrorDb(true);
        setLoading(false);
        return;
      }
      try {
        const q = query(collection(db, "resultados"), orderBy("fecha", "desc"));
        const querySnapshot = await getDocs(q);
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ id: doc.id, ...doc.data() });
        });
        setResultados(docs);
      } catch (e) {
        console.error("Error obteniendo documentos: ", e);
      } finally {
        setLoading(false);
      }
    };
    fetchResultados();
  }, []);

  const handleDescargarTodoCSV = () => {
    if (resultados.length === 0) {
      alert("No hay resultados para descargar.");
      return;
    }

    const esc = (v) => {
      const s = String(v || '');
      return (s.indexOf(',') >= 0 || s.indexOf('"') >= 0 || s.indexOf('\n') >= 0) ? `"${s.replace(/"/g, '""')}"` : s;
    };

    let headers = [
      'Fecha', 'Participantes', 'Puntuación', 'Calidad', 'Fugas', 'Estado'
    ];

    CFG.stations.forEach((s, i) => {
      headers.push(`P${i+1}: ${s.q}`);
    });

    let rows = [
      [`REPORTE CONSOLIDADO CON DETALLES — ${(CFG.titulo || 'Redes Húmedas').toUpperCase()}`],
      ['Manos que Transforman_ICEIN · Universidad de los Andes'],
      [],
      headers
    ];

    resultados.forEach(res => {
      const parts = res.participantes && res.participantes.length > 0
        ? res.participantes.map(p => p.nombre).join(' / ')
        : 'No registrados';
      
      const total = CFG.stations.length;
      const numFallos = res.fallos ? res.fallos.length : 0;
      const pct = Math.round((1 - numFallos / total) * 100);
      
      let estadoCalidad = 'bueno';
      if (pct <= 80) estadoCalidad = 'malo';
      else if (pct < 90) estadoCalidad = 'regular';

      const rowData = [
        new Date(res.fecha).toLocaleString('es-CO'),
        parts,
        res.pts,
        `${pct}%`,
        numFallos,
        estadoCalidad === 'bueno' ? 'Sin fugas' : estadoCalidad === 'regular' ? 'Funcional con fugas' : 'Red dañada'
      ];

      CFG.stations.forEach((s, idx) => {
        const ef = res.fallos ? res.fallos.includes(idx) : false;
        const isDone = res.done ? res.done.includes(idx) : false;

        // Si falló o no la respondió (pendiente), le damos 0. Si la hizo bien, 1.
        rowData.push(!isDone || ef ? 0 : 1);
      });

      rows.push(rowData);
    });

    const csv = rows.map(r => r.map(esc).join(',')).join('\n');
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `Consolidado_Resultados.csv`;
    a.click();
  };

  const verPDFIndividual = (resultado) => {
    // Reconstruimos un fake gameState para el reporte
    const fakeGameState = {
      fallos: resultado.fallos || [],
      pts: resultado.pts || 0,
      participantes: resultado.participantes || [],
      historial: resultado.historial || [],
      done: resultado.done || []
    };
    descargarPDF(fakeGameState, CFG);
  };

  return (
    <div className="screen active" style={{ padding: '20px', background: '#f5fff5', minHeight: '100vh', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', background: '#fff', borderRadius: '12px', padding: '25px', boxShadow: '0 4px 14px rgba(0,0,0,0.1)' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ color: CFG.color, margin: 0 }}>📊 Panel de Administrador</h2>
          <button 
            onClick={() => gameState.setCurrentScreen('portada')}
            style={{ background: '#eee', border: 'none', padding: '8px 12px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            ← Salir
          </button>
        </div>

        {errorDb && (
          <div style={{ background: '#ffebee', padding: '15px', borderRadius: '8px', color: '#c62828', marginBottom: '20px', border: '1px solid #ffcdd2' }}>
            <strong>Falta configurar Firebase:</strong> Aún no has enlazado tu proyecto de base de datos. 
            Por favor, abre el archivo <code>src/firebase.js</code> y coloca allí las credenciales de tu consola de Firebase.
          </div>
        )}

        {loading && !errorDb ? (
          <p>Cargando resultados de la nube...</p>
        ) : (
          <>
            <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
              <button 
                onClick={handleDescargarTodoCSV}
                style={{ background: CFG.color, color: '#fff', border: 'none', padding: '10px 15px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}
                disabled={resultados.length === 0}
              >
                <span>📊</span> Descargar TODO en Excel (CSV)
              </button>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ background: CFG.color, color: '#fff' }}>
                    <th style={{ padding: '10px' }}>Fecha</th>
                    <th style={{ padding: '10px' }}>Participantes</th>
                    <th style={{ padding: '10px' }}>Puntaje</th>
                    <th style={{ padding: '10px' }}>Fugas</th>
                    <th style={{ padding: '10px' }}>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {resultados.length === 0 ? (
                    <tr>
                      <td colSpan="5" style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
                        No hay respuestas registradas aún.
                      </td>
                    </tr>
                  ) : (
                    resultados.map(res => (
                      <tr key={res.id} style={{ borderBottom: '1px solid #eee' }}>
                        <td style={{ padding: '10px' }}>{new Date(res.fecha).toLocaleString()}</td>
                        <td style={{ padding: '10px' }}>
                          {res.participantes && res.participantes.length > 0 ? res.participantes.map(p => p.nombre).join(' / ') : 'Anonimo'}
                        </td>
                        <td style={{ padding: '10px', fontWeight: 'bold' }}>{res.pts}</td>
                        <td style={{ padding: '10px', color: res.fallos && res.fallos.length > 0 ? '#e24b4a' : CFG.color2 }}>
                          {res.fallos ? res.fallos.length : 0}
                        </td>
                        <td style={{ padding: '10px' }}>
                          <button 
                            onClick={() => verPDFIndividual(res)}
                            style={{ background: '#f0f0f0', border: '1px solid #ccc', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem' }}
                          >
                            Ver PDF
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
