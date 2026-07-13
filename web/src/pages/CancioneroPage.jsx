import React from 'react';
import { CountdownBanner, Navbar, FooterSection } from '@/pages/HomePage.jsx';
import TitleSection from '@/components/TitleSection.jsx';

const CANCIONES = [
  {
    titulo: "Alerta que camina",
    letra: "Alerta, alerta, alerta que camina la lucha feminista por América latina\nSe cuidan se cuidan se cuidan los machistas, América latina va a ser toda feminista"
  },
  {
    titulo: "Poder popular",
    letra: "Poder, poder, poder popular\n¿Luchar con las compañeras le gusta a usted, le gusta a usted?\nY ahora que estamos juntas, Y ahora que si nos ven\nAbajo el patriarcado que va a caer, que va a caer\nArriba el feminismo vamos a vencer, vamos a vencer."
  },
  {
    titulo: "Yo sabía",
    letra: "Yo sabia, yo sabia, que a los violadores\nLos cuida la policía, yo sabía\nYO SABÍA……… QUE A LOS FEMICIDAS LOS CUIDA LA POLICIA"
  },
  {
    titulo: "Si el papa fuera mujer",
    letra: "Si el papa fuera mujer el aborto sería ley (x2)\nBasta de patriarcado y que nos digan lo que hay que hacer\naborto libre y seguro para que decida la mujer"
  },
  {
    titulo: "Hay un machista suelto",
    letra: "Hay un machista suelto en la Rosada\nQue quiere a las mujeres todas calladas\nNo queremos mas femicidio, trata ni explotación\nQueremos en la farmacia Misoprostol\nPeluca botón, Peluca botón\nLegaliza el aborto"
  },
  {
    titulo: "Revolución y feminismo",
    letra: "Poder poder, poder popular\nRevolución y feminismo le guste a usted le guste a usted\nAhora que estamos juntas\nAhora que si nos ven\nAbajo el patriarcado que va a caer que va a caer\nAbajo el patriarcado se va a caer se va a caer\nArriba el feminismo que va a vencer que va a vencer"
  },
  {
    titulo: "América Latina feminista",
    letra: "¡Aleeeeerta, Aleeeeerta!\nAlerta, Alerta, Alerta que camina\nMujeres feministas por América Latina\nY tiemblan, y tiemblan, y tiemblan los machistas\nAmérica Latina va a ser toda feminista"
  },
  {
    titulo: "Y dale alegría a mi corazón",
    letra: "¡Y dale alegría, alegría a mi corazón!\nLa sangre que derramaron se estremeció\nY vas a ver… Las pibas que vos mataste van a volver!\nY como no? Es la lucha feminista estamos hoy!\n\n“Y dale alegría alegría a mi corazón la sangre de las caídas en rebelión (x2)\nya vas a ver las pibas que vos mataste van a volver y si señor, vamos a llenar de machos el paredón”\n\n“Y dale a tu cuerpo misoprostol llegaron las feministas en rebelión\nya vas a ver llegaron de todas partes con lucifer y si señor hay fetos que no nacieron superenlo”"
  },
  {
    titulo: "Arroz con leche",
    letra: "Arroz con leche yo quiero abortar\nen condiciones dignas en cualquier lugar\ncon misoprostol, con intervención\nde la forma que quiera es mi decisión"
  },
  {
    titulo: "A la iglesia católica",
    letra: "A la iglesia, católica, apostólica romana\nque se quiere meter en nuestras camas,\nle decimos, que se nos da la gana\nde ser putas, travestis y lesbianas!\nAborto legal, en cualquier lugar\naborto legal, en cualquier lugar"
  },
  {
    titulo: "Señor! Señora!",
    letra: "Señor! Señora! No sea indiferente!\nSe mata a las travestis en la cara de la gente!"
  },
  {
    titulo: "Lo dijo Lohana y Sacayan",
    letra: "Ole ole ole ola\nLo dijo Lohana y Sacayan\nAl calabozo no volvemos nunca más!"
  },
  {
    titulo: "Opus dei",
    letra: "Opus dei que facho que sos.\nApoya dictadura y pide mano dura en nombre de Dios.\nCristo Rey, no nos jodas más\nAnda con tu familia que te lean la Biblia\nDeja coger en paz\nDéjate de joder vos sos antiabortista\nSos la derecha más fascista\nLas mujeres queremos decidir y la Iglesia se tiene que ir"
  },
  {
    titulo: "Vienen las pibas marchando",
    letra: "Mira lo que se avecina a la vuelta de la esquina\nVienen las pibas marchando\nSomos todas tortilleras, feministas, aborteras no nos juntamos con machos\nNo me importa tu belleza, no queremos ser princesas.\nTe quemamos los corpiños y las tangas\nEn las calles y en las camas destruir al patriarcado por nosotres es la acción más deseada!\nCon las negras y las tortas y las travas\nRetrocedé, chabón, cedé\nseas progre, futbolero, militante roquero.\nLarga los privilegios con los que naces (×2)\nRetrocedé, chabón, cedé\nDejale la bandera a tu compañera\nNo pongas esa cara que no entendés!"
  },
  {
    titulo: "Alegría tortillera",
    letra: "Dalea tu cuerpo alegría tortillera\nque tu cuerpo es pa darle alegría y cosa buena\ndale a tu cuerpo alegría tortillera eeeh con tijera aaaja"
  },
  {
    titulo: "Tengo todo lo que quieren las wachas",
    letra: "Tengo todo lo que quieren las wachas\naborto lucha y cumbia en las marchas\ntengo todo lo que a vos te incomoda\nsos feminista aunque te joda\nWhere are the feminists?\nY piden, abortototo abortoto aborto to to to to to\nmisoprostol, misoprostol misoprostol tol tol tol tol"
  },
  {
    titulo: "Me quiero así soltera",
    letra: "Me quiero así soltera hasta la tumba\nando de noche tu machismo no me asusta\nme quiero libre estoy podrida de tu acoso\nmuerte a la yuta y a los forros antiaborto"
  },
  {
    titulo: "Con los huesos de Caputo",
    letra: "Con los huesos de Caputo (x2)\nVamo a hacer una trinchera (x2)\nPara que a la deuda externa,\nla pague la casta entera\nEa ea ea ea ea ea ea eh (x2)"
  },
  {
    titulo: "A la huelga compañeres",
    letra: "A la huelga compañeres, no vamo a retroceder.\nLos derechos conquistados salimos a defender (X2)\nA las calles si, vamos a luchar\nMilei y los fachos no pasarán\nEste grito fuerte se escuchará\nNo damos ni un paso atrás"
  },
  {
    titulo: "Milei no es gato",
    letra: "Milei no es gato, no es animal\nEs un facista, machirulo y criminal\nOlé olé, olé olá (x2)"
  },
  {
    titulo: "Huelga feminista",
    letra: "Alerta, alerta, alerta al que camina\nUn paro desde abajo, una huelga feminista\nSe cuidan, se cuidan, se cuidan los machistas\nAbajo el decretazo con la huelga feminista"
  },
  {
    titulo: "Sin ajuste patriarcal",
    letra: "Alerta alerta que no se aguanta más\nQueremos una vida sin ajuste patriarcal"
  },
  {
    titulo: "Ahora que estamos juntes",
    letra: "Ahora que estamos juntes (x2)\nAhora que si nos ven (x2)\nAbajo el protocolo se va a caer se va a caer\nArriba el plan de lucha que va a vencer, que va a vencer"
  },
  {
    titulo: "Paro general",
    letra: "Paro desde abajo, paro general\nAbajo el decretazo, plan de lucha nacional"
  },
  {
    titulo: "Plan de lucha nacional",
    letra: "Caputo hace negocios, fugando guita a todos lados\nMilei recorta derechos, te deja pobre y endeudado\nEl protocolo de Bullrich con represión nos quiere frenar\nPero las calles son nuestras\nOrganizades, ni un paso atrás\nVamo al paro general\nVamo a luchar, vamo a luchar\nPlan de lucha nacional\nVamo a parar, vamo a parar"
  },
  {
    titulo: "Ajustan a la gente",
    letra: "Vecina, vecino no sea indiferente\nNo ajustan a la casta\nBut adjust to people"
  },
  {
    titulo: "Quitan los derechos",
    letra: "Vecina, vecino no sea indiferente\nNos quitan los derechos en la cara de la gente"
  },
  {
    titulo: "Ni une menos",
    letra: "Ni une menos, sin deuda nos queremos\nNi une menos, vives nos queremos\nNi une menos, libres nos queremos"
  },
  {
    titulo: "Que rabia",
    letra: "Que rabia, que rabia, que rabia que nos da\nLa madre de este facho que no pudo abortar"
  },
  {
    titulo: "Vida digna",
    letra: "Luche, luche, luche no deje de luchar\nPor una vida digna, feminista y popular"
  },
  {
    titulo: "Vida libre",
    letra: "Luche, luche, luche no deje de luchar\nPor una vida libre sin violencia patriarcal"
  }
];

export default function CancioneroPage() {
  return (
    <div className="relative bg-background text-slate-100 min-h-screen">
      <CountdownBanner />
      <Navbar />

      <TitleSection title="Cancionero Sugerido" />

      <main className="relative z-10 mx-auto max-w-4xl px-4 pb-32 pt-32 sm:px-6 lg:px-8">
        <section className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 md:p-8 shadow-xl shadow-black/20">
          <p className="text-slate-300 mb-8 text-center text-lg">
            Letras y canciones sugeridas para cantar en este 39° Encuentro en Córdoba.
          </p>

          <div className="space-y-8">
            {CANCIONES && CANCIONES.map((cancion, index) => (
              <div
                key={cancion.titulo || index}
                className="border-b border-white/5 pb-6 last:border-none last:pb-0"
              >
                <h3 className="text-xl font-bold text-fuchsia-400 mb-3 flex gap-2">
                  <span className="text-fuchsia-300 font-extrabold drop-shadow-sm">
                    {index + 1}.
                  </span>
                  {cancion.titulo}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line bg-slate-900/40 p-4 rounded-xl border border-slate-800/60 font-mono">
                  {cancion.letra}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}