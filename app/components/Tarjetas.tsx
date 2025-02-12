
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Tarjetas.css';
import React from 'react';
import Navegacion from './Navegacion';




const Tarjetas: React.FC = () => {

    const indice = 0; // Indice de la pregunta actual

    // variables de imagenes, preguntas, opciones y datos curiosos

     const preguntaA = ["¿Que tipo de entorno prefieres para tus vacaciones?",
        "¿Qué clima prefieres durante tus vacaciones?",
        "¿Qué tipo de actividades prefieres hacer durante tus vacaciones?",
        "¿Qué tipo de alojamiento prefieres?",
        "¿Cuánto tiemplo planeas quedarte de vacaciones?" ,
        "¿Cuál es tu rango de edad?"
      ];
    
     const opcionesA = [
        ["Playa","Montaña","Ciudad"],
        ["Caluroso","Templado","Frío"],
        ["Deportes y Aventuras","Cultura y Museos","Relax y Bienestar"],
        ["Hotel de Lujo","Hostal o Albergue","Airbnb"],
        ["Menos de una semana","1-2 semanas","Más de dos semanas"],
        ["Menos de 30 años","30-50 años","Más de 50 años"]
      ]
    
      const imgUrl = [
        ["/assets/img/imagen1.jpg","/assets/img/imagen2.jpg","/assets/img/imagen3.jpg"],
        ["/assets/img/Tulum.jpg","/assets/img/Templado.jpg","/assets/img/Frio.jpg"],
        ["/assets/img/Aventura.jpg","/assets/img/cultura.jpg","/assets/img/relax.jpg"],
        ["/assets/img/hotelujo.jpg","/assets/img/hostal.jpg","/assets/img/airbnb.jpg"],
        ["/assets/img/findesemana.jpg","/assets/img/dosemanas.jpg","/assets/img/calendario.jpg"],
        ["/assets/img/veinte.jpg","/assets/img/treinta.jpg","/assets/img/cincuenta.jpg"]
      ]
    
     const dato = [
        ["Las playas no siempre son doradas?. Hay playas con arena negra volcánica, rosa coralina y hasta verde olivo. ¡Cada grano de arena cuenta una historia!",
          "Las montañas tienen su propio clima?. Al subir una montaña, puedes experimentar diferentes climas en pocos kilómetros. ¡Es como viajar por el mundo sin salir de una misma montaña!",
          "Muchas ciudades tienen secretos subterráneos?. Bajo las calles de muchas ciudades se encuentran redes de túneles, ríos subterráneos y hasta antiguas ruinas. París, por ejemplo, tiene más de 200 kilómetros de túneles subterráneos."
        ],
        ["En muchos lugares con clima cálido se celebran festivales y eventos al aire libre, aprovechando las altas temperaturas.",
          "Muchas de las rutas turísticas más famosas del mundo se encuentran en regiones con clima templado, como la Ruta de la Costa Amalfitana en Italia o la Ruta 66 en Estados Unidos.",
          "En lugares con clima frío, el turismo se concentra principalmente en los meses de invierno, cuando la nieve cubre el paisaje y se pueden practicar deportes como el esquí, el snowboard y el patinaje sobre hielo."
        ],
        ["Desde las montañas de Nepal hasta los ríos de Costa Rica, existen numerosos destinos que ofrecen experiencias únicas para los amantes de la adrenalina.",
          "Al visitar los museos, los viajeros pueden imaginar cómo era la vida en la corte real y apreciar la arquitectura y el diseño de una época pasada.",
          "Al visitar un baño termal, los viajeros pueden conectar con las tradiciones de culturas antiguas y experimentar una forma de relajación que ha sido practicada durante siglos."
        ],
        ["Algunos de los hoteles más lujosos del mundo ofrecen experiencias tan exclusivas que incluyen la posibilidad de tener un mayordomo que se encargue de todos tus caprichos, desde preparar un baño relajante hasta hacer reservas en el restaurante más exclusivo",
          "Muchos de los hostales y albergues más populares del mundo se encuentran ubicados en edificios históricos o con una arquitectura única",
          "Airbnb o apartamento:Airbnb nació de una necesidad de alojamiento económico durante un evento en San Francisco."
        ],
        ["Estudios han demostrado que incluso viajes cortos pueden tener un impacto significativo en la reducción del estrés y la mejora del estado de ánimo.",
          "Estudios han demostrado que este rango de tiempo permite sumergirte en la cultura local, conocer a fondo un lugar y crear recuerdos duraderos sin sentirte apresurado o abrumado.",
          "Viajes prolongados te permiten desconectar completamente de tu rutina diaria y volver a casa sintiéndote renovado y con una nueva perspectiva de la vida."
        ],
        ["Viajar en la veintena te ayuda a desarrollar habilidades como la independencia, la adaptabilidad y la tolerancia a la incertidumbre, lo cual es fundamental para tu crecimiento personal.",
          "A menudo, se busca ir más allá de los destinos turísticos más populares y descubrir lugares menos conocidos, con una mayor conexión con la cultura local.",
          "Muchos viajeros mayores se unen a grupos organizados para conocer a personas con intereses similares y compartir experiencias."
        ]
      ]

       
      // Constantes para almacenar la pregunta, opciones, imágenes y datos curiosos
      const  pregunta = preguntaA[indice];
      const  opcion1 = opcionesA[indice][0];
      const  opcion2 = opcionesA[indice][1];
      const  opcion3 = opcionesA[indice][2];
      const  img1 = imgUrl[indice][0];
      const  img2 =imgUrl[indice][1];
      const  img3 = imgUrl[indice][2];
      const  dato1 = dato[indice][0];
      const  dato2 = dato[indice][1];
      const  dato3 = dato[indice][2];  

const atras = () => {
}

const siguiente = () => {   
}

const regresarPerfil= () => {


}

const disAtras = false;
const disSig = false; // Add this line to define disSig
const hidSig = false; // Add this line to define hidSig


    const verificarSeleccion = (valor: string) => {
    }

  return (
    <>
      <Navegacion />
       <main className="container__general">
            <div className="titulo">
                <h1 className="scale-in-ver-center">{}</h1>
            </div>
            <div className="container">
                {/* Tarjeta 1 */}
                <label htmlFor="opc1">
                    <div className="card">
                        <div className="face front">
                        <img  alt="imagen_playa" />
                        <h3>{pregunta}</h3>
                        </div>
                        <div className="face back">
                        <h3>¿Sabías qué...</h3>
                        <p>{}</p>
                        </div>
                    </div>
                </label>
                {/* Tarjeta 2 */}
                <label htmlFor="opc2">
                <div className="card">
                    <div className="face front">
                    <img  alt="imagen_montaña" />
                    <h3>{}</h3>
                    </div>
                    <div className="face back">
                    <h3>¿Sabías qué...</h3>
                    <p>{}</p>
                    </div>
                </div>
                </label>
                {/* Tarjeta 3 */}
                <label htmlFor="opc3">
                <div className="card">
                    <div className="face front">
                    <img  alt="imagen_ciudad" />
                    <h3>{}</h3>
                    </div>
                    <div className="face back">
                    <h3>¿Sabías qué...</h3>
                    <p>{}</p>
                    </div>
                </div>
                </label>
            </div>
            
            {/* Grupo de radio buttons */}
            <form className="radio">
                <div>
                <label>
                    <input
                    id="opc1"
                    type="radio"
                    
                    name="opciones"
                    
                    onChange={(e) => verificarSeleccion(e.target.value)}
                    />
                </label>
                </div>
                <div>
                <label>
                    <input
                    id="opc2"
                    type="radio"
                    
                    name="opciones"
                    
                    onChange={(e) => verificarSeleccion(e.target.value)}
                    />
                </label>
                </div>
                <div>
                <label>
                    <input
                    id="opc3"
                    type="radio"
                    value= "aqui debe ir algo"
                    name="opciones"
                    checked= {false}
                    onChange={(e) => verificarSeleccion(e.target.value)}
                    />
                </label>
                </div>
            </form>

            {/* Navegación */}
            <div className="navegacion">
                <ul>
                <li className="perfil" onClick={regresarPerfil}>
                    Perfil
                </li>
                </ul>
            </div>

            {/* Botones de navegación */}
            <div className="botones">
                <button type="button" onClick={atras} disabled={disAtras}>
                Atrás
                </button>
                <button type="button" onClick={siguiente} disabled={disSig} hidden={hidSig}>
                Siguiente
                </button>
                {/* Si calcular es false, se muestra el botón de Calcular Destino */}
                {  (
                <Link to="/resultados">
                    <button type="button">Calcular Destino</button>
                </Link>
                )}
            </div>
        </main>
    </>
  );
}

export default Tarjetas;

