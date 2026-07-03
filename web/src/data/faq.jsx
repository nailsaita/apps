// const FAQ = [{
//   pregunta: '¿Necesito inscribirme para participar?',
//   respuesta: 'Sí, la inscripción previa es necesaria para organizar los recursos y los espacios de los talleres.'
// }, {
//   pregunta: '¿El Encuentro tiene costo?',
//   respuesta: 'La participación es gratuita. Solo se solicita una contribución voluntaria para el fondo solidario.'
// }, {
//   pregunta: '¿Puedo participar si no soy de Córdoba?',
//   respuesta: 'Absolutamente. El Encuentro es plurinacional y convocamos a compañeras de todo el país y la región.'
// }, {
//   pregunta: '¿Hay guardería para niñes?',
//   respuesta: 'Sí, contamos con un espacio de cuidados para les hijes de las participantes. Informate al inscribirte.'
// }, {
//   pregunta: '¿Qué pasa si llueve?',
//   respuesta: 'Contamos con sedes cubiertas para todos los talleres. Las actividades al aire libre tienen plan B.'
// }];

// {
//   pregunta: '¿Cómo será el transporte los días del Encuentro?',
//   respuesta: 'Si venís a participar del 39° Encuentro Plurinacional de Mujeres, Lesbianas, Travestis, Trans, Bisexuales, Intersexuales y No Binaries, queremos que puedas trasladarte de manera sencilla y segura entre las distintas sedes y actividades.'
// }
import { HiddenMail } from '@/components/HiddenMail.jsx';

const FAQ = [{
  pregunta: '¿En que consisten los talleres?',
  respuesta: <>Los talleres son el corazón del Encuentro. Son espacios abiertos, participativos y horizontales donde mujeres, lesbianas, travestis, trans, bisexuales, intersexuales y no binaries compartimos experiencias, debates y propuestas sobre las problemáticas que atraviesamos en nuestras vidas y territorios. <br/>Cada taller aborda una temática específica y tiene una dinámica que garantiza que todas las voces sean escuchadas. Al final de los talleres se sintetizan todos los aportes. </>
}, {
  pregunta: '¿Quiénes pueden participar?',
  respuesta: <>Todas las personas que formen del Encuentro. No es necesario inscribirse previamente en un taller. Podés participar de los talleres que te interesen durante cada jornada. Consultá el cronograma para conocer días, horarios y ubicaciones</>
}, {
  pregunta: '¿Cómo se financia el Encuentro?',
  respuesta: <>El Encuentro es autogestivo, autónomo y autofinanciado. Su organización es posible gracias al trabajo voluntario de cientos de compañeras y compañeres, los aportes solidarios de organizaciones, actividades de recaudación y contribuciones realizadas por quienes participan. Esta forma de organización garantiza la independencia política del Encuentro y fortalece una construcción colectiva sostenida por la participación de miles de personas de todo el país. Si querés colaborar con la organización, podés sumarte a las comisiones de trabajo o realizar un aporte solidario.</>
}, {
  pregunta: '¿Dónde consulto para alojarme gratuitamente?',
  respuesta: <>La Comisión de Alojamiento coordina espacios de hospedaje solidario para quienes viajan desde otras localidades, provincias o barrios alejados del casco céntrico y necesitan alojamiento durante los días del Encuentro. Si estás en una organización, colectiva, grupalidad o viajás sola o sole, inscribirte para solicitar alojamiento, comunicate este mail <strong><HiddenMail text1="alojamiento.39encuentropluri.cba" text2="proton.me" /></strong> <br/>Por ese medio te especificaremos qué información necesitamos y cómo compartirla de manera más segura.</>
}, 
];
export default FAQ;