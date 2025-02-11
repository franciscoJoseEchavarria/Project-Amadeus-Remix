import React, { useState, useRef } from 'react';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import '../styles/PerfilAutentificacion.css';
import Navegacion from './Navegacion';
import { Form } from 'react-bootstrap';

const PerfilAutentificacion: React.FC = () => {


const slidesElements = useRef<HTMLDivElement[]>([]);
const dotElement = useRef<HTMLSpanElement []>([]);
const [nombre, setNombre] = useState<string>('');
const [correo, setCorreo] = useState<string>('');
const [role, setRole] = useState('usuario'); //asigana role por defecto al iniciar la página
const [contrasena, setContrasena] = useState<string>('');
const [currentIndex, setCurrentIndex] = useState(0); // Indice de la diapositiva actual


//imagenes de usuario
const slidesUsuario = [
  "/assets/img/avatares/ava11.png",
  "/assets/img/avatares/ava12.png",
  "/assets/img/avatares/ava13.png",
  "/assets/img/avatares/ava14.png",
]

//imagenes de administrativo
const slidesAdministrativo = [
  "/assets/img/avatares/ava21.png",
  "/assets/img/avatares/ava22.png",
  "/assets/img/avatares/ava23.png",
  "/assets/img/avatares/ava24.png",
]

// Selecciona el array de slides según el role:
const slides = role === 'usuario' ? slidesUsuario : slidesAdministrativo;


// Función para manejar el cambio en el radio button y seleccion role
const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setRole(event.target.value);
};


// boton para pasar diapositiva 
const plusSlides = (n:number) =>{
  // Metodo para aumentar o disminuir el índice de la diapositiva actual
  setCurrentIndex((prevIndex) => {
    let newIndex = prevIndex + n ;
    if (newIndex < 0) newIndex = slides.length - 1;
    if (newIndex >= slides.length) newIndex = 0;
    return newIndex;
  });

};

// boton para seleccionar diapositiva de acuerdo a cada boton
const currentSlide = (n: number) => {
  setCurrentIndex(n); // se coloca -1 porque es un array.
  // Aquí puedes agregar la lógica para cambiar las diapositivas
};

const modificarNombre = (e: React.ChangeEvent<HTMLInputElement>) => {


}

const modificarCorreo = (e: React.ChangeEvent<HTMLInputElement>) => {



}

const modificarConstrasena = (e: React.ChangeEvent<HTMLInputElement>) => {


}


const pushNombre = (e: React.KeyboardEvent<HTMLInputElement>) => {


}

const pushCorreo = (e: React.KeyboardEvent<HTMLInputElement>) => {


}

const pushContrasena = (e: React.KeyboardEvent<HTMLInputElement>) => {


}






  return (
    <>

    <Navegacion />

    <Form className='container__main'>
      <div className="container__main__card">
        <section className="container__main__card__avatar">
          {/* una vez teniendo el index en el anterior maper de slide.map, se renderizan las imagenes de acuerdo a cada array */}
          { slides.map((src, index) => (
            <div
            key={index}
            className="container__main__card__avatar--img fade"
            style={{ display: index === currentIndex ? 'block' : 'none' }} // Oculta los demás divs
          >
            <img src={src} alt={`Slide ${index}`} width="100%" /> {/*imagen que se renderiza despus de tomar el index */}
            </div>
          ))}
        </section>
        <section className="container__main__card__select">
          <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
            <div className="container__main__card__dot">
            {/* Botones de diapositivas (puntos), se pasa por medio de un mapper y de un parametro index para que se pueda seleccionar la diapositiva */}
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => currentSlide(index)}
                ></span>
            ))}
          </div>
          <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
        </section>
        <section className="container__main__card__data">
          <h1 className='titulo-registrate'>Registrate</h1>     
          <input className="container__main__card__data--input" type="text" placeholder="Nombre" value = {nombre} onChange={modificarNombre} onKeyUp={pushNombre}/>
          <input className='container__main__card__data--input'
          type='email' placeholder='Correo' value={correo} onChange={modificarCorreo} onKeyUp={pushCorreo}/>
            {role === 'administrativo' ? (
              <>
                <input className='container__main__card__data--input'
                type='password' placeholder='Contraseña' value={contrasena} onChange={modificarConstrasena} onKeyUp={pushContrasena}/>
              </>
            ):null} 

          <div className="contenedor-botones-1">
            <div className="contenedro-botones-1-1">
              <input
                className="botones-1-1-1"
                type="radio"
                id="usuario"
                name="role"
                value="usuario"
                checked={role === 'usuario'}
                onChange={handleRoleChange}
              />
            
              <label className="botones-1-1-label" htmlFor="usuario">
                usuario
              </label>
            </div>
            <div className="contenedro-botones-1-1" >    
              <input
                className="botones-1-1-1"
                type="radio"
                id="administrativo"
                name="role"
                value="administrativo"
                checked={role === 'administrativo'}
                onChange={handleRoleChange}
              />
              <label className="botones-1-1-label" htmlFor="administrativo">
                administrativo
              </label>
            </div>
          </div>
          <div className="container__main__card__data--personalData">
              <input 
              type="checkbox" 
              name="data-accepted" 
              id="data-accepted"/>
              <label 
                className="container__main__card__data--checkbox" 
                htmlFor="data-accepted"> 
                Acepto los 
                <a href="https://amadeus.com/es/politicas/privacy-policy" 
                target="_blank">términos y condiciones
                </a> de la política de protección de datos.
              </label>
          </div>
        </section>
      </div>
    </Form>
    </>
  );
};

export default PerfilAutentificacion;