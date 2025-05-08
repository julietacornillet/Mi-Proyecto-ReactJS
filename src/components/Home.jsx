import React from 'react';
import { Container, Stack } from 'react-bootstrap';
import Valoracion from './Valoracion';

function Home() {
  return (
    <div className='d-flex align-items-start flex-column'>
    <Container className='my-5 pb-md-5'>
      <h1 className='mb-4'>¡Bienvenido a mi blog React JS!</h1>
      <p className='h4 fw-light'>Este proyecto fue desarrollado como parte del curso de React JS en Talento Tech. Es una manera interactiva de repasar todo lo aprendido: cada módulo del curso está presentado como si fuera un producto en una tienda, ¡y podés agregar al carrito los que más te interesaron!</p>
      <p className='h4 fw-light'>Explorá los conceptos, repasá contenidos clave y armá tu propio resumen personalizado de temas.</p>
      <p className='h4 fw-light'>Hecho con React JS, y pensado para practicar componentes, estados, props, rutas, hooks y más.</p>
      <p className='h4 fw-light'>¡Gracias por pasar y explorar mi trabajo!</p>
    </Container>

    <Valoracion/>
</div>
  );
}

export default Home;
