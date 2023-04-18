import React, { useState } from 'react'
import "./styles-components.css"

export const InputForm = () => {
  const [formValue, setFormValue] = useState({
    username: '',
    email: '',
    password: ''
  })

  const { username, email, password } = formValue;

  const onFormSumit = (e) => {
    e.preventDefault()
    console.log(formValue);
  }

  const onIputChange = ({ target }) => {
    const { name, value } = target;
    setFormValue({
      ...formValue,
      [ name ] : value
    })
  }

  return (
    <div className='contenedor'>
      <h1>Formulario de registro</h1>
      <hr />
      <form onSubmit={ onFormSumit }>
        <div>
          <label>Nombre</label><br />
          <input
            type="text"
            placeholder="Escriba su nombre"
            name="username"
            value={ username }
            onChange={ onIputChange }
            required
          />
        </div>
        <div>
          <label>Correo electrónico</label><br />
          <input
            type="email"
            placeholder="Escriba su correo email"
            name="email"
            value={ email }
            onChange={ onIputChange }
            required
          />
        </div>
        <div>
          <label>Contraseña</label><br />
          <input
            type="password"
            placeholder="Escriba su contraseña"
            name="password"
            value={ password }
            onChange={ onIputChange }
            required
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  )
}

export default InputForm