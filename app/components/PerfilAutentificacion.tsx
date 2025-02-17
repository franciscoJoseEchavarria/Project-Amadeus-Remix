import React, { useState, useRef } from 'react';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import '../styles/PerfilAutentificacion.css';
import { Link, json, redirect, useNavigate } from 'react-router-dom';
import type { ActionFunction } from "react-router-dom";
import Navegacion from './Navegacion';
import { Form } from "react-router-dom"; // en lugar del de react-bootstrap





const PerfilAutentificacion: React.FC = () => {
// Se crean los estados para los datos del formulario
const [nombre, setNombre] = useState<string>('');
const [correo, setCorreo] = useState<string>('');
const [role, setRole] = useState('usuario'); //asigana role por defecto al iniciar la página
const [contrasena, setContrasena] = useState<string>('');
const [currentIndex, setCurrentIndex] = useState(0); // Indice de la diapositiva actual
const navigate = useNavigate();


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

//Modificador de nombre
const modificarNombre = (e: React.ChangeEvent<HTMLInputElement>) => {
  setNombre(e.target.value);
}
//Modificador de correo
const modificarCorreo = (e: React.ChangeEvent<HTMLInputElement>) => {
  setCorreo(e.target.value);
}

const modificarConstrasena = (e: React.ChangeEvent<HTMLInputElement>) => {
  setContrasena(e.target.value);
}


// envío de documento de datos a travez del formulario -> se conecta con type submit del botón
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault(); // Evita la recarga de la página
  if(role === "usuario"){
    if (!nombre || !correo) {
      alert('Debes ingresar un nombre y correo');
      return;
    }else{
      navigate('/perfil');
      console.log('Nombre:', nombre);
      console.log('Correo:', correo);
      console.log('Role:', role);
    }
  } else if(role === "administrativo"){
    if (!nombre || !correo || !contrasena) {
      alert('Debes ingresar un nombre, correo y contraseña');
      return;
    }else{
      navigate('/perfil');
      console.log('Nombre:', nombre);
      console.log('Correo:', correo);
      console.log('Role:', role);
      console.log('Contraseña:', contrasena);
    }
  }
  
};


  return (
    <>

    <Navegacion />

    <Form onSubmit={handleSubmit} className='container__main'>
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
            {/* Botones de diapositivas (puntos), se pasa por medio del mapper y de un parametro index para que se pueda seleccionar la diapositiva */}
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
          <input name = "nombre" 
          className="container__main__card__data--input" 
          type="text" 
          placeholder="Nombre" 
          value = {nombre} 
          onChange={modificarNombre}/>
          <input 
          name='correo'
          className='container__main__card__data--input'
          type='email' placeholder='Correo' value={correo} onChange={modificarCorreo} />
            {role === 'administrativo' ? (
              <>
                <input name = "contrasena"
                className='container__main__card__data--input'
                type='password' 
                placeholder='Contraseña' 
                value={contrasena} 
                onChange={modificarConstrasena} />
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
          
          <button className="container__main__card__data--button" type="submit">¡Próxima aventura!</button>
          
        </section>
      </div>
    </Form>
    </>
  );
};

export default PerfilAutentificacion;