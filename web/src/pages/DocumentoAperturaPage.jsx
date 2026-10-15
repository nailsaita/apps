import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, MotionConfig } from 'framer-motion';
import { ArrowLeft, ArrowUp, ChevronDown, List } from 'lucide-react';
// Ajustá esta ruta si tus otras subpáginas importan Navbar y Footer desde otro lado
import { Navbar, FooterSection } from '@/pages/HomePage.jsx';

// ─── CONTENIDO ────────────────────────────────────────────────────────────────
// Tipos de bloque: p = párrafo, c = consigna destacada, presentes = lista de nombres
const p = text => ({ t: 'p', text });
const c = text => ({ t: 'c', text });

const SECCIONES = [
  {
    id: 'bienvenida',
    titulo: 'Bienvenida',
    bloques: [
      p('¡Bienvenidas bienvenides y bienvenidos al 39 Encuentro Plurinacional de Mujeres, Lesbianas, Travestis, Trans, Bisexuales, Intersexuales y No Binaries que nos encuentra por tercera vez en 40 años en territorio ancestral Camiare, Comechingon, Sanaviron, Rankülche, Querandi!'),
      p('Un encuentro que se inscribe en una genealogía que hunde sus raíces en la resistencia de nuestras ancestras de los pueblos y naciones preexistentes, de las comunidades afro, en las huelgas de inquilinas, en las obreras en lucha en los 60 y en las gestas revolucionarias de los 70, en las resistencias a la dictadura, en la vuelta de la democracia y las nuevas apuestas de los feminismos.'),
      p('Nos preparamos para un encuentrazo lleno de fuerza, masivo, donde podamos seguir fortaleciendo nuestras luchas, nuestros debates y experiencias y darle un gran golpe político a la extrema derecha que cuestiona nuestros derechos a nivel internacional y en Argentina. Contra Milei, su negacionismo de la violencia de género, los discursos de odio y todos los ataques a nuestras condiciones de vida. Y también contra los gobernadores cómplices y la justicia que acompañan o dejan pasar sus ataques.'),
      p('Contra el gobierno provincial de Llaryora que sigue sin dar respuesta a la violencia de género en la provincia, como el femicidio de Agostina Vega, la desaparición de Delicia Mamani Mamani y los casos de abuso sexual en Villa Maria de Rio Seco. Así como contra su política de desmantelamiento del Polo Integral de la Mujer.'),
      p('Les recibimos en Córdoba, ni más ni menos que en el centro de la ciudad, donde construimos las históricas vigilias que nos permitieron conquistar el aborto legal con la Marea Verde, donde venimos a gritar ¡Ni una Menos!, donde conquistamos la libertad para Paola Ortiz.'),
      p('Acá nos encuentra cada lucha por nuestros derechos. Les recibimos en nuestra provincia a 50 años del último golpe cívico-eclesiástico-militar, donde gracias a la lucha incansable por los Derechos Humanos, restituimos la identidad de 30 compañeres detenides desaparecides en la Loma del Torito-La Perla, contra la política negacionista de Milei. Les recibimos al frente de donde se produjo la fuga de las mujeres de la cárcel del Buen Pastor ¡¡En La Córdoba del cordobazo!! Les recibimos con la fuerza y la potencia de una Comisión Organizadora que desde hace un año viene encontrándonos para prepararnos para este momento.'),
      p('Acá estamos, hace 40 años construyendo este Encuentro que es de todas, todes y todos. Que existe porque es horizontal, autogestivo, autónomo, democrático, federal, plurinacional. Existe porque, incluso en uno de los momentos más duros para nuestro pueblo, decidimos encontrarnos para compartir y organizar nuestras peleas.')
    ]
  },
  {
    id: 'contexto',
    titulo: 'Contexto nacional',
    bloques: [
      p('Nos encontramos en Córdoba a un mes antes de la llegada del Papa León XIV. Respetamos la libertad de culto de todas y todes pero no dejamos de sostener que es la visita del jefe de estado de una institución reaccionaria y enemiga de nuestros derechos. Su visita cuenta con el aval político de Milei, Llaryora y los gobernadores, quienes le entregan los recursos que le niegan a mujeres, diversidades y al pueblo trabajador.'),
      p('El gobierno de extrema derecha de Milei le ha declarado la guerra a nuestros derechos y conquistas. Con su negacionismo de la violencia de género, sus discursos de odio y su proyecto económico ultracapitalista, extractivista e industricida viene atacando las políticas de género y diversidad, los derechos laborales y sindicales, el derecho a la alimentación, salud, educación, ciencia, cultura, vivienda, discapacidad y jubilaciones. A nivel internacional hace alianzas con la derecha más reaccionaria de Trump, Netanyahu y Bolsonaro, promoviendo ideas que atacan al feminismo y transfeminismo y construyen un clima social que habilita, legitima a quienes ejercen violencias, incluidos femicidas como Cerimedo, Laje y Laurta.'),
      p('El fracaso de su plan económico y el sometimiento colonial al FMI nos expone a un mayor saqueo de los bienes comunes naturales y recursos estratégicos, el avance de la extranjerización de nuestros territorios y el desplazamiento de pueblos preexistentes de sus territorios ancestrales.'),
      p('Pero el 6 de agosto, una masiva movilización logró frenar la Ley de inviolabilidad de la propiedad privada, y demostró que la lucha en las calles es el camino ¡Nos preparamos para salir el 15 de octubre nuevamente a las calles resaltando la importancia de unificar las luchas desde abajo, por la soberanía, por la universidad y la ciencia, por la emergencia en discapacidad, la morosidad, ¡este 15 todas y todes a las calles Derrotemos el DNU 70/23! Destitución y juicio político a los jueces de la Corte Suprema! ¡Que se implemente la ley de financiamiento universitario ya!'),
      p('Con la bandera de Malvinas, Milei pretende apropiarse de la sensible causa para recuperar la pérdida de su imagen política mientras quiere habilitar la venta irrestricta de tierras argentinas a extranjeros y una base militar yankee en Tierra del Fuego. En este encuentro defendemos la causa Malvinas como bandera de soberanía nacional y como un eje inseparable de la lucha feminista y transfeminista.'),
      c('¡La tierra no se vende, se defiende! ¡Fuera Ingleses de las Malvinas, fuera Yankees de America Latina!'),
      p('En Argentina crece el desempleo, la pobreza y la precarización laboral. Los salarios están desplomados. Más de 20 millones de trabajadoras y trabajadores están endeudades porque los ingresos no alcanzan, siendo la juventud menor de 25 años la más afectada. Mientras no hay políticas de regulación de las tasas de interés y préstamos, decimos ¡Que paguen los grandes bancos, Galperin y todos los prestamistas usureros!'),
      p('El proyecto de Presupuesto 2027 vuelve a poner el equilibrio fiscal y el pago de la deuda por encima de las necesidades del pueblo. El presupuesto implica la eliminación de la ESI, a la asistencia a los espacios sociocomunitarios, infraestructura y equipamiento educativo.'),
      p('Esto implica que las madres y las trabajadoras de los barrios seamos quienes debemos multiplicar nuestras jornadas de trabajo, invisibilizadas, no remuneradas para garantizar el alimento y el cuidado que el Estado abandona. Argentina es el mayor deudor del Fondo Monetario Internacional a nivel mundial. Desde este Encuentro desconocemos la deuda externa por ser ilegítima, fraudulenta y usuraria.'),
      c('¡Rechazamos pagar con el hambre del pueblo! ¡No al pago de la deuda! ¡Fuera el FMI!')
    ]
  },
  {
    id: 'universidad',
    titulo: 'Universidad y ciencia',
    bloques: [
      p('Nos encontramos quienes defendemos las universidades y el sistema de ciencia y técnica públicos frente a la política reaccionaria y anticientífica de Milei que las desfinancia y ataca. El gobierno pone en cuestión el valor social del conocimiento y el desarrollo científico y la educación pública, laica y científica, como un derecho. La pérdida salarial de docentes, no docentes investigadoras e investigadores supera el 35%. Además desmanteló áreas e institutos enteros de CONICET, INTA, INTI, áreas de extensión universitaria, becas y ayudas económicas para estudiantes. Pero con las masivas marchas federales universitarias, tomas de facultades, asambleas, paros y clases públicas, conquistamos la Ley de Financiamiento Universitario. ¡Exigimos su inmediata implementación! No admitimos ninguna negociación de los rectores y autoridades con el Gobierno por fuera de la implementación de la ley. Repudiamos el intento de exoneración de Virginia Aparicio como un acto de censura científica. Exigimos la profundización de un plan de lucha para la universidad con paro, movilización, asambleas y participación de todos los claustros.')
    ]
  },
  {
    id: 'discapacidad',
    titulo: 'Discapacidad',
    bloques: [
      p('Las personas con discapacidad nos encontramos en lucha, junto a familiares y trabajadores porque el gobierno inhumano de Milei ataca a los sectores más vulnerables, negando el acceso a tratamientos, medicamentos y atención; haciendo negocios con los fondos de la ANDIS y desmantelando el Incluir Salud. ¡No nos olvidamos del 3% que Karina se robó! Exigimos la inmediata prórroga y cumplimiento de la Ley de Emergencia, pero así también exigimos la participación plena y autónoma en espacios de toma de decisiones, donde están interpretando las necesidades manifiestas de personas con discapacidad, solo nosotres podemos expresar lo que nos pasa, lo que necesitamos y los derechos que exigimos.'),
      c('Nada de nosotres, sin nosotres.')
    ]
  },
  {
    id: 'jubilades',
    titulo: 'Jubiladas y jubilados',
    bloques: [
      p('Todos los miércoles, las y los jubilados de todo el país salen a la calle y sostienen una lucha que tiene historia: la que encabezó Norma Plá y tantas otras jubiladas que se plantaron frente al ajuste y reclamaron una vida digna. Hoy, a pesar de la represión de Bullrich y Monteoliva, seguimos en las calles por jubilaciones y pensiones dignas, por la restitución de las moratorias y contra el desfinanciamiento del PAMI. Porque después de toda una vida de trabajo, organizarse y luchar también es defender el derecho a vivir con dignidad.')
    ]
  },
  {
    id: 'trabajo',
    titulo: 'Trabajo y reforma laboral',
    bloques: [
      p('Todo este plan no podría haber avanzado sin complicidades. Los gobernadores le dieron sus votos y las herramientas a Milei para avanzar como con la Ley Bases y el RIGI. En nuestra provincia Llaryora ha sido uno de estos, y frente al brutal recorte de la coparticipación a las provincias ha optado por descargar el ajuste sobre el pueblo cordobés. Sancionó una reforma jubilatoria y aumentó los aportes patronales de miles de estatales, confiscando salarios y jubilaciones. Exigimos la derogación de la Ley de emergencia previsional.'),
      p('Denunciamos y exigimos la derogación de la ley de reforma laboral esclavista que impulsa Milei y que se hizo posible por la complicidad de gobernadores, senadorxs y diputadxs que votaron a favor mientras el pueblo estaba en las calles. Y que contó con la pasividad de direcciones sindicales, que no convocaron al paro general para derrotarla.'),
      p('Enfrentamos la reforma laboral porque es un retroceso en derechos conquistados históricamente, flexibiliza y precariza el trabajo y ataca nuestro derecho a huelga y organización sindical. Esto impacta directamente en la vida de las mujeres y las diversidades que partimos de mayores niveles de precarización, informalidad, menores ingresos y una desigual distribución de las tareas de cuidado; y en la juventud, su salud mental, y su perspectiva a futuro. El gobierno nos empuja al pluriempleo y trabajo precario como el de las aplicaciones para poder sobrevivir. Este ritmo nos acorrala, genera agotamiento y deteriora nuestra calidad de vida.'),
      p('Abrazamos a la Comisión de Mujeres de Fate que junto a sus familias llevan más de seis meses peleando contra los intentos de cierre de la fábrica y el despido de 1000 trabajadores. Llamamos a apoyar cada lucha de las, los y les trabajadoras contra los despidos, los cierres de fábrica y la precarización. Denunciamos el industricidio impulsado por el gobierno.'),
      p('Defendemos el Garrahan y el sistema de salud frente a los ataques de Milei. Apoyamos la pelea de las, les y los trabajadores que se organizaron, movilizaron y lograron torcerle el brazo al Gobierno. Rechazamos la persecución política y sindical llevada adelante contra la Secretaria General del ApyT Norma Lezana y decimos claramente ¡Organizarse sindicalmente no es delito! No a la persecución sindical en Garrahan, en Georgalos ni en ningún lugar de trabajo.'),
      p('Rechazamos el ataque a la libertad de organización sindical, y la política de intervención de los sindicatos como lo fue la infiltración policial y judicial a la asamblea departamental del sindicato docente de Córdoba en el marco de su paritaria, o la intervención judicial de la UOM.'),
      p('Decimos abajo la reforma laboral esclavista. Salario igual a la canasta familiar. Jornadas justas y derecho al descanso, al cuidado y al tiempo propio. Basta de doble explotación: las tareas de cuidado son trabajo no remunerado. Exigimos licencias por maternidad paternidad. Licencia por lactancia. Jardines materno paternales en cada lugar de trabajo. Licencia laboral por violencia de género. Abajo la brecha salarial: igual salario por igual tarea. Las trabajadoras y los sindicatos de lucha seguimos en las calles. Necesitamos la máxima unidad del movimiento obrero. Exigimos que las centrales sindicales impulsen un paro general, en la perspectiva de la huelga general para recuperar nuestros derechos y derrotar al gobierno de Milei, el FMI y sus cómplices.'),
      p('Volvemos a decir abajo a la reforma laboral que tiene doble o triple impacto negativo para el sector de la economía popular, movimientos sociales y piqueteros quienes además nos enfrentamos a una campaña de deslegitimación y persecución persistente por parte de los gobiernos. Este gobierno desfinancia la asistencia alimentaria al mismo tiempo que elimina el Salario Social Complementario y el resto de los programas sociolaborales que conquistamos con años de movilización y lucha por el reconocimiento de nuestro trabajo. Nosotras cuidamos, alimentamos y sostenemos las comunidades que ellos abandonan. Lo que hacemos es trabajo esencial y por eso decimos y que se escuche:'),
      c('¡Trabajo sin salario es esclavitud!'),
      p('Seguimos peleando por trabajo genuino con plenos derechos.')
    ]
  },
  {
    id: 'violencias',
    titulo: 'Violencias de género',
    bloques: [
      p('En la Argentina de Milei ocurre un femicidio, un trans-travesticidio, un lesbicidio, un feminicidio en contexto de narcotráfico/crimen organizado o un suicidio feminicida cada 33 horas. En lo que va de 2026 se contabilizan 200 en su mayoría llevados a cabo por parejas, ex parejas, familiares o allegados de las víctimas. Y apenas el 10% tenía denuncias previas hechas en alguna institución del Estado. El gobierno de Milei no solo ajusta, también niega esta realidad y la violencia de género y promueve los discursos de odio hacia las mujeres, las diversidades y nuestras luchas. El femicidio de Agostina Vega en Córdoba conmovió a la sociedad a nivel nacional, que salió a las calles en un 3J histórico al grito de ¡NIUNAMENOS!'),
      p('Milei desmanteló los programas de prevención, erradicación y sanción de la violencia de género que este movimiento conquistó y que, aún con su presupuesto insuficiente, defendemos. Además, pretende eliminar el agravante de violencia de género, femicidio, del código penal. Denunciamos la ausencia de respuestas y revictimización por parte de la justicia frente a cada caso y rechazamos el proyecto de falsas denuncias que busca amedrentar a quienes se animan a hablar y denunciar la violencia de género.'),
      c('¡No hay falsas denuncias, faltan denuncias! ¡Basta de justicia patriarcal!'),
      p('También denunciamos las responsabilidades estatales que aparecen en otros casos de violencia extrema. En 2025, Pablo Laúrta, vinculado a Varones Unidos, agrupación del libertario Agustín Laje, asesinó a su expareja Luna y a su suegra Mariel pese a contar con denuncias y órdenes de restricción previas. En Córdoba ese mismo año, Claudio Barrelier fue dejado en libertad pese a los antecedentes de violencia que pesaban sobre él. Estos casos muestran que no alcanza con contar femicidios después de que ocurren. Es necesario mirar qué hicieron las instituciones antes, qué medidas tomaron y cuáles omitieron.'),
      p('En nuestra provincia sólo en 2026 ya son 11 los femicidios y transtravesticidios. Con el femicidio de Agostina quedaron al descubierto las tramas de encubrimiento, inacción y responsabilidad del Estado provincial frente a esta problemática. Barrelier es un abusador y un femicida, cuya violencia fue avalada por una trama de complicidades, privilegios e impunidad construida desde distintos espacios de poder municipal y provincial. Señalamos las responsabilidades del fiscal Rodríguez, el fiscal Garzón, el ministro Quinteros y el exconcejal Moreno frente al femicidio de Agostina. ¡Exigimos justicia por Agostina y que se juzgue hasta las últimas consecuencias a toda la cadena de responsabilidades!'),
      c('¡Llaryora es responsable!'),
      p('A 7 años del femicidio de Cecilia Basaldúa acompañamos el pedido de la familia de exhumación para avanzar en nuevas pericias. ¡Justicia y verdad por Cecilia Viajera!'),
      p('A 11 años del femicidio de Andrea Castana que continúa impune, exigimos ¡JUSTICIA!'),
      {
        t: 'presentes',
        items: [
          'Agostina Vega', 'Iris Blanco', 'Natalia Delso', 'Paola Acosta', 'Mili', 'Catalina Gutierrez',
          'Rocío Belén Gómez', 'Alejandra Villarreal', 'María Lucila Pagani', 'Luciana Ojeda',
          'Lautaro Córdoba', 'Jessica Núñez', 'Delfina Aimino', 'Lourdes Abigail Orellano'
        ]
      },
      c('¡Justicia por ellas y por todas!'),
      p('Justicia por todas las víctimas de femicidio, trans travesticidio, transhomicidios y lesbicidio.'),
      p('A pesar de los ataques contra las políticas de género, la lucha feminista en nuestra provincia logró arrancarle al gobierno dispositivos y áreas destinadas a la prevención, erradicación y sanción de la violencia de género. El recorte de la provincia bajó a rango de Secretaría el Ministerio de la Mujer, ajustando aún más a las ya precarizadas trabajadoras del Polo de la mujer. Les trabajadores del Polo de la Mujer, decimos: ¡Basta de precarización laboral! Somos quienes acompañamos todos los días los procesos de salida de las violencias de mujeres y diversidades, y abordamos a los varones que ejercen violencia. Lo hacemos bajo condiciones de extrema precariedad, inestabilidad institucional y desvalorización de nuestras tareas por parte del gobierno de Llaryora.'),
      c('¡Basta de monotributos y precarización en el Polo de la Mujer y el Centro Integral de Varones! ¡Cuidemos a quienes nos cuidan!')
    ]
  },
  {
    id: 'aborto-esi',
    titulo: 'Aborto, anticoncepción y ESI',
    bloques: [
      c('¡¡El aborto es legal en Argentina!!'),
      p('El aborto libre, legal, seguro y gratuito es un derecho conquistado con la enorme fuerza de este movimiento y de la marea verde. Rechazamos cualquier intento del gobierno de Milei de cuestionarlo, así como sus declaraciones que buscan culpabilizar a nuestro movimiento por los fracasos económicos de su gestión.'),
      p('Frente al corrimiento deliberado del Estado nacional, que desfinancia programas, interrumpe la compra y distribución de insumos y abandona sus responsabilidades en materia de salud sexual y reproductiva, son lxs trabajadorxs de la salud quienes sostienen cada día el acceso a la IVE y la ILE. Con compromiso, y muchas veces con recursos propios y en condiciones de precarización, garantizan en hospitales, centros de salud y consultorios lo que el gobierno nacional se niega a garantizar. Nuestro reconocimiento y nuestro abrazo a cada unx de ellxs. ¡Apoyamos su lucha!'),
      p('Exigimos al gobierno nacional que cumpla con la Ley 27.610 y asuma la plena implementación del derecho al aborto en todo el país. Exigimos la compra y distribución sostenida de misoprostol, mifepristona, anticonceptivos e insumos; el financiamiento de los programas de salud sexual y reproductiva y de la ESI; y el fin de todas las barreras que limitan nuestra autonomía.'),
      c('¡No vamos a aceptar ningún ataque a nuestro derecho a decidir! ¡Ni un paso atrás!'),
      p('Conquistamos hace más de 20 años una ley que promueve el acceso gratuito a los métodos anticonceptivos para cuidar nuestra salud sexual reproductiva y no reproductiva. Un reclamo que fue tomado por los encuentros en sus inicios. Hoy este gobierno desfinancia este programa y atenta contra la posibilidad de decidir de miles de mujeres y diversidades. Desmanteló el PLAN ENIA y obstaculiza el acceso a la salud sexual integral. ¡Exigimos presupuesto para que se cumpla la ley en todo nuestro territorio y se garantice el acceso a métodos anticonceptivos gratuitos!'),
      p('A 20 años de su sanción, la ESI es mucho más que una Ley: es una conquista de este movimiento, una práctica que transformó las escuelas que defiende la dignidad, la diversidad y la afectividad en las aulas y las calles. Es una herramienta para prevenir la violencia de género, el abuso sexual hacia infancias y adolescencias, la discriminación por motivos de género y para acompañar los procesos por reconocer sus identidades. La defendemos frente a los ataques de los gobiernos y las iglesias, exigiendo presupuesto, capacitación, implementación plena en todo el territorio y la anulación de su artículo 5 para garantizar infancias y juventudes libres y con derechos plenos. Reconocemos el trabajo que les juventudes realizan día a día en sus espacios de cursada para sostener la implementación de la ESI, y los aportes que elles hacen frente a un Estado que no termina de adecuarse a las nuevas formas de violencia eligiendo no regular ni activar protocolos frente a los casos de abuso que incorporan a la Inteligencia Artificial, dándole una nueva herramienta a los violentos y abusadores. Reafirmamos nuestro compromiso con una ESI situada, diversa, feminista, transfeminista, anticapacitista y antirracista. Por un mundo mejor.'),
      c('¡Por infancias y adolescencias protagonistas y libres de violencias! ¡La seño siempre te cree!')
    ]
  },
  {
    id: 'lgbt',
    titulo: 'Colectivo LGBTTTIQ+',
    bloques: [
      p('Milei le ha declarado la guerra al colectivo LGBTTTIQ+. Su discurso de odio en Davos provocó el rechazo y movilización de cientos de miles en todo el país y la construcción de la histórica primer marcha del orgullo antifascista! Desde su asunción, los crímenes de odio han escalado exponencialmente, como el triple lesbicidio de Barracas donde Barrientos y su lesboodio se llevó la vida de Pamela, Roxana y Andrea, dejando a Sofía como la única sobreviviente. Este mes, el juicio entra en su etapa final. El 15 de octubre declara el lesbicida Barrientos. Denunciamos a la justicia heterocispatriarcal que negó la declaración de compañeres convocades para aportar el contexto lesbofóbico que permite comprender este crimen de odio. Por eso EXIGIMOS que se declare como crimen de odio y que se aplique una condena ejemplar al lesbicida.'),
      c('¡Justicia por Pamela, Sofía, Andrea y Roxana! ¡Reparación para Sofía!'),
      p('En Córdoba, Vica Monteros, activista y referente LGBT, fue brutalmente asesinada en su casa; su asesino tenía sus redes sociales plagadas de publicaciones de odio y amenazas hacia nuestro colectivo. Samuel Tobares fue asesinado por la policía de Córdoba en plena calle, mientras era insultado con discursos de odio. Dos crímenes atravesados por la violencia hacia nuestras identidades, frente a una Justicia que sigue llegando tarde cuando se trata de nuestras vidas a la que todavía le exigimos respuestas desde hace más de 5 años: ¿DÓNDE ESTÁ TEHUEL?'),
      c('¡Investigación y justicia ya! ¡Basta de crímenes de odio!'),
      p('¡Defendemos la ley de identidad de género y exigimos presupuesto para su aplicación en todo el territorio plurinacional! ¡No damos un paso atrás con nuestros derechos!'),
      p('Repudiamos el accionar de la Justicia contra Lulén Watts y Max Caviglione, que se encuentran detenidos en Bower por un enfrentamiento transodiante. Los condenaron a 12 años de prisión, negando la perspectiva de género y la violencia de la cual eran víctimas por parte de William Watts. Exigimos acceso a la justicia para las diversidades sexuales y el pleno ejercicio de nuestros derechos. Basta de ensañamiento con las identidades trans.'),
      c('¡Pronta libertad para Max y Lulén!'),
      p('El vaciamiento del Estado nos sigue costando vidas, como en el caso de Luciana Centeno. Su muerte generó la respuesta de todo el colectivo organizando una movilización histórica en la conservadora Jesús María del festival de doma.'),
      c('¡La furia travesti es resistencia!'),
      p('En Córdoba grupos religiosos y fascistas quisieron impedir la realización del 2º Congreso de niñeces y juventudes trans pero con la solidaridad de amplios sectores frenamos este ataque. De la misma manera operaron en complicidad con el gobierno nacional que por medio de un DNU intentó prohibir los tratamientos de hormonización e intervenciones quirúrgicas a personas menores de 18 años, garantizados por la ley de identidad de género. En Córdoba aún existen las mal llamadas “terapias de conversión” que realizan instituciones religiosas con orientaciones oscurantistas y reaccionarias con el amparo político de los gobiernos. Eso no es terapia, es tortura y ¡exigimos que cesen YA!'),
      p('Denunciamos las deudas históricas del gobierno provincial en relación a nuestro colectivo. Exigimos acceso a la vivienda, presupuesto para enfrentar la crisis alimentaria, programas específicos destinados al acceso a la salud y reparación para nuestras sobrevivientes.'),
      p('En la tierra de Pepa Gaitán, lesbiana cordobesa asesinada por el odio y cuya memoria dio nombre al Día de la Visibilidad Lésbica, decimos una vez más: basta de odio, de lesbicidio y de violencias contra nuestras vidas. Hacemos de su memoria una bandera y de nuestras luchas, una respuesta colectiva. Seguimos acá, visibles, organizadas, tejiendo redes y en lucha por nuestras vidas, nuestro deseo y dignidad. Existimos porque resistimos.'),
      p('¡Vamos a seguir organizades y marchando con nuestro orgullo en Córdoba y en cada rincón del país! Y especialmente en CABA el 7 de noviembre aunque a Jorge Macri y los grupos religiosos organizados no les guste!'),
      c('¡El orgullo no se puede prohibir!')
    ]
  },
  {
    id: 'iglesias',
    titulo: 'Iglesias y Estado',
    bloques: [
      p('La lucha por nuestros derechos confronta de lleno con el oscurantismo de la iglesia católica sostenida por el Estado. La Iglesia Argentina sigue gozando de un entramado de privilegios económicos, exenciones impositivas y financiamiento estatal. Mientras despliega un manto de impunidad y premia con protección a sus curas abusadores, como es el caso del sacerdote Nicola en Córdoba acusado de abusar de 13 infancias, y que fue premiado con una misa en la Catedral. ¡Sumamos nuestra voz al reclamo de justicia!'),
      p('Las iglesias evangelistas se han instalado como dispositivos de control moral para imponer un discurso de odio anti derechos de las mujeres y las diversidades. Bajo la excusa de la fe y la defensa de un modelo de familia conservador, predican culpa, vergüenza y sumisión, negando el derecho a decidir sobre nuestros cuerpos y nuestras identidades. Su cruzada no es espiritual, es política: buscan disciplinar a las pibas, a las travas, a las lesbianas y quienes desobedecemos el mandato patriarcal. Denunciamos la creación de las oficinas de la fe que es parte de la avanzada fundamentalista global que solo recrudece las violencias.'),
      c('¡Iglesias y Estado asunto separado!')
    ]
  },
  {
    id: 'trabajo-sexual',
    titulo: 'Trabajo sexual',
    bloques: [
      p('¡Desde Córdoba alzamos la voz! DENUNCIAMOS las detenciones arbitrarias. DENUNCIAMOS el hostigamiento y la violencia que sufrimos las personas que ejercemos el trabajo sexual. DENUNCIAMOS los asesinatos, desapariciones y los crímenes sin esclarecer. NO existen garantías para denunciar o reclamar justicia sin ser estigmatizadas.'),
      p('Reconocemos que las formas de ejercerlo han cambiado, hoy muchas compañeras trabajan a través de las redes y otras plataformas digitales, eso ha generado otras formas de violencias. EXIGIMOS el fin de todas las formas de violencia. EXIGIMOS protección y todos nuestros derechos humanos. EXIGIMOS justicia por todas las compañeras que sufrieron violencia patriarcal. Justicia por Susana Romero, Anahí Bulnes y por todas. NO pedimos privilegios, EXIGIMOS respeto a nuestra autonomía y determinación como Trabajadoras sexuales.')
    ]
  },
  {
    id: 'trata',
    titulo: 'Trata y desaparecidas',
    bloques: [
      p('En Argentina y en Córdoba exigimos el desmantelamiento de las redes de trata y explotación sexual. El Estado con sus políticas de empobrecimiento, precarización y marginación lleva a miles de mujeres, trans, niñes y adolescentes a manos de tratantes y proxenetas, mientras garantiza impunidad a estas redes. El Gobierno, las fuerzas policiales y la Justicia se enriquecen con el negocio de la trata y explotación sexual, mientras seguimos buscando a nuestras desaparecidas. El brutal caso del triple femicidio de Iara, Brenda y Morena en Florencio Varela dejaron esta complicidad en evidencia.'),
      p('En Córdoba nos faltan Delicia Mamani Mamani y Delia Gerónimo Polijo. Cuando la familia de Delicia intentó realizar la denuncia de inmediato no la tomaron en un claro hecho de discriminación por su condición inmigrante. Luego de un enorme esfuerzo de visibilización y lucha de su familia, compañeras y docentes la causa avanzó, y comenzó a investigarse bajo esta carátula. Denunciamos complicidad policial, judicial y política y gritamos una y otra vez Por Delicia, Delia y por todas.'),
      c('¡Dónde está Delicia, Delicia dónde está!'),
      p('Los abusos y la explotación infantil en Villa de María de Río Seco, que derivó en la imputación del ex asesor legislativo José Aníbal Villarreal y la renuncia del ex legislador Cañito Flores es otra muestra más de la trama de complicidades y encubrimiento de las redes de trata, en el que se entrecruzan las responsabilidades del poder económico, la justicia patriarcal y el poder político.'),
      p('En Córdoba hay desaparecidas. ¡Seguimos exigiendo justicia por Yamila Cuello para quien conquistamos la histórica condena a Simone luego de años de búsqueda y lucha! ¡Yamila Cuello presente!'),
      p('Por Delia Jerónimo Polijo, Natalia Arias, y por todas. También por Lian Flores.'),
      c('¡Desmantelamiento ya de las redes de trata y explotación sexual!')
    ]
  },
  {
    id: 'justicia',
    titulo: 'Justicia patriarcal y libertades democráticas',
    bloques: [
      p('Repudiamos el ataque a las libertades democráticas, la manipulación de la justicia perpetrada por el gobierno nacional de Javier Milei para eliminar a la oposición política. Denunciamos la violencia, persecución y proscripción política hacia Cristina Fernández de Kirchner que ataca los derechos democráticos conquistados. La misma justicia que quiere impulsar junto al gobierno una reforma electoral antidemocrática y proscriptiva. Decimos No a la reforma electoral. Decimos Libertad a Milagro Sala. ¡Libertad a todas las presas políticas!'),
      p('Denunciamos los ataques y expresiones machistas hacia Myriam Bregman por parte del gobierno nacional de Milei.'),
      p('Repudiamos los ataques por parte de Patricia Bullrich y otros funcionarios del gobierno a Manuela Castañeira por denunciar la responsabilidad de los mismos ante el triple femicidio de Florencio Varela.'),
      p('Repudiamos los ataques contra la libertad de expresión de periodistas y referentes, disciplinando y acallando las voces críticas.'),
      p('Denunciamos al sistema judicial patriarcal que garantiza la impunidad y complicidad frente a la violencia de género. Los jueces y funcionarios con Horacio Rosatti, Carlos Rosenkrantz y Ricardo Lorenzetti a la cabeza son quienes demoran las causas, otorgan penas leves y privilegios de prisión domiciliaria a violadores, violentos y femicidas, revictimizando a quienes se animan a denunciar.'),
      p('La justicia patriarcal es la que tuvo a Paola Ortiz más de 13 años presa por una emergencia obstétrica, quien tras una revisión del Máximo Tribunal de la Provincia y la gran movilización feminista, recuperó su libertad en Septiembre del 2026. El TSJ recortó la condena de Paola tras considerar que fue juzgada sin perspectiva de género y clase y sin un enfoque de interseccionalidad, incorporando al análisis del caso la pobreza, la violencia familiar y la vulnerabilidad que atravesaba.'),
      c('¡Sigamos luchando por su absolución y reparación! ¡Paola está en el encuentro!'),
      p('Es esta misma justicia la que vincula a las niñeces con sus agresores y abusadores mientras persigue a madres protectoras con el falso SAP. Acompañamos a las madres protectoras en su lucha, como a Flavia Saganías, a Alexandra Sabio, madre del niño M cuyo progenitor y raptor es Claude Staicos funcionario del gobierno neuquino. Exigimos la restitución de les niñes a su centro de vida y el respeto de los derechos de las niñeces a ser escuchadas y protegidas. ¡Justicia por Suri y por todes! ¡Basta de perseguir y criminalizar a madres protectoras! Apoyamos el pedido de Jury contra el juez de Córdoba José Arguello quien asesoró de manera ilegal a un pedófilo, siendo una prueba de cómo el sistema judicial ampara abusadores.'),
      p('Denunciamos que la Justicia cordobesa actúa encubriendo a Oscar González en el crimen vial de Traslasierra que terminó con la vida de Alejandra Bengoa y dejó con serias lesiones a Alexa y Marina. Esta justicia como todo el poder político movieron todo para demorar el juicio y buscan culpar por el crimen a la única persona que no se puede defender, la víctima fatal del hecho.'),
      c('¡Justicia por Alejandra, Alexa y Marina!')
    ]
  },
  {
    id: 'protesta',
    titulo: 'Criminalización de la protesta',
    bloques: [
      p('Denunciamos la criminalización de la protesta y la persecución a quienes salimos a la calle. En Córdoba hay 6 defensores ambientales de Punilla que lucharon contra la Autovía de montaña y están imputados y elevados a juicio, 3 de ellas son mujeres de nuestros territorios. ¡Absolución ya!'),
      p('Denunciamos la criminalización de las compañeras del movimiento piquetero y de movimientos sociales cuyo objetivo es disciplinar y desarticular la organización barrial de quienes sostienen la lucha contra el hambre y por el trabajo genuino. Asimismo exigimos el cierre de las causas y la absolución de quienes protagonizaron el jujeñazo.'),
      c('¡Basta de criminalizar la protesta! ¡Absolución ya a todas las detenidas por luchar!')
    ]
  },
  {
    id: 'pueblos',
    titulo: 'Pueblos y Naciones Preexistentes',
    bloques: [
      p('Desde el inicio de la gestión de Javier Milei, las políticas de gobierno hacia los pueblos preexistentes dieron un grave retroceso en materia de derechos humanos, territoriales y jurídicos. La disolución del Registro Nacional de Comunidades Indígenas (RENACI), el vaciamiento del Instituto Nacional de Asuntos Indígenas (INAI), la derogación de la Ley 26.160 de emergencia territorial, la desprotección frente a desalojos y el debilitamiento de los marcos legales ambientales y de tierras. Estas medidas desarticularon los mecanismos estatales de relevamiento territorial, eliminaron el freno legal a los desalojos de tierras ancestrales y dejaron a las comunidades expuestas al avance de proyectos extractivistas sin la debida garantía de consulta previa, retrocediendo las victorias de reconocimiento institucional y protección jurídica.'),
      p('Nosotras, nosotrxs, somos Pueblos y Naciones Preexistentes al Estado Argentino. Históricamente habitamos el territorio con nuestras cosmovisiones, vivencias y saberes; con autonomía, autogobierno y autodeterminación. Hoy somos pueblos vivos. En resistencia desde hace más de 500 años.'),
      p('Nombramos lo que muchas veces se intenta ocultar: la violencia territorial es violencia colonial. No son hechos aislados ni de simples decisiones de desarrollo, patrimonio, producción o infraestructura. La patrimonialización de nuestros territorios, las obras viales vinculadas a los planes de integración regional, las fumigaciones y la apropiación de nuestras culturas, saberes y símbolos son formas actuales de un despojo que comenzó con la conquista y que todavía continúa.'),
      p('Nuestros territorios no son espacios vacíos, recursos disponibles ni paisajes para ser apropiados: son cuerpo, memoria, comunidad, espiritualidad y vida. Cuando empresas y gobiernos deciden sobre ellos sin nosotras y nosotros, cuando se avanza sin consulta previa, libre e informada, y cuando se desconoce nuestra autonomía y condición de pueblos preexistentes, se reproduce la violencia colonial. Lo que se ejerce sobre nuestros territorios se ejerce también sobre nuestros cuerpos y comunidades.'),
      p('Rechazamos con firmeza las políticas de saqueo y entrega, y manifestamos nuestro más enérgico repudio. Denunciamos: las violencias que impactan doble o triplemente sobre nuestros cuerpos; los desalojos en territorio ancestral, la discriminación y el racismo estructural que persisten en Córdoba y en todo el país; los megaproyectos, planes de infraestructura y proyectos inmobiliarios que saquean cerros sagrados, desmontan nuestros bosques y secan y contaminan nuestros ríos; los jueces, legisladores, diputados y senadores cómplices que entregan el territorio firmando decretos de retroceso y desalojos sin pisar el suelo ancestral; la desaparición sistemática y sostenida de hermanas indígenas, la trata, el trabajo forzado, el chineo, el hostigamiento y la persecución política; el gobierno de Juan Schiaretti y su sucesor Martín Llaryora por el daño que deja en Córdoba el Plan IIRSA-COSIPLAN.'),
      p('EXIGIMOS: restitución de los territorios y las aguas, reconocimiento comunitario efectivo y urgente, freno inmediato a todos los desalojos en territorio indígena, protección integral a las defensoras del agua y del monte, respeto a la Madre Naturaleza como sujeto de derecho, cumplimiento efectivo de las leyes, tratados y convenios existentes, capacitación obligatoria y vinculante en derechos indígenas y ambientales para todos los funcionarios.'),
      c('¡Justicia por Julia Chuñil!'),
      c('¡Fuera Mekorot de nuestros territorios! ¡Fuera el Corredor Bioceánico! ¡El agua no se vende, se defiende!'),
      p('¡Fuera las multinacionales! Fuera Porta, Monsanto, Cargill, Barrick Gold, Syngenta! ¡Fuera Lewis! ¡Fuera Benetton!'),
      p('Seguiremos caminando, por el buen vivir, Allin kawsay, kume felen! Por nuestra identidad, cultura y cosmovivencia, nuestros saberes y medicinas! ¡EXIGIMOS REPARACIÓN HISTÓRICA!'),
      c('Somos guardianas de la vida. ¡Vivas y Libres nos queremos! ¡Camichingón! ¡Ischilín! ¡Marichiweu! ¡Jalaná! ¡Jallalla! ¡Kausachum! ¡Aguyjevete!')
    ]
  },
  {
    id: 'territorio',
    titulo: 'Soberanía y bienes comunes',
    bloques: [
      p('Hoy, frente al retroceso de las políticas oficiales y el alineamiento del gobierno con potencias extranjeras, defendemos activamente nuestros mares, glaciares, cordilleras y el conjunto de nuestros bienes comunes y territorios de la destrucción ecológica que llevan adelante empresas extractivistas y sectores del imperialismo en alianza con los gobiernos. No hay soberanía posible si el Estado convalida la extranjerización de nuestros suelos entregando la Ley de Tierras, ni si permite que la Ley de Glaciares sea vulnerada para rifar el agua a la megaminería. Rechazamos la entrega del control sobre el Paraná a empresas imperialistas.'),
      c('¡La tierra es de quien la cuida y la trabaja!')
    ]
  },
  {
    id: 'cultura',
    titulo: 'Cultura',
    bloques: [
      p('Sostenemos que la cultura es un derecho Humano Universal. Esto significa que todxs tenemos derecho a participar y disfrutar libremente de la vida cultural de nuestra comunidad. Por eso el Estado debe garantizarlo, con políticas públicas, presupuesto y presencia en cada rincón del territorio.'),
      p('Frente al desfinanciamiento de la Cultura de nuestro país, les trabajadores de la cultura levantamos la voz para denunciar el gravísimo ajuste y desfinanciamiento por parte del gobierno de Milei. Denunciamos el desmantelamiento de espacios, programas y herramientas que garantizan el derecho a la cultura y al trabajo. Este ataque profundiza la precarización de artistas, técnicxs, docentes y trabajadorxs de la cultura, y limita el acceso de nuestro pueblo a la producción cultural.'),
      p('Denunciamos el incumplimiento de la Ley 27.539 que establece Cupo y Acceso de Artistas Mujeres y Disidencias a Eventos Musicales, y también el desfinanciamiento y el vaciamiento del Instituto Nacional de Cine y Artes Audiovisuales (INCAA), del Instituto Nacional del Teatro (INT). Exigimos la restitución de sus presupuestos y la plena vigencia de la ley de cupos en escenarios. Denunciamos el desfinanciamiento de Bibliotecas y Centros Culturales.'),
      p('Exigimos que las artesanas y feriantes podamos trabajar en un libre uso de espacios públicos, libres de violencias machistas y policiales. Queremos que nuestras voces y nuestras lógicas organizativas sean protagonistas en la construcción de políticas públicas municipales y provinciales. Nuestros modos de producción también son políticos y los defendemos con orgullo.'),
      p('Reivindicamos también el arte callejero que lleva la cultura a nuestros territorios siendo expresiones artísticas que democratizan el acceso al arte.'),
      p('Denunciamos la apropiación cultural, mercantilización de nuestra ancestralidad, el vaciamiento de sentido de nuestras cosmovisiones y por esto llamamos a no reproducir estas prácticas. Nuestras expresiones culturales no son mercancía ni folklore despojado de su historia.'),
      p('Defendemos una cultura popular, comunitaria, transfeminista, diversa y autogestiva que nos permita imaginar, narrar historias en común en las cuales nos reconozcamos todes.'),
      p('Frente a la precarización y a los recortes, elegimos organizar la alegría y defender nuestra identidad como pueblo haciendo de la cultura una herramienta para transformar este presente y construir otras formas de vivir.')
    ]
  },
  {
    id: 'salud-mental',
    titulo: 'Salud mental y juventudes',
    bloques: [
      p('Por otra parte tenemos una enorme problemática referida a la salud mental. Somos miles quienes necesitan ayuda sanitaria urgente, y no tenemos ni una sola política de Estado que esté abocada a solucionar la situación.'),
      p('Para entender la gravedad del asunto basta con saber que en Argentina, la principal causa de muerte violenta entre las, les y los jóvenes es el suicidio. Esta situación no responde a una supuesta complejidad característica de la adolescencia, ni es parte de un capricho por “llamar la atención” sino que es parte de un contexto donde la precarización y la falta de salidas provocan un desánimo hacia un posible futuro, reflejando el impacto de las políticas de Estado que impulsa el gobierno de Milei, que ahogan el bienestar cotidiano, hambrea a nuestras familias y promueve la explotación laboral de las, les y los jóvenes en todo el territorio.'),
      p('En los distintos niveles educativos, así como en los clubes, barrios y pueblos donde se concentra gran parte de la población joven, se respira desde hace años una profunda desesperanza frente a un sistema que nos dificulta la continuidad de nuestros estudios y a ser protagonistas de espacios culturales o recreativos. A todo esto se suma el desfinanciamiento a los espacios de contención, la criminalización, el ninguneo y la persecución constante hacia nuestras juventudes, además del avance de las adicciones y la ludopatía como una supuesta vía de escape, mientras el contacto social disminuye, crece el individualismo de salvarse solo y los cuerpos sufren múltiples violencias estructurales.'),
      p('Sostenemos que la salud mental es un derecho. Denunciamos el desfinanciamiento y exigimos condiciones dignas para vivir. Denunciamos el disciplinamiento que se nos quiere imponer. Ante un Estado que elige reprimir antes que contener y golpear a las instituciones en lugar de respaldarlas y donde la falta de recursos económicos impide pagar una terapia o acceder a medicamentos, ¡reivindicamos que la única salida real y transformadora se sostiene en la recuperación de la colectividad y la solidaridad comunitaria! Llamamos a todxs las, les y los jóvenes a adueñarse de los espacios de participación, al armado de centros de estudiantes combativos en los secundarios y facultades y sobre todo a organizar el hartazgo. Hagamos la calle nuestra.'),
      c('¡No estás solx!')
    ]
  },
  {
    id: 'violencia-institucional',
    titulo: 'Violencia institucional',
    bloques: [
      p('En Córdoba, la lucha contra la violencia policial y la violencia institucional atraviesa nuestros territorios y es un debate transversal en todo el movimiento: las políticas represivas no impactan de manera homogénea: se articulan con el cisheteropatriarcado, el racismo y la desigualdad de clase, y despliegan formas específicas de violencia contra mujeres, adolescencias y disidencias. En los barrios de Córdoba, las mujeres en situación de pobreza y las identidades trans y travestis son perseguidas por sus economías de subsistencia, mientras las violencias se recrudecen en los contextos de encierro, a través de requisas vejatorias, humillaciones, abusos y violencias sexuales.'),
      p('Esta persecución también se expresa en la criminalización de las mujeres por narcomenudeo. En Bouwer, la mayoría de las mujeres presas están detenidas por esta causa, una realidad que expone la selectividad de un sistema penal que castiga a las más empobrecidas, mientras las estructuras de poder que controlan el mercado de las sustancias permanecen intactas.'),
      p('Frente al gatillo fácil, las desapariciones, las muertes en contextos de encierro y la violencia policial, son las madres, hermanas, abuelas, tías y familiares quienes sostienen las búsquedas, enfrentan la impunidad y convierten el dolor en organización y lucha colectiva. Son ellas quienes recorren tribunales, denuncian los abusos, acompañan a otras familias y mantienen viva la memoria de quienes ya no están. Su lucha es una fuerza política fundamental para exigir verdad y justicia, y para romper el silencio que busca imponer la violencia estatal.'),
      c('¡Justicia es que no vuelva a pasar! ¡Ni una muerte más en manos de la Policía! ¡No estamos todas, faltan las presas! ¡Es violencia estatal!')
    ]
  },
  {
    id: 'internacional',
    titulo: 'Situación internacional',
    bloques: [
      p('Hacemos este encuentro en un mundo donde los gobiernos capitalistas de Trump y la extrema derecha impulsan la competencia imperialista. La disputa geopolítica entre EEUU y China intensifica el desarrollo de guerras, conflictos armados y un brutal genocidio contra el pueblo palestino. La agresión a Venezuela y el bloqueo a Cuba por parte de Trump, la guerra de invasión a Ucrania por parte de Rusia, el avance de la OTAN en Europa del Este, el ataque conjunto del imperialismo yanki e Israel a Irán son una muestra. ¡Nuestro movimiento viene siendo protagonista en enfrentarlos! Somos quienes gritamos No Kings y Ice Out en EEUU, quienes pusimos en pie la primer marcha del orgullo antifascista y antirracista en Argentina frente a los discursos de odio de Milei en Davos.'),
      p('El brazo regional del imperialismo se operativiza a través del escudo de las Américas y con gobernantes que ajustan, hambrean, persiguen y estigmatizan nuestros pueblos, como Kast en Chile, Peña en Paraguay, Paz Pereyra en Bolivia, Keiko Fujimori en Perú, de la Espriella en Colombia, Bukele en El Salvador, Noboa en Ecuador, Asfura en Honduras, Arévalo en Guatemala... por ellos saludamos la resistencia y la lucha feminista contra la ultraderecha en la región.'),
      c('¡No pasarán!'),
      p('Estamos con les estudiantes de secundarios en Francia que se enfrentan al presupuesto de Macron que ajusta la educación mientras triplica el presupuesto para guerra. Y con el masivo acampe que en España está cuestionando el multimillonario negocio de las inmobiliarias que pasan por encima del derecho a la vivienda para la juventud y el pueblo trabajador español.'),
      p('Exigimos justicia por Marielle Franco, asesinada en Brasil bajo el gobierno de Bolsonaro por defender los derechos humanos, la participación política de las mujeres, negras, lesbianas y pobres. ¡Marielle Franco Presente!'),
      p('Nos solidarizamos con nuestra compañera Nekane Txapartegi, que viniendo a este Encuentro Plurinacional fue deportada por haber sido presa política y exiliada vasca. ¡Nekane es una de nosotrxs!'),
      p('Repudiamos la criminalización y detención de activistas y referentes que en todo el mundo se pronuncian contra el genocidio en Palestina como la compañera Vanina Biasi, nos oponemos a la elevación a juicio de su causa por tuitear en contra del genocidio. Denunciamos el secuestro y tortura por parte del Estado Sionista de Israel a Cele Fierro y las compañeras de la Global Sumud Flotilla. ¡Llamamos a participar en todo el mundo de las acciones en apoyo al pueblo palestino para frenar el genocidio! La lucha contra el genocidio de Israel es una causa profundamente feminista, por su carácter anticolonial y de rechazo ante todas las formas de opresión.')
    ]
  },
  {
    id: 'migrantes',
    titulo: 'Población migrante',
    bloques: [
      p('Exigimos la derogación del DNU 366/2025, que menoscaba los derechos de la población migrante a través de la modificación de la ley Nacional de Migraciones. El DNU es discriminatorio al exigir para la radicación permanente demostrar "medios de vida" en un país donde todxs lxs trabajadorxs estamos precarizadxs. Además, el cambio de la política migratoria de la agenda de derechos humanos a la esfera del Ministerio de Seguridad es xenófobo y construye la población migrante como enemigo interno. El resultado son 851 operativos de persecución en toda Argentina y el uso de la condición migratoria como medio para terminar con la universalidad de derechos a la salud y educación, que ahora nos niegan.'),
      c('Empiezan por nosotrxs, pero vienen por todxs.')
    ]
  },
  {
    id: 'cierre',
    titulo: 'Cierre',
    bloques: [
      p('Llegamos a este 39° Encuentro Plurinacional con el orgullo de haber construido, a pesar de las diferencias, esta comisión organizadora para recibir a esta marea. Porque creemos en la organización, en la rebeldía de nuestros pañuelos, en la historia de nuestras conquistas.'),
      p('Esta comisión organizadora deja una huella para las que vendrán: la de una organización que superó sus diferencias individuales en pos de un gran encuentro colectivo.'),
      p('Somos quienes nos organizamos para acompañar las luchas docentes, de jubiladxs, trabajadores, de las personas con discapacidad, y ante cada injusticia. Somos quienes sostenemos la olla. Somos quienes no estamos dispuestas a retroceder. A Milei y a su motosierra les decimos que acá estamos, más organizadas y organizades que nunca.'),
      p('Somos la gran marea que defiende la alegría y la rebeldía como posición política, porque nuestros derechos se conquistan y defienden en las calles.'),
      p('¡Bienvenidas, bienvenides a este gran Encuentro! Bienvenides a la discusión política, a la organización de nuestras luchas y a la fiesta que nos caracteriza. Esta es la potencia transformadora de la que nunca volvemos iguales.'),
      c('¡Arriba nuestras banderas y nuestras luchas! ¡Arriba nuestros pañuelos!'),
      c('A partir de ahora, el Encuentro es de todas y todes.')
    ]
  }
];

