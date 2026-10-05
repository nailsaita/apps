
const CARTELERA_ESCENARIOS = [
  {
    id: 'apertura',
    escenario: 'Escenario Apertura y Bloque Cultural',
    horario: '10 a 13 hs',
    estado: 'Programación cerrada',
    actividades: [
         {
        nombre: 'Acto de apertura',
        tipo: 'Acto',
        procedencia: '',
        descripcion: 'Lectura del documento de apertura.'
      },
      {
        nombre: 'Eva Sulka',
        tipo: 'Música',
        procedencia: 'Salta',
        descripcion: 'Unipersonal, canto y caja. Posible apertura del escenario peña.'
      },
      {
        nombre: 'Eleva BB',
        tipo: 'Música',
        procedencia: 'Córdoba',
        descripcion: 'Orquesta de mujeres (18 integrantes). Composiciones latinas de mujeres.'
      },
      {
        nombre: 'Le Tupak',
        tipo: 'Música',
        procedencia: 'Córdoba',
        descripcion: 'Representatividad travesti-trans.'
      },
      {
        nombre: 'Enganchate Cancán',
        tipo: 'Música',
        procedencia: 'Córdoba',
        descripcion: 'Murga uruguaya con instrumentos (21 integrantes). Apertura.'
      },
      {
        nombre: 'Murgueres Autoconvocades',
        tipo: 'Música',
        procedencia: 'Córdoba',
        descripcion: 'Se suman a Cancán. Entre 20 y 30 integrantes, un tercio de elles baila.'
      },
      {
        nombre: 'Cancionero Feminista',
        tipo: 'Música',
        procedencia: 'Córdoba',
        descripcion: 'Canciones creadas para el Encuentro. 21 integrantes entre base armónica y voces.'
      },
    
      {
        nombre: 'Batucada Emergente y Yaraí Danza',
        tipo: 'Música',
        procedencia: 'Córdoba',
        descripcion: 'Cierre del bloque. Percusión afrobahiana y otras fusiones junto a danzas Yaraí.'
      }
    ]
  },
  {
    id: 'plaza-politica-cultural',
    escenario: 'Escenario Plaza Política Cultural',
    horario: '13 a 15 hs',
    estado: 'Programación cerrada',
    actividades: [
      {
        nombre: 'Raíz en Vuelo',
        tipo: 'Escénicas',
        procedencia: 'Córdoba',
        descripcion: ''
      },
      {
        nombre: 'Río Jarana Batucada',
        tipo: 'Música',
        procedencia: 'Neuquén',
        descripcion: 'Batucada de 60 sureñas. Abre el bloque.'
      },
      {
        nombre: 'GiseVe',
        tipo: 'Música',
        procedencia: 'Neuquén',
        descripcion: 'Cantante y compositora mapuche. Folk mapuche.'
      },
      {
        nombre: 'Corazón Idiota',
        tipo: 'Música / Humor',
        procedencia: 'Córdoba',
        descripcion: 'Concierto cómico de la cantautora Mayra Vieytes.'
      },
      {
        nombre: 'La Pícara Folk',
        tipo: 'Música',
        procedencia: 'Córdoba',
        descripcion: ''
      },
      {
        nombre: 'Mooi',
        tipo: 'Música',
        procedencia: 'Córdoba',
        descripcion: 'Canciones con contenido feminista. Voz y guitarra.'
      },
      {
        nombre: 'Silvana Fornero',
        tipo: 'Música / Humor',
        procedencia: 'Córdoba',
        descripcion: ''
      },
      {
        nombre: 'Beija Flor',
        tipo: 'Música',
        procedencia: 'Buenos Aires',
        descripcion: 'Candombe y música afro. 8 integrantes.'
      }
    ]
  },
  {
    id: 'marcha-travesti-trans',
    escenario: 'Marcha Travesti-Trans — Intervenciones escénicas',
    horario: '18:00 hs',
    estado: '',
    actividades: [
      {
        nombre: 'Paola Baruque',
        tipo: 'Escénicas',
        procedencia: 'Córdoba',
        descripcion: 'Performance queer en cuatro plazas.'
      },
      {
        nombre: 'Imaginación',
        tipo: 'Escénicas',
        procedencia: 'Córdoba',
        duracion: '',
        descripcion: 'Performance participativa con carteles, en Patio Olmos.'
      },
      {
        nombre: 'La paradoja de hoy',
        tipo: 'Escénicas',
        procedencia: 'Córdoba',
        duracion: '',
        descripcion: ''
      }
    ]
  },
  {
    id: 'escenario-travesti-trans',
    escenario: 'Escenario Travesti-Trans (cierre de la marcha)',
    horario: '',
    estado: '',
    actividades: [
      {
        nombre: 'La Simbiótica',
        tipo: 'Música',
        procedencia: 'Córdoba',
        descripcion: ''
      },
      {
        nombre: 'Fe de Fénix',
        tipo: 'Escénicas',
        procedencia: '',
        descripcion: 'Propuesta NB-T para la marcha del sábado / FestiTorta.'
      },
      {
        nombre: 'Mariana Ortega en vivo',
        tipo: 'Música',
        procedencia: 'Córdoba',
        descripcion: 'Cantante pop transgénero.'
      }
    ]
  },
  {
    id: 'festi-torta',
    escenario: 'FestiTorta',
    horario: '21:30 a 03 hs',
    estado: '',
    actividades: [
      {
        nombre: 'DJ Cacho de Trolo - Festival Negro (transición a FestiTorta)',
        tipo: 'Música',
        procedencia: 'Córdoba',
        descripcion: ''
      },
      {
        nombre: 'Norma Salica - Poema visibilidad lésbica',
        tipo: 'Literatura',
        procedencia: 'Tucumán',
        descripcion: ''
      },
      {
        nombre: 'Natali Gross - Poesía erótica',
        tipo: 'Literatura',
        procedencia: 'Córdoba',
        descripcion: ''
      },
      {
        nombre: 'Club Chantilli',
        tipo: 'Música',
        procedencia: 'Córdoba',
        descripcion: ''
      },
      {
        nombre: 'Tranki Punki',
        tipo: 'Música',
        procedencia: 'Córdoba',
        descripcion: ''
      },
      {
        nombre: 'Pequeño Bambi',
        tipo: 'Música',
        procedencia: 'Córdoba',
        descripcion: ''
      },
      {
        nombre: 'Fátima Lucía',
        tipo: 'Música',
        procedencia: 'Corrientes',
        descripcion: ''
      },
      {
        nombre: 'Rudas Kuir',
        tipo: 'Música',
        procedencia: 'Misiones',
        descripcion: ''
      },
      {
        nombre: 'Roxana Navarro - Un poemario de amor entre dos mujeres',
        tipo: 'Literatura',
        procedencia: 'Santiago del Estero',
        descripcion: ''
      },
      {
        nombre: 'Café con Tortas',
        tipo: 'Música / Humor',
        procedencia: 'Córdoba',
        descripcion: ''
      },
      {
        nombre: 'Bien Yoli',
        tipo: 'Música',
        procedencia: 'Córdoba',
        descripcion: ''
      },
      {
        nombre: '"Erotizadas, en busca del placer perdido"',
        tipo: 'Literatura',
        procedencia: 'Córdoba',
        descripcion: ''
      },
      {
        nombre: 'Urän Ev. Velchoff - "Otro perro que ladra en el monte", Sierras Chicas de Córdoba',
        tipo: 'Literatura',
        procedencia: 'Buenos Aires',
        descripcion: ''
      },
      {
        nombre: 'Las PeligrosAs (Punk Queer)',
        tipo: 'Música',
        procedencia: 'San Luis',
        descripcion: ''
      },
      {
        nombre: 'DJ Mantis',
        tipo: 'Música',
        procedencia: 'Córdoba',
        descripcion: ''
      }
    ]
  },
  {
    id: 'escenario-pena',
    escenario: 'Escenario Peña',
    horario: '21 a 2 hs',
    estado: '15 proyectos',
    actividades: [
      {
        nombre: '"Las Palliris" (danza)',
        tipo: 'Escénicas',
        procedencia: 'Buenos Aires',
        descripcion: ''
      },
      {
        nombre: 'WARMIS Sikuri de Abya Yala',
        tipo: 'Música',
        procedencia: 'Abya Yala',
        descripcion: 'Proyecto nacional.'
      },
      {
        nombre: 'Coro Luna Verde',
        tipo: 'Música',
        procedencia: 'Córdoba',
        descripcion: ''
      },
      {
        nombre: 'Cristina Paredes',
        tipo: 'Música',
        procedencia: 'Jujuy - Cba',
        descripcion: ''
      },
      {
        nombre: 'Doña Flor y sus Rítmicos',
        tipo: 'Música',
        procedencia: 'La Plata',
        descripcion: 'Dirección con señas.'
      },
      {
        nombre: 'Murga Revolución de Viejas',
        tipo: 'Escénicas',
        procedencia: 'Córdoba',
        descripcion: ''
      },
      {
        nombre: 'Mujeres y Disidencias del Folklore',
        tipo: 'Música',
        procedencia: 'La Plata',
        descripcion: ''
      },
      {
        nombre: 'Desobediente Rap y Cumbia - Nina Ferreyra',
        tipo: 'Música',
        procedencia: 'Cba - Salta',
        descripcion: ''
      },
      {
        nombre: 'La Disi Folk',
        tipo: 'Música',
        procedencia: 'Buenos Aires',
        descripcion: ''
      },
      {
        nombre: 'Fletes Rakel',
        tipo: 'Música',
        procedencia: 'Buenos Aires',
        descripcion: ''
      },
      {
        nombre: 'Lolas Tristes - Rock',
        tipo: 'Música',
        procedencia: 'Córdoba',
        descripcion: ''
      },
      {
        nombre: 'Baila la Chola',
        tipo: 'Escénicas',
        procedencia: 'Buenos Aires',
        descripcion: ''
      },
      {
        nombre: 'Kris Alaniz',
        tipo: 'Música',
        procedencia: 'Buenos Aires',
        descripcion: ''
      },
      {
        nombre: 'Ninfas - Cumbia',
        tipo: 'Música',
        procedencia: 'Córdoba',
        descripcion: ''
      },
      {
        nombre: 'Buji Molas',
        tipo: 'Música',
        procedencia: 'Córdoba',
        descripcion: ''
      },
      {
        nombre: 'La Juli + invitadxs en vivo',
        tipo: 'Música',
        procedencia: 'Córdoba',
        descripcion: ''
      },
      {
        nombre: 'Savia. Entramando raíces',
        tipo: 'Escénicas',
        procedencia: 'Córdoba',
        descripcion: 'Fragmento de obra de danza folclórica contemporánea.'
      },
      {
        nombre: 'DJ Rocha',
        tipo: 'Música',
        procedencia: 'Río Negro',
        descripcion: ''
      }
    ]
  }
];

export default CARTELERA_ESCENARIOS;