import { Link } from 'react-router-dom';
import '../styles/Navegacion.css';
import React from 'react';

const Navegacion: React.FC = () => {
    return (
        <header>
        <nav className="nav">
            <img className ="nav__logo" src="../public/assets/amadeus-logo-dark-sky.png" alt="logo" />
            <div className ="nav__container">
                <ul className="nav__lista">
                    <li><a href="../index">Inicio</a></li>
                    <li><a href="https://amadeus.com/es/contacto" target="_blank">Contacto</a></li>
                    <li><a href="../reports" target="_blank">Reporte</a></li>
                    <li><a href="https://amadeus.com/en" target="_blank">Amadeus</a></li>
                </ul>
            </div>
        </nav>
    </header>


    );
};

export default Navegacion;