// ─── BLOQUES ──────────────────────────────────────────────────────────────────

function Bloque({ b }) {
  if (b.t === 'c') {
    return (
      <p className="my-6 mx-auto max-w-xl text-center bg-[#fdb10c] text-[#2f1435] rounded-2xl px-5 py-3 italic font-black text-lg sm:text-xl leading-snug shadow-md shadow-[#4a2055]/15">
        {b.text}
      </p>
    );
  }
  if (b.t === 'presentes') {
    return (
      <div className="my-8 bg-[#2f1435] rounded-2xl p-5 sm:p-6">
        <p id="titulo-presentes" className="m-0 mb-4 text-center text-[#fdb10c] font-black uppercase tracking-widest text-sm">¡Presentes!</p>
        <ul aria-labelledby="titulo-presentes" className="m-0 p-0 list-none flex flex-wrap justify-center gap-2">
          {b.items.map(nombre => (
            <li key={nombre} className="bg-white/10 border border-white/20 text-white text-sm font-semibold px-3 py-1.5 rounded-full">
              {nombre}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return <p className="text-[#343230] text-base sm:text-lg leading-relaxed mb-5">{b.text}</p>;
}

// ─── ÍNDICE ───────────────────────────────────────────────────────────────────

function useSeccionActiva(ids) {
  const [activa, setActiva] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(entradas => {
      entradas.forEach(e => { if (e.isIntersecting) setActiva(e.target.id); });
    }, { rootMargin: '-25% 0px -65% 0px' });
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);
  return activa;
}

function Indice({ activa, onElegir }) {
  return (
    <ol className="m-0 p-0 list-none space-y-0.5">
      {SECCIONES.map((s, i) => (
        <li key={s.id}>
          <a
            href={`#${s.id}`}
            onClick={onElegir}
            aria-current={activa === s.id ? 'true' : undefined}
            className={`flex gap-2 rounded-lg px-3 py-1.5 text-sm transition-colors ${activa === s.id
              ? 'bg-[#eadeed] text-[#4a2055] font-bold'
              : 'text-[#343230]/75 hover:bg-[#faf7fb] hover:text-[#4a2055]'}`}
          >
            <span aria-hidden="true" className="tabular-nums text-[#813893] font-bold shrink-0">{String(i + 1).padStart(2, '0')}</span>
            <span>{s.titulo}</span>
          </a>
        </li>
      ))}
    </ol>
  );
}

// ─── PÁGINA ───────────────────────────────────────────────────────────────────

const IDS = SECCIONES.map(s => s.id);

export default function DocumentoAperturaPage() {
  const activa = useSeccionActiva(IDS);
  const [indiceAbierto, setIndiceAbierto] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Documento de apertura · 39° Encuentro Plurinacional';
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative font-body bg-[#FFF1E3] min-h-screen" style={{ scrollPaddingTop: '80px' }}>
        {/* Enlace para saltar el menú: invisible hasta que se llega con Tab */}
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:bg-[#fdb10c] focus:text-[#2f1435] focus:font-bold focus:px-4 focus:py-2 focus:rounded-full"
        >
          Saltar al contenido
        </a>
        <Navbar hasTopSpace={false} />

        <main id="contenido" tabIndex={-1} className="outline-none">
          {/* Encabezado */}
          <header
            className="pt-28 pb-14 px-4 relative overflow-hidden"
            style={{ background: 'linear-gradient(160deg, #2f1435 0%, #662c74 45%, #184b22 100%)' }}
          >
            <div className="absolute -top-20 right-10 w-80 h-80 bg-[#fdb10c]/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <Link
                to="/#memoria"
                className="inline-flex items-center gap-2 text-sm font-bold text-white bg-white/10 border border-white/25 hover:bg-white/20 px-4 py-2 rounded-full mb-6 transition-colors"
              >
                <ArrowLeft size={16} aria-hidden="true" /> Volver al inicio
              </Link>
              <span className="block mb-4">
                <span className="inline-block bg-[#fdb10c] text-[#2f1435] text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Memoria del 39° Encuentro
                </span>
              </span>
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-white font-black text-3xl sm:text-5xl leading-tight m-0"
              >
                Documento de apertura
              </motion.h1>
              <p className="mt-4 mb-0 text-white/80 text-base sm:text-lg">
                Leído en el acto de apertura del 39° Encuentro Plurinacional · Córdoba, 10 de octubre de 2026
              </p>
            </div>
          </header>

          <div className="max-w-6xl mx-auto px-4 py-10 lg:py-14 lg:grid lg:grid-cols-[260px_1fr] lg:gap-12">
            {/* Índice: desplegable en el celu */}
            <nav aria-label="Índice del documento" className="lg:hidden mb-8">
              <button
                type="button"
                onClick={() => setIndiceAbierto(v => !v)}
                aria-expanded={indiceAbierto}
                aria-controls="indice-mobile"
                className="w-full flex items-center justify-between gap-3 bg-white/70 border-2 border-[#d5bddb] rounded-xl px-4 py-3 font-bold text-[#4a2055]"
              >
                <span className="flex items-center gap-2"><List size={18} aria-hidden="true" /> Índice por temas</span>
                <ChevronDown size={18} aria-hidden="true" className="transition-transform" style={{ transform: indiceAbierto ? 'rotate(180deg)' : 'none' }} />
              </button>
              {indiceAbierto && (
                <div id="indice-mobile" className="mt-2 bg-white/70 border border-[#d5bddb] rounded-xl p-2">
                  <Indice activa={activa} onElegir={() => setIndiceAbierto(false)} />
                </div>
              )}
            </nav>

            {/* Índice: fijo al costado en compu */}
            <aside className="hidden lg:block">
              <nav aria-label="Índice del documento" className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2">
                <p className="m-0 mb-3 px-3 text-xs font-black uppercase tracking-widest text-[#813893]">Índice</p>
                <Indice activa={activa} />
              </nav>
            </aside>

            {/* Texto */}
            <article className="min-w-0">
              {SECCIONES.map((s, i) => (
                <section key={s.id} id={s.id} className="mb-12 scroll-mt-24">
                  <h2 id={`titulo-${s.id}`} className="flex items-baseline gap-3 text-[#4a2055] text-2xl sm:text-3xl font-black mb-5 pb-3 border-b-2 border-[#eadeed]">
                    <span className="text-[#fdb10c] tabular-nums text-xl sm:text-2xl" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                    {s.titulo}
                  </h2>
                  {s.bloques.map((b, j) => <Bloque key={j} b={b} />)}
                </section>
              ))}

              <div className="text-center pt-4">
                <a
                  href="#contenido"
                  onClick={e => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    // Lleva también el foco arriba, para lectores de pantalla y teclado
                    document.getElementById('contenido')?.focus({ preventScroll: true });
                  }}
                  className="inline-flex items-center gap-2 text-[#662c74] font-bold border-2 border-[#d5bddb] px-5 py-2.5 rounded-full hover:bg-[#faf7fb] transition-colors"
                >
                  <ArrowUp size={16} aria-hidden="true" /> Volver arriba
                </a>
              </div>
            </article>
          </div>
        </main>

        <FooterSection />
      </div>
    </MotionConfig>
  );
}