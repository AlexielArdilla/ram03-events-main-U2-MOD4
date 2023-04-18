import { NavLink, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <div >
        <Link id="logo" to="/">Logo</Link>
        <div>
          <div >
            <NavLink className="componentes" to="/">
              Personajes
            </NavLink>
            <NavLink className="componentes" to="episodios">
              Episodios
            </NavLink>
            <NavLink className="componentes" to="ubicacion">
              Ubicación
            </NavLink>
          </div>
        </div>
      </div>
      <div>
        <Link className="auth" to="ingresar">Iniciar sesión</Link>
        <Link className="auth" to="registrarse">Registrarse</Link>
      </div>
    </nav>
  )
}
