import React from 'react';
import { Container } from 'react-bootstrap';
import Valoracion from '../components/Valoracion';

function Home() {
  return (
    <div className='d-flex align-items-start flex-column'>
    <Container className='my-5 pb-md-5'>
      <h1 className='mb-4 text-primary-emphasis'>¡Bienvenido a mi E-commerce con React JS!</h1>
      <p className='h4 fw-light'>Este proyecto fue desarrollado como parte del curso de React JS en Talento Tech. Está pensada para practicar y consolidar conocimientos de desarrollo frontend con React.</p>
      <p className='h4 fw-light'>Cada producto representa un módulo del curso, y podés agregarlos al carrito como si armaras tu propia colección de recursos de aprendizaje. Además, cuenta con una sección de libros sobre desarrollo, conectada a la API pública de Google Books.</p>
      <p className='h4 fw-light'>Explorá los temas del curso, consultá descripciones, revisá libros técnicos, filtrá por categorías y descubrí cómo funcionan los componentes, estados, props, rutas, hooks y otras herramientas esenciales de React.</p>
      <p className='h4 fw-light'>Hecho con React JS, pensado para aprender haciendo.
¡Gracias por visitar mi tienda y explorar mi trabajo!</p>

    </Container>

    <Valoracion/>
</div>
  );
}

export default Home;
