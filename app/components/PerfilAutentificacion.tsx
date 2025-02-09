import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../styles/PerfilAutentificacion.css';

const PerfilAutentificacion: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedRole, setSelectedRole] = useState('usuario');

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="container__main__card">
      <section className="container__main__card__data">
        <h1 className="titulo-registrate">REGISTRATE</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="container__main__card__data--input"
            type="text"
            placeholder="Nombre"
            {...register('name', { required: true, minLength: 3 })}
          />
          {errors.name && <small className="error-message">El nombre debe tener al menos 3 caracteres.</small>}
          
          <input
            className="container__main__card__data--input"
            type="email"
            placeholder="Correo electrónico"
            {...register('email', { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })}
          />
          {errors.email && <small className="error-message">Debe incluir una "@" y un dominio válido (ej: usuario@gmail.com).</small>}
          
          <div className="contenedor-botones-1">
            <div className="contenedro-botones-1-1">
              <input
                className="botones-1-1-1"
                type="radio"
                id="usuario"
                value="usuario"
                {...register('role', { required: true })}
                onChange={() => setSelectedRole('usuario')}
              />
              <label className="botones-1-1-label" htmlFor="usuario">Usuario</label>
            </div>
            <div className="contenedro-botones-1-1">
              <input
                className="botones-1-1-1"
                type="radio"
                id="administrativo"
                value="administrativo"
                {...register('role', { required: true })}
                onChange={() => setSelectedRole('administrativo')}
              />
              <label className="botones-1-1-label" htmlFor="administrativo">Administrativo</label>
            </div>
          </div>
          
          {selectedRole === 'administrativo' && (
            <input
              className="container__main__card__data--input"
              type="password"
              placeholder="Contraseña"
              {...register('contrasena', { required: true })}
            />
          )}
          
          <button className="container__main__card__data--button" type="submit">¡Próxima aventura!</button>
        </form>
      </section>
    </div>
  );
};

export default PerfilAutentificacion;