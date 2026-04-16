export const CFG = {
  "pageTitle": "Redes Húmedas — Evaluación 3 Días",
  "icon": "🏗️",
  "titulo": "Evaluación 3 Días — Redes Húmedas",
  "inst": "Evaluación completa · 21 preguntas · Días 1, 2 y 3",
  "temasTitle": "📚 Temas evaluados",
  "temas": "Día 1: Acueducto · Día 2: Procedimientos de instalación · Día 3: Alcantarillado y pozos de inspección",
  "btnLabel": "Comenzar evaluación completa",
  "color": "#1D9E75",
  "color2": "#4cde9a",
  "cbg": "#0a1f14",
  "csvName": "Resultados_Evaluacion_3Dias.csv",
  "stations": [
    {
      "icon": "💧",
      "titulo": "¿Qué es una red húmeda?",
      "badge": "Día 1 · Módulo 1",
      "ctx": "Las redes húmedas son sistemas de tuberías subterráneas que transportan agua y residuos líquidos en zonas urbanas. Incluyen: acueducto (presurizado), alcantarillado sanitario (gravedad, aguas negras) y pluvial (gravedad, lluvias). El acueducto va SIEMPRE por encima del alcantarillado para proteger la salud pública.",
      "q": "¿Por qué la red de acueducto se instala SIEMPRE por encima del alcantarillado?",
      "opts": [
        "Para que fluya más rápido por gravedad",
        "Para evitar que fugas del alcantarillado contaminen el agua potable",
        "Porque es más fácil conectar la acometida",
        "Por norma de color: azul arriba, gris abajo"
      ],
      "cor": 1,
      "fb": "✓ Fugas del alcantarillado contaminarían el acueducto si estuviera debajo. La separación vertical protege la salud pública.",
      "wfb": "⚠️ Razón sanitaria: fugas del alcantarillado contaminarían el acueducto. El acueducto siempre va arriba."
    },
    {
      "icon": "📐",
      "titulo": "Pulgada y pendiente",
      "badge": "Día 1 · Módulo 1",
      "ctx": "Pulgada = 2.54 cm. Un tubo de 4 pulgadas = 10.16 cm de diámetro. Pendiente % = (Altura / Distancia) x 100. En acueducto sirve para válvulas de desaire; en alcantarillado es vital para el flujo por gravedad (velocidad mínima de autolimpieza: 0.6 m/s).",
      "q": "Un tubo de 6 pulgadas tiene un diámetro real de:",
      "opts": [
        "12.70 cm",
        "15.24 cm",
        "6.00 cm",
        "20.32 cm"
      ],
      "cor": 1,
      "fb": "✓ 6 x 2.54 = 15.24 cm. Dato clave para profundidad de excavación y selección de accesorios.",
      "wfb": "⚠️ Siempre: pulgadas x 2.54. 6 x 2.54 = 15.24 cm."
    },
    {
      "icon": "🔩",
      "titulo": "Tipos de tubería y materiales",
      "badge": "Día 1 · Módulo 1",
      "ctx": "PVC: rígido, empalme con unión mecánica y empaque de caucho. Polietileno (PE): flexible, se une por termofusión o electrofusión (calor), NUNCA con adhesivo. Hierro Dúctil (HD): robusto, recubrimiento de cemento, unión espiga-campana. Acero (HA): altas presiones, soldadura calificada y revestimiento anticorrosivo.",
      "q": "Una tubería de polietileno (PE) se empalma correctamente mediante:",
      "opts": [
        "Adhesivo PVC y empaque de caucho",
        "Termofusión o electrofusión (calor)",
        "Unión roscada con teflón",
        "Soldadura eléctrica de arco abierto"
      ],
      "cor": 1,
      "fb": "✓ El PE se une por calor. El adhesivo PVC es incompatible con polietileno.",
      "wfb": "⚠️ El PE NO acepta adhesivos. Solo calor: termofusión o electrofusión."
    },
    {
      "icon": "↩️",
      "titulo": "Accesorios y anclajes",
      "badge": "Día 1 · Módulo 1",
      "ctx": "Codos: cambian de dirección (puntos críticos de presión). Tees: bifurcan el flujo. Collarín: saca una línea domiciliaria sin cortar la principal. Reducciones: unen tubos de diferente diámetro. Tapones: sellan extremos. Anclajes: dados de concreto en codos y tees para contrarrestar la fuerza de la presión interna.",
      "q": "¿Por qué se construyen anclajes de concreto en los codos y tees de una red de acueducto?",
      "opts": [
        "Para decorar y marcar los cambios de dirección",
        "Porque la presión del agua empuja el accesorio y podría desplazarlo",
        "Para reducir la velocidad del agua en los codos",
        "Para elevar la presión en esos puntos"
      ],
      "cor": 1,
      "fb": "✓ En cada cambio de dirección la presión crea una fuerza que empuja el accesorio. El dado de concreto contrarresta esa fuerza y mantiene el sistema hermético.",
      "wfb": "⚠️ Sin anclaje la presión desplaza el codo y la unión se rompe generando fuga."
    },
    {
      "icon": "🔧",
      "titulo": "Técnica de empalme — Unión mecánica",
      "badge": "Día 1 · Módulo 1",
      "ctx": "Unión mecánica (PVC/HD): 1. Asegurar el bisel en el extremo del tubo. 2. Limpiar la campana, el espigo y el empaque de caucho. 3. Aplicar lubricante aprobado. 4. Insertar hasta la marca de tope usando palanca o diferencial. NUNCA golpear directamente con el tubo ni con el brazo de la máquina.",
      "q": "Si NO se aplica lubricante aprobado en un empalme de unión mecánica PVC, ¿qué ocurre?",
      "opts": [
        "Nada, el empaque igual sella",
        "El empaque se daña o desplaza al insertar el tubo, generando fuga",
        "El tubo queda más firme por la fricción",
        "El color del tubo cambia con el tiempo"
      ],
      "cor": 1,
      "fb": "✓ Sin lubricante el empaque se deforma o corre al insertar el espigo, rompiendo el sello. Genera fugas que obligan a desenterrar y repetir.",
      "wfb": "⚠️ El lubricante permite que el empaque quede en posición. Sin él, la fricción lo deforma y genera fuga."
    },
    {
      "icon": "📋",
      "titulo": "Norma NC-025 EAAB",
      "badge": "Día 1 · Módulo 2",
      "ctx": "La NC-025 es la norma de la Empresa de Acueducto de Bogotá para redes menores. Exige: materiales certificados, profundidad mínima de 80 cm desde la rasante hasta la cota lomo del tubo, cama de arena de 10 cm mínimo, y prueba hidráulica antes de tapar la zanja.",
      "q": "¿A qué profundidad mínima exige la NC-025 que quede la tubería de acueducto en PVC (rasante a lomo del tubo)?",
      "opts": [
        "30 cm",
        "50 cm",
        "80 cm",
        "120 cm"
      ],
      "cor": 2,
      "fb": "✓ 80 cm mínimo rasante-lomo. Profundidad total = 80 cm + diámetro + 10 cm de cama de arena. Protege la tubería del peso vehicular.",
      "wfb": "⚠️ La NC-025 exige 80 cm mínimo. Con menos profundidad el peso vehicular fisura la tubería."
    },
    {
      "icon": "⚠️",
      "titulo": "SST: Seguridad en excavaciones",
      "badge": "Día 1 · Módulo 2",
      "ctx": "Golpe de ariete: cierre brusco de válvula genera un martillazo que revienta uniones. Cerrar válvulas siempre lentamente. Relleno: usar arena limpia, NUNCA piedras o escombros. Interferencias: verificar redes de gas, electricidad y telefonía ANTES de excavar. Un cruce no detectado puede romper una red de gas.",
      "q": "¿Cuál es el paso OBLIGATORIO de seguridad antes de iniciar la excavación mecánica con retroexcavadora?",
      "opts": [
        "Instalar la cama de arena primero",
        "Verificar interferencias con redes de gas, electricidad y alcantarillado existentes",
        "Cerrar todas las válvulas del sector",
        "Colocar la cinta de señalización amarilla"
      ],
      "cor": 1,
      "fb": "✓ Verificar interferencias es obligatorio. Un golpe en una línea de gas puede causar explosión.",
      "wfb": "⚠️ Sin verificar interferencias, la retroexcavadora puede romper una red de gas con consecuencias graves."
    },
    {
      "icon": "🗺️",
      "titulo": "Replanteo — Paso 1",
      "badge": "Día 2 · Procedimiento",
      "ctx": "El replanteo materializa el diseño en campo: marcar exactamente dónde va la red ANTES de excavar. Se identifican coordenadas en planos, se señaliza con pintura, se traza con hilo o pita de punto a punto y se verifica la distancia entre ejes. Verificación cruzada obligatoria de interferencias con gas, electricidad y telefonía.",
      "q": "¿Qué herramienta materializa el eje de la tubería en el terreno durante el replanteo?",
      "opts": [
        "Retroexcavadora",
        "Hilo o pita tensada entre estacas",
        "Nivel de burbuja",
        "Manómetro calibrado"
      ],
      "cor": 1,
      "fb": "✓ El hilo o pita define el eje exacto de la tubería en el terreno, guiando la excavación y garantizando que la red quede en la ubicación correcta del plano.",
      "wfb": "⚠️ El hilo tensado entre estacas materializa el eje horizontal. El nivel controla alturas, no el eje horizontal."
    },
    {
      "icon": "⛏️",
      "titulo": "Excavación y cama de arena",
      "badge": "Día 2 · Procedimiento",
      "ctx": "Profundidad total = 80 cm (rasante a lomo) + diámetro del tubo + 10 cm (cama de arena). Ejemplo tubo 4 pulgadas (10.16 cm): 80+10.16+10 = 100.16 cm, aproximadamente 1.00 m. La cama de arena va en el fondo, libre de piedras. El tubo NUNCA puede descansar sobre roca pelada ni sobre el terreno natural sin cama.",
      "q": "¿Cuál es la profundidad total de excavación para una tubería de 6 pulgadas (15.24 cm) según la norma EAAB?",
      "opts": [
        "80 cm",
        "95 cm",
        "106 cm",
        "120 cm"
      ],
      "cor": 2,
      "fb": "✓ 80 cm + 15.24 cm (diámetro) + 10 cm (cama) = 105.24 cm, aproximadamente 106 cm. Siempre suma los tres componentes.",
      "wfb": "⚠️ Fórmula: 80 + diámetro en cm + 10 cm. Para 6 pulgadas: 80+15.24+10 = 105.24 cm, aproximadamente 106 cm."
    },
    {
      "icon": "🏗️",
      "titulo": "Capas del relleno de la zanja",
      "badge": "Día 2 · Procedimiento",
      "ctx": "Orden estricto: 1) Cama de arena (10 cm). 2) Material de atraque: arena compactada hasta la mitad del tubo. 3) Relleno inicial: material limpio hasta 20 cm sobre la corona más cinta de señalización. 4) Relleno final y subrasante: recebo compactado mecánicamente en capas. Dejar MINIMO 50 cm entre el lomo del tubo y la primera compactación mecánica.",
      "q": "¿A qué altura mínima sobre el lomo del tubo se puede usar por primera vez la compactadora mecánica (rana o placa)?",
      "opts": [
        "Inmediatamente sobre el tubo",
        "10 cm sobre el lomo",
        "20 cm sobre el lomo",
        "50 cm sobre el lomo como mínimo"
      ],
      "cor": 3,
      "fb": "✓ Mínimo 50 cm de relleno suelto sobre el lomo antes de usar compactadora mecánica. Por debajo, la vibración puede fracturar la tubería o desplazar las uniones.",
      "wfb": "⚠️ 50 cm mínimo sobre el lomo. Con menos material de protección, la vibración de la compactadora daña la tubería."
    },
    {
      "icon": "💧",
      "titulo": "Prueba hidráulica",
      "badge": "Día 2 · Procedimiento",
      "ctx": "La prueba hidráulica se realiza ANTES de tapar la zanja. Pasos: instalar tapones en los extremos, llenar la tubería eliminando el aire, presurizar con bomba hidrostática a 1.5 veces la presión de trabajo, mantener 2 horas. Manómetro estable = pasa. Manómetro baja = hay fuga, localizar y corregir con la zanja abierta.",
      "q": "¿Cuándo se realiza la prueba hidráulica en el procedimiento correcto de instalación?",
      "opts": [
        "Antes de instalar los tapones, con la tubería al aire",
        "Después de tapar la zanja completamente",
        "Antes de tapar la zanja, con los empalmes visibles",
        "Solo si el inspector de obra lo exige"
      ],
      "cor": 2,
      "fb": "✓ Con la zanja abierta para poder ver y corregir las fugas en los empalmes. Si se tapa primero, hay que desenterrar todo el tramo para encontrar la fuga.",
      "wfb": "⚠️ La zanja debe estar abierta para que los empalmes sean visibles. Así se localiza y corrige cualquier fuga sin desenterrar."
    },
    {
      "icon": "🪛",
      "titulo": "Herramientas: corte y unión",
      "badge": "Día 2 · Herramientas",
      "ctx": "Cortatubos o segueta: corte preciso sin deformar. Biselador o lima: elimina rebabas y prepara el extremo. Máquina de termofusión: une polietileno por calor. Polipasto o diferencial: iza tubería a la zanja y empuja el espigo en uniones mecánicas con fuerza continua y controlada. Barra o palanca: fuerza con buen apoyo para el empalme sin golpear.",
      "q": "¿Por qué se usa el polipasto en el empalme de unión mecánica y NO se golpea directamente la tubería?",
      "opts": [
        "Porque el polipasto es más rápido",
        "Golpear puede desplazar el empaque o generar microfisuras en el tubo",
        "El polipasto permite trabajar más trabajadores a la vez",
        "Solo es por norma de ergonomía laboral"
      ],
      "cor": 1,
      "fb": "✓ Golpear directamente desplaza el empaque y puede generar microfisuras invisibles que causan fallas futuras. El polipasto aplica fuerza continua y controlada.",
      "wfb": "⚠️ El golpe crea microfisuras y desplaza el empaque. El polipasto aplica fuerza controlada garantizando un empalme correcto."
    },
    {
      "icon": "📏",
      "titulo": "Medición y control de nivelación",
      "badge": "Día 2 · Herramientas",
      "ctx": "Cinta o flexómetro: longitudes y profundidades. Nivel e hilo: alturas y alineamiento. Plomada: alineación vertical, la punta indica el eje exacto. La nivelación de la tubería se corrobora al menos cada 20 metros de avance para asegurar que no queden desniveles acumulados en el tramo.",
      "q": "¿Con qué frecuencia se debe verificar la nivelación de la tubería durante la instalación?",
      "opts": [
        "Al inicio y al final del tramo solamente",
        "Cada 5 metros",
        "Cada 20 metros como mínimo",
        "Una sola vez al terminar toda la red"
      ],
      "cor": 2,
      "fb": "✓ Cada 20 metros mínimo. Permite detectar y corregir desniveles antes de que se acumulen en todo el tramo.",
      "wfb": "⚠️ Verificar cada 20 metros evita que un error pequeño se repita en todo el tramo. Si solo se verifica al final, ya es tarde para corregir."
    },
    {
      "icon": "🦺",
      "titulo": "Cinta de señalización en el relleno",
      "badge": "Día 2 · Procedimiento",
      "ctx": "Durante el relleno inicial (manual, capas de 15 cm), una vez que el material cubre el tubo hasta 20 cm sobre la corona, se coloca la CINTA DE SEÑALIZACIÓN generalmente amarilla o azul. En futuras excavaciones, los operarios ven la cinta ANTES de llegar a la tubería y detienen la máquina a tiempo.",
      "q": "¿Para qué sirve la cinta de señalización que se coloca en el relleno de la zanja?",
      "opts": [
        "Para identificar el material del tubo instalado",
        "Para advertir a futuras excavaciones sobre la presencia de la tubería antes de que la máquina la alcance",
        "Para mejorar la compactación del relleno",
        "Para demarcar el ancho de la zanja en la superficie"
      ],
      "cor": 1,
      "fb": "✓ La cinta queda en el relleno, encima del tubo. En futuras excavaciones, los operarios la ven ANTES de llegar a la tubería y detienen la máquina.",
      "wfb": "⚠️ La cinta es un aviso para futuros excavadores. Sin ella, una retroexcavadora puede romper la tubería sin saberlo."
    },
    {
      "icon": "🌧️",
      "titulo": "Red sanitaria vs red pluvial",
      "badge": "Día 3 · Módulo 3",
      "ctx": "Red sanitaria: evacúa aguas negras de viviendas por gravedad. Red pluvial: recoge aguas lluvias de vías y superficies por gravedad. Ambas funcionan por gravedad, diferente al acueducto que es a presión. La pendiente mínima garantiza velocidad de autolimpieza mayor o igual a 0.6 m/s para que los sólidos no se depositen en el tubo.",
      "q": "¿Cuál es la diferencia fundamental entre el acueducto y el alcantarillado?",
      "opts": [
        "El acueducto usa tubos más grandes",
        "El acueducto es a presión; el alcantarillado funciona por gravedad",
        "El alcantarillado siempre va más profundo",
        "El material es diferente: PVC vs concreto"
      ],
      "cor": 1,
      "fb": "✓ Acueducto = red presurizada. Alcantarillado = gravedad. Por eso en alcantarillado la pendiente del tubo es determinante y no puede ser cero.",
      "wfb": "⚠️ La diferencia clave es hidráulica: acueducto presurizado, alcantarillado por gravedad. La pendiente en alcantarillado es crítica."
    },
    {
      "icon": "🧱",
      "titulo": "Tuberías para alcantarillado",
      "badge": "Día 3 · Módulo 3",
      "ctx": "Concreto: convencional, reforzado y extra reforzado. PVC corrugado Novafort: de 8 hasta 48 pulgadas (redes colectoras principales). PVC liso sanitario: entregas domiciliarias de 4, 6 y 8 pulgadas. GRP fibra de vidrio: 0.30 m a 3.0 m de diámetro. HDPE: 16 pulgadas a 3.5 m, uniones por calor, flexible.",
      "q": "Para la conexión domiciliaria (de la casa a la red principal de alcantarillado), ¿qué tipo de tubería PVC se usa normalmente?",
      "opts": [
        "PVC corrugado Novafort de 24 pulgadas",
        "PVC liso sanitario de 4 a 8 pulgadas",
        "GRP de 0.30 m de diámetro",
        "HDPE de 16 pulgadas"
      ],
      "cor": 1,
      "fb": "✓ Las entregas domiciliarias usan PVC liso sanitario de 4 a 8 pulgadas. El corrugado Novafort y el GRP son para redes colectoras principales de mayor diámetro.",
      "wfb": "⚠️ Domiciliario = PVC liso sanitario de 4 a 8 pulgadas. El corrugado y GRP son para redes principales."
    },
    {
      "icon": "🏛️",
      "titulo": "Pozos de inspección — Prefabricados",
      "badge": "Día 3 · Módulo 3",
      "ctx": "Placa de fondo: base del pozo (PFL para mampostería, PFE para pozo prefabricado). Cilindros prefabricados: piezas de concreto reforzado que se apilan para alcanzar la profundidad requerida. Cono de reducción: transición de diámetro de 1.20 m a 0.60 m. Tapa: sella el acceso, diámetro aproximado de 0.70 m. Escalera tipo gato: acceso seguro al interior.",
      "q": "¿Para qué sirve el cono de reducción en un pozo de inspección de alcantarillado?",
      "opts": [
        "Para aumentar la presión del flujo de entrada",
        "Para reducir el diámetro de 1.20 m a 0.60 m conectando el cuerpo del pozo con la tapa",
        "Para instalar la escalera de gato",
        "Para unir dos tuberías de diferente material"
      ],
      "cor": 1,
      "fb": "✓ El cono de reducción hace la transición de 1.20 m (cuerpo del pozo) a 0.60 m (boca de acceso donde va la tapa). Sin él no se puede cerrar el pozo correctamente.",
      "wfb": "⚠️ El cono reduce de 1.20 m (cuerpo) a 0.60 m (boca de acceso con tapa). Sin él no se puede cerrar el pozo."
    },
    {
      "icon": "🪜",
      "titulo": "Silla Yee y conexiones domiciliarias",
      "badge": "Día 3 · Módulo 3",
      "ctx": "La silla Yee conecta la red domiciliaria a la tubería principal con entrada inclinada a 45 grados para evitar choques de flujo. Compuesta por: accesorio Y en PVC o concreto, empaque de caucho y abrazaderas. Diámetros domiciliarios: 6 a 8 pulgadas. Diámetros red principal: 12 a 36 pulgadas. La inclinación a 45 grados evita turbulencia y obstrucciones.",
      "q": "¿Por qué la silla Yee conecta a la tubería principal en ángulo de 45 grados y NO a 90 grados?",
      "opts": [
        "Por estética y facilidad de instalación",
        "Para que la conexión domiciliaria sea más corta",
        "Para evitar el choque frontal del flujo domiciliario con el flujo principal, reduciendo turbulencia y obstrucciones",
        "Porque el ángulo de 90 grados no existe en tuberías de alcantarillado"
      ],
      "cor": 2,
      "fb": "✓ El 45 grados evita el choque frontal entre flujos. A 90 grados habría turbulencia, depósitos y obstrucciones frecuentes. El flujo domiciliario entra en la misma dirección del flujo principal.",
      "wfb": "⚠️ El 45 grados es hidráulico: evita el choque frontal. A 90 grados hay turbulencia y obstrucciones frecuentes."
    },
    {
      "icon": "🦺",
      "titulo": "Entibados — Protección de excavaciones",
      "badge": "Día 3 · SST",
      "ctx": "El entibado sostiene las paredes de la excavación y evita derrumbes, protegiendo a los trabajadores. OBLIGATORIO a partir de 1.50 m de profundidad. Tipos: láminas metálicas (empotramiento mínimo H/3), cajón metálico (prefabricado, reutilizable), paneles deslizantes (avanzan con la excavación), circular (pozos y cámaras). Proceso: preexcavar, colocar paneles, instalar codales, verificar estabilidad y luego ingresa el personal.",
      "q": "¿A partir de qué profundidad de excavación es OBLIGATORIO instalar un sistema de entibado según las normas de SST?",
      "opts": [
        "0.80 m",
        "1.20 m",
        "1.50 m",
        "2.00 m"
      ],
      "cor": 2,
      "fb": "✓ El entibado es obligatorio desde 1.50 m de profundidad. Un derrumbe a esa profundidad puede ser fatal: el peso del suelo sobre un trabajador supera varias toneladas.",
      "wfb": "⚠️ A partir de 1.50 m el entibado es obligatorio. El suelo puede derrumbarse sin aviso previo."
    },
    {
      "icon": "📐",
      "titulo": "Interpretación de planos — Cota batea",
      "badge": "Día 3 · Módulo 3",
      "ctx": "Convenciones: símbolos estándar para tuberías, pozos, válvulas. Cotas: medidas reales representadas en el plano. Niveles y alturas: referencia vertical de un punto. Cota batea: fondo interior del tubo por donde fluye el agua, referencia fundamental para nivelar el alcantarillado. Cota clave: parte superior del tubo. Rótulo: nombre del proyecto, dirección, escala y fecha.",
      "q": "En un plano de alcantarillado, ¿qué indica la cota batea?",
      "opts": [
        "El nombre del barrio donde va la red",
        "La altura del fondo interior del tubo, por donde fluye el agua",
        "El ancho de la zanja de excavación",
        "La presión máxima de diseño de la red"
      ],
      "cor": 1,
      "fb": "✓ Cota batea = cota del fondo interior del tubo. Es la referencia de nivelación más importante en alcantarillado: define la pendiente real del tramo.",
      "wfb": "⚠️ Cota batea = fondo interior del tubo (la batea es la parte cóncava donde fluye el agua). Referencia fundamental para nivelar el alcantarillado."
    },
    {
      "icon": "🔍",
      "titulo": "Construcción de pozos de inspección",
      "badge": "Día 3 · Procedimiento",
      "ctx": "Proceso completo: 1) Excavación mecánica más perfilación manual. 2) Entibado. 3) Alistamiento de piso más material granular. 4) Instalación placa de fondo. 5) Mampostería o cilindros prefabricados. 6) Tubería de llegada y salida. 7) Viga de nivelación. 8) Pañete impermeabilizante. 9) Geotextil. 10) Cono de reducción más tapa.",
      "q": "¿Para qué se aplica el pañete impermeabilizante en el interior de un pozo de inspección de alcantarillado?",
      "opts": [
        "Para mejorar la apariencia estética del pozo",
        "Para evitar que el agua del suelo entre al pozo y que las aguas residuales contaminen el terreno",
        "Para que la escalera de gato quede bien adherida a la pared",
        "Para marcar las cotas de llegada de las tuberías"
      ],
      "cor": 1,
      "fb": "✓ Doble función: evita que el agua freática del suelo entre al pozo y evita que las aguas residuales se filtren al terreno y contaminen las aguas subterráneas.",
      "wfb": "⚠️ El pañete protege en ambas direcciones: impide infiltración del suelo al pozo y de aguas residuales al terreno."
    }
  ]
};
