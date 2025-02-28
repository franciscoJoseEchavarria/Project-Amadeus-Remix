import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../styles/Inicio.css';
import { motion } from 'framer-motion';

const Inicio: React.FC = () => {
    const [buttonText, setButtonText] = useState('¡Vamos a viajar!');

    const onMouseOver = () => {
        setButtonText('¡Listo, vamos!');
    };

    const onMouseOut = () => {
        setButtonText('¡Vamos a viajar!');
    };
    return (
        <section className="padre">
          <div className="container">     
            <Link to="/perfil" className="play">
            <motion.img
            src="/public/assets/tiera.png"
            alt="play"
            initial={{ x: '100vw', opacity: 0 , y:0}}  // Fuera de pantalla a la derecha
            animate={{ x: 0, opacity: 1 }}         // Se mueve a su posición final
            transition={{ duration: 2, ease: 'easeOut' }}
          />
            </Link>
            <div className="nosotros">
              <motion.h1
              initial={{ x: '-100vw', opacity: 0 }}  // Fuera de pantalla a la izquierda
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}>INFORMACION</motion.h1>
              <motion.p
              initial={{ x: '-100vw', opacity: 0 }}  // Fuera de pantalla a la izquierda
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}>
                ¿Estás cansado de pasar horas buscando el destino perfecto para tu próximo viaje?<br /><br />
                ¿Te gustaría crear un viaje de acuerdo a tus preferencias y sin complicaciones?
              </motion.p>
              <motion.h2
              initial={{ x: '-100vw', opacity: 0 }}  // Fuera de pantalla a la izquierda
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, ease: 'easeOut', delay: 0.5 }}>
                <Link
                  to="/PerfilAutentificacion"
                  onMouseOver={onMouseOver}
                  onMouseOut={onMouseOut}
                  className='button'
                >
                  {buttonText}
                </Link>
                <Link
                  to="/PerfilAutentificacion"
                  onMouseOver={onMouseOver}
                  onMouseOut={onMouseOut}
                  className='button'
                >
                  {buttonText}
                </Link>
              </motion.h2>
            </div>
          </div>
        </section>
      );
    };
    

export default Inicio;