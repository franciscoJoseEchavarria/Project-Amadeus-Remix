import React, { useState, useRef } from 'react';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import '../styles/PerfilAutentificacion.css';
import Navegacion from './Navegacion';
import { Form } from 'react-bootstrap';

const PerfilAutentificacion: React.FC = () => {
const slidesElements = useRef<HTMLDivElement>(null);
const dotElement = useRef<HTMLSpanElement>(null);
const [nombre, setNombre] = useState<string>('');
const [correo, setCorreo] = useState<string>('');
const [role, setRole] = useState('usuario');
const [contrasena, setContrasena] = useState<string>('');




// Función para manejar el cambio en el radio button
const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setRole(event.target.value);
  btnCambioUA(event.target.value);
};

// Función para manejar la lógica adicional cuando cambia el radio button
const btnCambioUA = (role: string) => {
  console.log(`Role seleccionado: ${role}`);
  // Aquí puedes agregar la lógica adicional para manejar el cambio de role
};

// boton para pasar diapositiva
const plusSlides = (n: number) => {
  console.log(`Slide change: ${n}`);
  // Aquí puedes agregar la lógica para cambiar las diapositivas
};

const currentSlide = (n: number) => {
  console.log(`Slide change: ${n}`);
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
          { role === 'usuario' ? (
            <>
              <div ref= {slidesElements} className="container__main__card__avatar--img fade">
                <img src="/assets/img/avatares/ava11.png" width="100%" />
              </div>
              <div ref= {slidesElements}
                  className="container__main__card__avatar--img fade">
                <img src="/assets/img/avatares/ava12.png" width="100%" />
              </div>
              
              <div ref= {slidesElements} className="container__main__card__avatar--img fade">
                <img src="/assets/img/avatares/ava13.png" width="100%" />
              </div>
              <div ref= {slidesElements} className="container__main__card__avatar--img fade">
                <img src="/assets/img/avatares/ava14.png" width="100%" />
              </div>
              </>
            ) : role === 'administrativo' ? (
                <>
              <div ref= {slidesElements} className="container__main__card__avatar--img fade">
                <img src="/assets/img/avatares/ava21.png" width="100%" />
              </div>

              <div ref= {slidesElements} className="container__main__card__avatar--img fade">
                <img src="/assets/img/avatares/ava22.png" width="100%" />
              </div>
              <div ref= {slidesElements}
                  className="container__main__card__avatar--img fade">
                <img src="/assets/img/avatares/ava23.png" width="100%" />
              </div>
              
              <div ref= {slidesElements} className="container__main__card__avatar--img fade">
                <img src="/assets/img/avatares/ava24.png" width="100%" />
              </div>
              </>
          ): null}
        </section>
        <section className="container__main__card__select">
          <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
          <div className="container__main__card__dot">
            <span ref={dotElement} className="dot" onClick={()=> currentSlide(1)}></span>
            <span ref={dotElement} className="dot" onClick={()=> currentSlide(2)}></span>
            <span ref={dotElement} className="dot" onClick={()=> currentSlide(3)}></span>
            <span ref={dotElement} className="dot" onClick={()=> currentSlide(4)}></span>
          </div> 
          <a className="next" onClick={() => plusSlides(-1)}>&#10095;</a>
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