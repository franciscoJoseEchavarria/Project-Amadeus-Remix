import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../styles/Inicio.css';

const Inicio: React.FC = () => {
    const [buttonText, setButtonText] = useState('¡Dale click aquí o a la imagen!');

    const onMouseOver = () => {
        setButtonText('¡Vamos a viajar!');
    };

    const onMouseOut = () => {
        setButtonText('¡Dale click aquí o a la imagen!');
    };
    return (
        <section className="padre">
          <div className="container">     
            <Link to="/perfil" className="play">
              <img src="/public/assets/tiera.png" alt="play" />
            </Link>
            <div className="nosotros">
              <h1>INFORMACION</h1>
              <p>
                ¿Estás cansado de pasar horas buscando el destino perfecto para tu próximo viaje?<br /><br />
                ¿Te gustaría crear un viaje de acuerdo a tus preferencias y sin complicaciones?
              </p>
              <h2>
                <Link
                  to="/PerfilAutentificacion"
                  onMouseOver={onMouseOver}
                  onMouseOut={onMouseOut}
                  className='button'
                >
                  {buttonText}
                </Link>
              </h2>
            </div>
          </div>
        </section>
      );
    };
    

export default Inicio;