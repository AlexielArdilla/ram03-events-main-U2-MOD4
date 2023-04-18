import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

/* Importaciones de páginas y componente Navbar */
import { Navbar, RAMPage, Episodes, Location, NotFound, Footer } from "../ram"

/* Importaciones de páginas de autenticación y registro */
import  InputForm   from "../auth/components/InputForm"
import Login  from "../auth/components/Login"

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={ <RAMPage /> } />
        <Route path="/episodios" element={ <Episodes /> } />
        <Route path="/ubicacion" element={ <Location /> } />
        <Route path="/ingresar" element={ <Login /> } />
        <Route path="/registrarse" element={ <InputForm /> } />

        <Route path="/*" element={ <NotFound /> } />
      </Routes>
      <Footer/>
    </Router>
    
  )
}
