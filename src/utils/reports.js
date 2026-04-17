export function descargarPDF(gameState, CFG) {
  const { fallos, pts, participantes, historial, done } = gameState;
  const total = CFG.stations.length;
  const sinFugas = fallos.length === 0;
  const pct = Math.round((1 - fallos.length / total) * 100);
  
  let estadoCalidad = 'bueno';
  if (pct <= 80) estadoCalidad = 'malo';
  else if (pct < 90) estadoCalidad = 'regular';

  const ahora = new Date().toLocaleString('es-CO');
  const G_COLOR = CFG.color;
  const cOk = estadoCalidad === 'bueno' ? G_COLOR : estadoCalidad === 'regular' ? '#b07000' : '#c03020';

  let partRows = '';
  if (participantes.length > 0) {
    for (let p = 0; p < participantes.length; p++) {
      const pp = participantes[p];
      partRows += `<tr><td>${p + 1}</td><td style="font-weight:${p === 0 ? '700' : '400'}">${pp.nombre}</td><td>${pp.cedula}</td><td style="color:${G_COLOR}">${pp.rol}</td></tr>`;
    }
  } else {
    partRows = '<tr><td>—</td><td>No registrado</td><td>—</td><td>—</td></tr>';
  }

  let pregRows = '';
  for (let i = 0; i < CFG.stations.length; i++) {
    const s = CFG.stations[i];
    const h = historial.find(hi => hi.idx === i);
    const ef = fallos.includes(i);
    const isDone = done.includes(i);
    
    const elegida = h ? `${String.fromCharCode(65 + h.elegida)}. ${s.opts[h.elegida]}` : 'No respondida';
    const correcta = `${String.fromCharCode(65 + s.cor)}. ${s.opts[s.cor]}`;
    
    pregRows += `<tr><td style="font-weight:700">${i + 1}</td><td style="font-size:10px;color:${G_COLOR}">${s.badge}</td>` +
      `<td>${s.icon} ${s.titulo}</td>` +
      `<td style="font-size:10px">${s.q.length > 90 ? s.q.substring(0, 90) + '...' : s.q}</td>` +
      `<td class="${ef ? 'bad' : 'ok'}" style="font-size:10px">${elegida}</td>` +
      `<td class="ok" style="font-size:10px">${correcta}</td>` +
      `<td style="text-align:center;font-size:13px">${!isDone ? '⏳' : ef ? '❌' : '✅'}</td></tr>`;
  }

  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Reporte ${CFG.titulo}</title>` +
    '<style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:Arial,sans-serif;padding:24px;font-size:12px;line-height:1.5}' +
    `h1{font-size:17px;color:${G_COLOR};margin-bottom:3px}h2{font-size:12px;color:${G_COLOR};margin-bottom:13px;font-weight:400}` +
    `.meta{background:#f5fff5;border:1px solid ${G_COLOR}44;border-radius:6px;padding:11px;margin-bottom:15px}` +
    'table{width:100%;border-collapse:collapse;margin-bottom:15px;font-size:11px}' +
    `th{background:${G_COLOR};color:#fff;padding:6px 8px;text-align:left}` +
    'td{padding:5px 8px;border-bottom:1px solid #e8e8e8;vertical-align:top}' +
    'tr:nth-child(even) td{background:#f8fff8}' +
    `.ok{color:${G_COLOR};font-weight:700}.bad{color:#c03020;font-weight:700}` +
    `h3{font-size:12px;color:${G_COLOR};margin:14px 0 7px;border-bottom:2px solid ${G_COLOR}44;padding-bottom:4px}` +
    '.footer{font-size:10px;color:#888;text-align:center;margin-top:14px;border-top:1px solid #eee;padding-top:7px}' +
    '@media print{body{-webkit-print-color-adjust:exact;print-color-adjust:exact}}</style></head><body>' +
    `<h1>${CFG.icon} Certificado de Resultados — ${CFG.titulo || 'Redes Húmedas'}</h1>` +
    '<h2>Manos que Transforman_ICEIN · Universidad de los Andes</h2>' +
    '<div class="meta"><table><tr>' +
    `<td style="font-weight:700;color:${G_COLOR};width:110px">Evaluación:</td><td>${CFG.titulo || ''}</td>` +
    `<td style="font-weight:700;color:${G_COLOR};width:80px">Fecha:</td><td>${ahora}</td>` +
    '</tr><tr>' +
    `<td style="font-weight:700;color:${G_COLOR}">Puntuación:</td><td style="font-size:15px;font-weight:700;color:${cOk}">${pts} pts</td>` +
    `<td style="font-weight:700;color:${G_COLOR}">Calidad:</td><td style="font-weight:700;color:${cOk}">${pct}% ${estadoCalidad === 'bueno' ? '✅ Excelente' : estadoCalidad === 'regular' ? '⚠️ Funcional' : '❌ Debe mejorar'}</td>` +
    '</tr><tr>' +
    `<td style="font-weight:700;color:${G_COLOR}">Red:</td>` +
    `<td colspan="3" style="font-weight:700;color:${cOk}">${estadoCalidad === 'bueno' ? '🌳 Instalada correctamente — Sin fugas — NC-025 cumplida' : estadoCalidad === 'regular' ? '🌿 Funcional con fugas' : `🥀 Con ${fallos.length} fuga(s) — Requiere reparación`}</td>` +
    '</tr></table></div>' +
    '<h3>👥 Participantes</h3>' +
    `<table><thead><tr><th>#</th><th>Nombre completo</th><th>Número de cédula</th><th>Rol</th></tr></thead><tbody>${partRows}</tbody></table>` +
    `<h3>📋 Detalle de respuestas (${CFG.stations.length} preguntas)</h3>` +
    `<table><thead><tr><th>#</th><th>Módulo</th><th>Tema</th><th>Pregunta</th><th>Respuesta elegida</th><th>Respuesta correcta</th><th>Resultado</th></tr></thead><tbody>${pregRows}</tbody></table>` +
    `<div class="footer">Certificado generado automáticamente · ${CFG.titulo || 'Redes Húmedas'} · Manos que Transforman_ICEIN · Universidad de los Andes · ${ahora}</div>` +
    '</body></html>';

  const win = window.open('', '_blank');
  if (win) {
    win.document.write(html);
    win.document.close();
    setTimeout(() => { win.print(); }, 600);
  } else {
    alert("Por favor permite los pop-ups para generar el reporte de PDF.");
  }
}

export function descargarCSV(gameState, CFG) {
  const { fallos, pts, participantes, historial, done } = gameState;
  const total = CFG.stations.length;
  const sinFugas = fallos.length === 0;
  const pct = Math.round((1 - fallos.length / total) * 100);
  let estadoCalidad = 'bueno';
  if (pct <= 80) estadoCalidad = 'malo';
  else if (pct < 90) estadoCalidad = 'regular';
  
  const ahora = new Date().toLocaleString('es-CO');

  const esc = (v) => {
    const s = String(v || '');
    return (s.indexOf(',') >= 0 || s.indexOf('"') >= 0 || s.indexOf('\n') >= 0) ? `"${s.replace(/"/g, '""')}"` : s;
  };

  let rows = [
    [`REPORTE DE RESULTADOS — ${(CFG.titulo || 'Redes Húmedas').toUpperCase()}`],
    ['Manos que Transforman_ICEIN · Universidad de los Andes'],
    ['Fecha', ahora, 'Puntuación', pts, 'Calidad', `${pct}%`, 'Fugas', fallos.length, 'Estado', estadoCalidad === 'bueno' ? 'Sin fugas' : estadoCalidad === 'regular' ? 'Funcional con fugas' : 'Red dañada'],
    [], ['PARTICIPANTES'], ['#', 'Nombre completo', 'Cédula', 'Rol']
  ];

  if (participantes.length > 0) {
    participantes.forEach((p, index) => {
      rows.push([index + 1, p.nombre, p.cedula, p.rol]);
    });
  } else {
    rows.push(['—', 'No registrado', '—', '—']);
  }

  rows.push([]);
  rows.push(['DETALLE DE RESPUESTAS']);
  rows.push(['#', 'Módulo', 'Tema', 'Pregunta completa', 'Respuesta elegida', 'Letra elegida', 'Respuesta correcta', 'Letra correcta', 'Resultado']);

  for (let i = 0; i < CFG.stations.length; i++) {
    const s = CFG.stations[i];
    const h = historial.find(hi => hi.idx === i);
    const ef = fallos.includes(i);
    const isDone = done.includes(i);

    rows.push([
      i + 1, s.badge, s.titulo, s.q,
      h ? s.opts[h.elegida] : 'No respondida',
      h ? String.fromCharCode(65 + h.elegida) : '—',
      s.opts[s.cor], String.fromCharCode(65 + s.cor),
      !isDone ? 'Pendiente' : ef ? 'INCORRECTO' : 'CORRECTO'
    ]);
  }

  const csv = rows.map(r => r.map(esc).join(',')).join('\n');
  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = CFG.csvName || 'Resultados.csv';
  a.click();
}
