import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import Modulos from './components/Modulos';
import Contacto from './components/Contacto';

// listado para modulos
import { modulosList } from './utils/moduloslist';


function App() {
  // contador modulos carrito
  const [contador, setContador] = useState(0);
  
  // const [carrito, setCarrito] = useState([]);
  // const handleAddToCarrito =(modulosList)=>{
  //   setCarrito([...carrito,modulosList])
  // };


  // menú principal
  const navItems = ["Inicio", "Módulos", "Contacto"];

  // switch contenido principal pages
  const [seccion, setSeccion] = useState("Inicio");

  const renderContenido = () => 
    {
    switch (seccion) {
      case "Inicio":
        return <Home />;
      case "Módulos":
        return <Modulos setContador={setContador} contador={contador} modulosList={modulosList}/>;
      case "Contacto":
        return <Contacto />;
      default:
        return <Home />;
    }
  };


  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Nav items={navItems} onSeleccion={setSeccion} setContador={setContador} contador={contador} modulosList={modulosList}/>
      <main className="flex-grow-1">
        {renderContenido()}
      </main>
      <Footer />

    </div>
  );
}

export default App;
