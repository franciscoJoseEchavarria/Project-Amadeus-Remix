import { Link } from 'react-router-dom';
import '../styles/Navegacion.css';
import React from 'react';
import 'app/styles.css';

const Navegacion: React.FC = () => {
    return (
        <header>
        <nav className="nav">
            <img className ="nav__logo" src="../public/assets/amadeus-logo-dark-sky.png" alt="logo" />
            <div className ="nav__container">
                <ul className="nav__lista">
                    <li><Link to= "/">Inicio</Link></li>
                    <li><Link  to="https://amadeus.com/es/contacto" target="_blank" className= "nav__link">Contacto</Link></li>
                    <li><Link to= "" className= "nav__link">Reporte</Link></li>
                    <li><a href="https://amadeus.com/en" target="_blank">Amadeus</a></li>
                </ul>
            </div>
        </nav>
    </header>


    );
};

export default Navegacion;
