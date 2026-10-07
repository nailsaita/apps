// Programación cultural por espacio, para la subpágina de programación.
// dia: 'sabado' | 'domingo' | 'finde'
// inicio / fin: 'HH:MM'. Si inicio está vacío, la actividad es "entre talleres" (horario a confirmar).

export const DISCIPLINAS = [
  'Escénicas', 'Formativas', 'Música', 'Cine / Audiovisual', 'Literatura',
  'Visuales', 'Escultura', 'Otras propuestas', 'Murales'
];

// [nombre, dirección]
const LUGARES = {
  archivo: ['Archivo Provincial de la Memoria (D2)', 'Pje. Sta. Catalina 66'],
  alberdi: ['Biblioteca Popular Casa del Pueblo Alberdi', 'El Chaco 74, Alberdi'],
  caracol: ['Casa Caracol', 'Ovidio Lagos 24'],
  caseron: ['Caserón', 'Lima 390, barrio Centro'],
  dada: ['Casona Dada', 'Juan Rodríguez 1463'],
  cabildo: ['Centro Cultural Cabildo Histórico', 'Independencia 30'],
  pepino: ['Centro Cultural Casa de Pepino', 'Fructuoso Rivera 287'],
  casona: ['Centro Cultural Casona Municipal', 'Gral. Paz 395'],
  piojera: ['Centro Cultural La Piojera', 'Av. Colón 1559'],
  unc: ['Centro Cultural UNC', 'Obispo Trejo 314'],
  garat: ['Centro de Documentación “Juan C. Garat” (Círculo Sindical de la Prensa y la Comunicación de Córdoba)', 'Obispo Trejo 365'],
  cronopio: ['Cronopio. Microcosmos Cultural', 'Pasaje Agustín Pérez 46'],
  escuelaTotal: ['Escuela Total', 'General Alvear 351'],
  cirulaxia: ['Espacio Cirulaxia', 'Pasaje Pérez 12, zona ex Abasto'],
  museoMujeres: ['Espacio Cultural Museo de las Mujeres', 'Rivera Indarte 49'],
  sanMartin: ['Espacio Cultural San Martín', 'Amado Nervo 601, B° San Martín'],
  cerveceria: ['Espacio de la Cervecería Córdoba', 'Amado Nervo 601, B° San Martín'],
  tablada: ['Espacio de la Cervecería Córdoba', 'La Tablada 1884'],
  furia: ['Espacio Furia Mariposa', 'Pasaje Estévez 357, B° Güemes'],
  galpon: ['Galpón del Río', 'Centro América 1295, B° San Vicente'],
  bastarda: ['La Bastarda', 'Martín García 918'],
  burbuja: ['La Burbuja Circo', 'Bv. Los Andes 469, B° Ducasse / Cofico'],
  lupulus: ['Lúpulus Rondeau', 'Rondeau 616'],
  merlina: ['Merlina Trinchera', 'Padre Luis Monti 2332'],
  mucho: ['Mucho Club de Teatro', 'Pje. Rafael Escuti 813'],
  caraffa: ['Museo Caraffa', 'Av. Poeta Lugones 408'],
  antropologia: ['Museo de Antropología (FFyH-UNC)', 'Av. Hipólito Yrigoyen 174'],
  naturales: ['Museo de Ciencias Naturales', 'Av. Poeta Leopoldo Lugones 395'],
  evita: ['Museo Evita Palacio Ferreyra', 'Av. Hipólito Yrigoyen 508'],
  sobremonte: ['Museo Sobremonte', 'Rosario de Sta. Fe 218'],
  buenPastor: ['Paseo del Buen Pastor', 'Av. Hipólito Yrigoyen 325'],
  quintoDeva: ['Quinto Deva', 'Pje. Agustín Pérez 10'],
  penero: ['Sábado peñero del Pluri', 'Rodríguez Peña 454'],
  sivialco: ['Sindicato Vial Córdoba (SIVIALCO)', '27 de Abril 884'],
  libertador: ['Teatro del Libertador San Martín', 'Av. Vélez Sarsfield 365'],
  laLuna: ['Teatro La Luna', 'Pasaje Escuti 915, Güemes'],
  teatroReal: ['Teatro Real', 'San Jerónimo 66'],
  mundoFeliz: ['Un Mundo Feliz', 'Caseros 382'],
  upc: ['UPC – Ciudad de las Artes', 'Av. Pablo Ricchieri 1955 (ingreso por cochera)'],
  volcan: ['Volcán Azul Libros', 'Independencia 1247'],
  plaza: ['Plaza Político Cultural', '']
};

