
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Tarjetas.css';
import React from 'react';
import Navegacion from './Navegacion';




const Tarjetas: React.FC = () => {

    

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
              <h3>{}</h3>
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