const e = (dia, inicio, fin, titulo, disciplina, lugar = null, espacio = '', nota = '') => ({
  dia, inicio, fin, titulo, disciplina,
  lugar: lugar ? LUGARES[lugar][0] : '',
  direccion: lugar ? LUGARES[lugar][1] : '',
  espacio, nota
});

const ESC = 'Escénicas', FOR = 'Formativas', MUS = 'Música', CINE = 'Cine / Audiovisual';
const LIT = 'Literatura', VIS = 'Visuales', ESCU = 'Escultura', OTR = 'Otras propuestas', MUR = 'Murales';

export const PROGRAMACION = [
  // ── Escénicas ──
  e('domingo', '14:00', '', 'Desde el altillo', ESC, 'archivo'),
  e('domingo', '13:00', '', 'Co-Apg kuña kuña Pim Pim: escena compartida con los monólogos teatrales “La Paraguaya” y “Despojo de mi identidad blanqueada”', ESC, 'museoMujeres', 'Patio'),
  e('sabado', '19:20', '20:20', 'Tempo di Donna (Córdoba): espectáculo poético teatral', ESC, 'unc', 'Patio'),
  e('sabado', '18:30', '', 'De todo eso ni el polvo', ESC, 'cronopio'),
  e('sabado', '22:00', '', 'A brillar mi amor', ESC, 'cronopio'),
  e('sabado', '20:00', '', 'Bochorno', ESC, 'cirulaxia'),
  e('domingo', '14:30', '15:00', 'Comunidad folclórica de mujeres y disidencias “Madre Tierra”', ESC, 'tablada'),
  e('domingo', '13:00', '', 'Cabaret Azul', ESC, 'bastarda'),
  e('sabado', '20:30', '', 'Partes de Mí', ESC, 'mucho'),
  e('sabado', '14:00', '', '“La Rota Virtud”: biodrama de mujeres evangélicas', ESC, 'buenPastor'),
  e('domingo', '12:30', '', 'Despertares', ESC, 'buenPastor'),
  e('sabado', '13:30', '', '“Kill el mandato gil” + “Mujeres cautivas, mujeres salvajes”', ESC, 'buenPastor'),
  e('sabado', '21:00', '', 'Un punto azul pálido en la oscuridad: una distopía cercana', ESC, 'quintoDeva'),
  e('sabado', '14:00', '', 'Pluri encontradas: escenas cortas con Enemigas Públicas Kilomba y Novia Pálida Nati Hot', ESC, 'libertador', 'Sala Luis de Tejeda'),
  e('sabado', '21:00', '', 'Dame el fuego de tu amor', ESC, 'laLuna'),
  e('sabado', '13:00', '', '“Magdalena, su propia voz”', ESC, 'teatroReal'),
  e('sabado', '14:00', '', '“Tibio sacrificios”', ESC, 'teatroReal'),
  e('sabado', '17:30', '', '“Una misión fabulosa” (infancias), en el recreo', ESC),

  // ── Formativas ──
  e('sabado', '13:00', '15:00', 'Taller de poesía y voces performáticas, por Proyecto Thénon', FOR, 'alberdi'),
  e('sabado', '13:00', '15:00', 'Fotografía y ESI: la construcción de la mirada', FOR, 'alberdi'),
  e('sabado', '18:00', '19:30', 'El Territorio de mi Voz…', FOR, 'alberdi'),
  e('domingo', '13:00', '15:00', 'Taller “¿A qué le decís basta?”: trama y bordado para decir(nos)', FOR, 'caseron'),
  e('sabado', '13:00', '15:00', 'Danza y Rap: Changas Crew', FOR, 'dada'),
  e('sabado', '13:00', '15:00', 'Bordado y reflexión sobre el trabajo precarizado', FOR, 'pepino', 'Patio'),
  e('domingo', '13:00', '15:00', 'Taller de Canto Colectivo', FOR, 'pepino', 'Patio'),
  e('sabado', '13:00', '14:00', 'Armado de muñecas Abayomi', FOR, 'pepino', 'Sala', 'Duración aproximada: 1 hora'),
  e('domingo', '13:00', '', 'Taller “El humor es para todxs”', FOR, 'pepino', 'Sala'),
  e('domingo', '13:00', '15:00', 'Todo lo que puede una vida (literatura)', FOR, 'casona', 'Sala Blanca'),
  e('sabado', '13:30', '15:00', '“Indicio lo que la hoguera no quema” (teatro)', FOR, 'casona', 'Sala Piano'),
  e('sabado', '13:00', '15:00', 'Cuerpos que dialogan (tango, danza)', FOR, 'casona', 'Sala Roja'),
  e('domingo', '13:00', '15:00', 'Territorio en ronda (danza)', FOR, 'casona', 'Sala Roja'),
  e('domingo', '12:30', '15:00', 'Hacer red, abrir caminos: 10 años de bibliotecas con perspectiva de género. Encuentro de la red de bibliotecas', FOR, 'garat'),
  e('domingo', '13:00', '15:00', 'Taller “Rap y expresión”', FOR, 'cronopio'),
  e('sabado', '13:00', '15:00', 'Taller de Biodanza', FOR, 'escuelaTotal'),
  e('domingo', '13:00', '15:00', 'La Revolución de las Hijas, del Buen Pastor al Cuento de la Criada: ronda intergeneracional', FOR, 'escuelaTotal'),
  e('domingo', '13:00', '15:00', '20 años de la ley de Educación Sexual Integral: tejiendo redes y resistencias', FOR, 'museoMujeres', 'Auditorio'),
  e('sabado', '18:00', '20:00', 'Falsas denuncias: no van a silenciarnos. Conversatorio de la Casa de la Mujer María Conti', FOR, 'museoMujeres', 'Patio'),
  e('sabado', '13:00', '15:00', 'Territorios lúdicos de cuidado colectivo', FOR, 'museoMujeres', 'Patio'),
  e('sabado', '18:00', '20:00', 'Podría haber sido yo', FOR, 'sanMartin'),
  e('domingo', '12:00', '14:30', 'Dicha de Alberdi: recorrido por el barrio + charla', FOR, 'cerveceria', '', 'Duración: 1 h 30 min'),
  e('sabado', '13:00', '15:00', 'Las negras también hacemos historia: taller de danzas de matriz afro', FOR, 'galpon'),
  e('domingo', '13:00', '15:00', 'Taller de Capoeira Angola', FOR, 'galpon'),
  e('sabado', '13:00', '15:00', 'Genealogía travesti trans en los encuentros', FOR, 'bastarda'),
  e('sabado', '12:00', '15:00', 'Corporalidades en juego: prácticas de circo', FOR, 'burbuja'),
  e('domingo', '12:30', '15:00', 'Pluritrapecistas del encuentro: taller de trapecio fijo', FOR, 'burbuja'),
  e('domingo', '13:00', '15:00', 'Taller de expresión vocal', FOR, 'merlina'),
  e('domingo', '13:00', '15:00', 'Narrativas discas para construir autonomía y ranchar en las calles', FOR, 'caraffa'),
  e('sabado', '13:00', '15:00', 'Taller “¿Menopáusica yo?”', FOR, 'quintoDeva'),
  e('domingo', '', '', 'Taller de visibilización de derechos laborales de trabajadoras de casas particulares', FOR, 'sivialco'),
  e('sabado', '13:00', '15:00', 'Visibilización de derechos laborales de trabajadoras de casas particulares', FOR, 'laLuna'),
  e('domingo', '13:00', '15:00', 'Tango, fundiendo los roles', FOR, 'laLuna'),
  e('sabado', '18:00', '20:00', 'Avivar las brasas: laboratorio de escritura y creación colectiva', FOR, 'volcan'),

  // ── Música ──
  e('sabado', '18:30', '19:00', 'Flores calladas', MUS, 'pepino', 'Sala'),
  e('sabado', '13:00', '13:30', 'Sol Gomez + Chika Repiká: candombe canción', MUS, 'unc'),
  e('sabado', '20:15', '21:30', 'Amanecer en violeta: contar para transmutar (música y cuentos)', MUS, 'unc'),
  e('domingo', '13:00', '', 'Presentación del Observatorio de la Música en vivo y grabada de la comunidad LGBTQIAPN+ de Córdoba', MUS, 'unc'),
  e('domingo', '13:00', '14:00', 'Bren Coll (folk rock) y Celeste Martín', MUS, 'unc'),
  e('sabado', '21:00', '00:00', 'Silvina Fernandez, Giyo Franco, Tysem, Eluney Sposato, Marina Pacheco (música de la Patagonia) y Morenilla', MUS, 'lupulus'),
  e('sabado', '14:30', '15:00', 'Pilar Medina y Luci Delahye: “De Atahualpa a Piaf”', MUS, 'evita', 'Bar'),
  e('domingo', '14:30', '15:00', 'Alta Manija Jem y concierto de Flor Straub', MUS, 'evita', 'Bar'),
  e('sabado', '21:00', '01:00', 'Peña folklore: Tekove Katu, Fuerza y Pezón, Dos Folk, Dani García, Folklore Andante, Camaleónicas, Gata Flora, Coronadas en Venus, Negrita Kamba y les Kuyis, Canción-eras, Gaia Delfini y Color Lavanda', MUS, 'penero'),
  e('domingo', '12:30', '15:00', 'Festival “Hip hop femenino y disidente”', MUS, 'penero'),
  e('sabado', '20:00', '21:30', 'Fermenta, Karmenn (música rota) y Queerfonia Coral', MUS, 'mundoFeliz'),
  e('sabado', '14:40', '', 'Batuque Disidente', MUS),
  e('sabado', '14:40', '', 'Talleres Batuka', MUS),
  e('sabado', '14:40', '', 'Rondita de percusión Oniria', MUS),

  // ── Cine / Audiovisual ──
  e('sabado', '20:00', '', 'Proyección “La Yegua de Troya (existimos les guste o no)”', CINE, 'caracol', '', 'Duración: 63 minutos'),
  e('sabado', '21:00', '23:00', '“Socorristas – le film” (Córdoba / Francia)', CINE, 'piojera'),
  e('domingo', '13:00', '15:00', 'Referentas Comunitarias Matanceras, Bs. As. (proyección + debate)', CINE, 'piojera'),
  e('sabado', '13:30', '14:30', 'No es la espera: presentación, proyección de librofotos e intercambio', CINE, 'unc'),
  e('sabado', '18:30', '20:00', '“Brujas por el Cordobazo” (proyección)', CINE, 'unc', 'Auditorio'),
  e('domingo', '14:00', '15:00', 'Antro Tortillero: un convite de proyectos lésbicos. Intercambios, conversación y podcast', CINE, 'unc'),
  e('sabado', '12:30', '15:00', '¿Cuándo dejamos de pedir permiso? (Córdoba)', CINE, 'museoMujeres', 'Auditorio'),
  e('sabado', '18:30', '20:00', 'Armando la historia, mujeres cannábicas del sur', CINE, 'museoMujeres', 'Auditorio'),
  e('domingo', '13:00', '15:00', 'Hijas de Nakba: memoria y resistencia', CINE, 'furia'),
  e('domingo', '13:30', '15:00', 'Proyección “Jazmín” (1 h 50 min)', CINE, 'caraffa', 'Sala 6'),
  e('sabado', '13:00', '13:40', '“Puerperio” (Córdoba)', CINE, 'evita', 'Auditorio', '30 min de proyección + 20 min de debate'),
  e('sabado', '13:40', '15:00', '“Mala Madre” (Córdoba)', CINE, 'evita', 'Auditorio', '60 min de proyección + 20 min de debate'),
  e('domingo', '13:30', '15:00', '“22 veces Paola Tacacho”', CINE, 'evita', 'Auditorio'),
  e('domingo', '', '', 'Ciclo de cortos: “Rizomas”, “Todo lo demás se borra”, “Lo que el fuego nos dejó” y “Jamás volveremos”', CINE, 'sobremonte'),
  e('sabado', '19:00', '20:00', '“Cuerpas reales, hinchas reales”', CINE, 'mundoFeliz'),

  // ── Literatura ──
  e('sabado', '18:30', '20:30', 'Presentación del libro “La política en disputa. Feminismos argentinos en el siglo XX (Córdoba)”', LIT, 'cabildo', 'Foyer'),
  e('sabado', '18:15', '19:45', 'Diálogos de Cuidado: presentación de tres obras escritas que hablan sobre cuidados', LIT, 'pepino', 'Patio'),
  e('sabado', '19:10', '19:55', 'Presentación del libro “Mujeres con Memoria” (autoras de la provincia de Córdoba)', LIT, 'pepino', 'Sala'),
  e('sabado', '18:30', '19:10', 'Proyecto Thénon: una lectura a voz y cuerpo (Bs. As.)', LIT, 'unc', 'Patio'),
  e('sabado', '13:30', '15:00', 'Presentación del libro “Nosotras en libertad”', LIT, 'sobremonte'),
  e('sabado', '18:30', '20:30', 'Presentación de 4 libros que recorren el trabajo de mujeres que no fueron tapa (CABA)', LIT, 'penero'),

  // ── Visuales y escultura ──
  e('domingo', '13:00', '15:00', 'Archivo Histórico de los 38 Encuentros de Mujeres y Disidencias', VIS, 'unc', 'Patio'),
  e('sabado', '12:30', '15:00', 'Cuerpos que sostienen · Estampas de resistencia (instalación visual)', VIS, 'museoMujeres', 'Auditorio'),
  e('sabado', '13:00', '15:00', 'Fisuras en el archivo + actividad de taller', VIS, 'caraffa', 'Entrada', 'Instalación disponible ambos días'),
  e('finde', '12:30', '15:00', 'Acá estamos: una experiencia de solidaridad y orgullo feminista · La Oda Roja', VIS, 'antropologia', '', 'Muestra permanente'),
  e('finde', '', '', 'Instalación “Lana”', VIS, 'naturales', '', 'Instalación permanente'),
  e('finde', '', '', 'Escultura en metal y tejidos: Fuerza común', ESCU, 'upc'),

  // ── Otras propuestas ──
  e('sabado', '18:30', '20:30', '“Algo Incorrecto” (Bs. As.)', OTR, 'piojera'),
  e('sabado', '20:30', '21:20', 'Presentación del libro “Caminares artivistas trans y marikas en Abya Yala”', OTR, 'unc', 'Patio'),
  e('sabado', '13:00', '15:00', 'Conversatorio: mujeres y personas LGTB migrantes y refugiadas en la era de Milei', OTR, 'caraffa'),
  e('sabado', '13:00', '15:00', '“Desobediencia de vida”: proyección + conversatorio + presentación del libro', OTR, 'naturales'),
  e('sabado', '13:00', '', 'Punto en fuga (intervención)', OTR, 'buenPastor'),
  e('domingo', '14:30', '15:00', 'Mesa: Justicia por Carolina Montero', OTR),
  e('sabado', '14:40', '', 'Ollas Vacías (Palestina)', OTR),

  // ── Murales ──
  e('finde', '', '', 'Murales', MUR, 'plaza')
];