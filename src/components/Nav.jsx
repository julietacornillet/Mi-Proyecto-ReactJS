
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import {Nav as MenuNav} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

import Offcanvas from 'react-bootstrap/Offcanvas';

function Nav({items, onSeleccion, contador}) {
  // console.log(modulosList);
  
  // offCanvas navbar
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <Navbar collapseOnSelect expand="lg" bg="light" data-bs-theme="light" className="shadow">
      <Container>
        <Navbar.Brand href="#home" className='fw-bolder'>Proyecto React JS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <MenuNav className="ms-auto">

            {items.map((item) => (
              <MenuNav.Link key={item} onClick={() => onSeleccion(item)}>
                {item}
              </MenuNav.Link>
            ))}

              {/* <NavDropdown title="Clases" id="collapsible-nav-dropdown">
                {clases.map(clase => (
                      <NavDropdown.Item Link to={clase.id} key={clase.id}>
                        💠 Clase 0{clase.id}                            
                      </NavDropdown.Item>    
                  ))}
              </NavDropdown> */}

              <NavDropdown title="Documentación" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="https://aulasvirtuales.bue.edu.ar/login/index.php" target='_blank'>Plataforma virtual</NavDropdown.Item>
                <NavDropdown.Item href="https://www.youtube.com/playlist?list=PLPhAjoBgoPidSKXDsJO27RKDXoYDH2fC0" target='_blank'>Clases grabadas</NavDropdown.Item>
                <NavDropdown.Item href="https://react.dev/" target='_blank'>Documentación React</NavDropdown.Item>
                <NavDropdown.Item href="https://gamma.app/docs/React-JS-Clase-2-96cn3lmtklm5ejz?mode=doc" target='_blank'>Guía de Props</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://github.com/nmfernandez1982/Talento-React-2025-1/tree/main" target='_blank'>Repositorio GIT</NavDropdown.Item>
              </NavDropdown>
          
              <MenuNav.Item>
                {/* carrito botón */}
                <Button variant="light shadow rounded-pill border-primary" className='ms-md-3 ms-0 my-md-0 my-3' size='sm' onClick={handleShow}>
                  <span className='h5'>🛍️</span> <Badge pill bg="primary" className='fw-medium pb-1 mb-1'> {contador} </Badge>
                  <span className="visually-hidden">Carrito Módulos</span>
                </Button>
                {/* carrito detalle */}
                <Offcanvas show={show} onHide={handleClose} placement="end">
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Carrito - Listado</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>

                    <ul>
                      <li> Módulo 1 </li>
                      <li> Módulo 2 </li>
                      <li> Módulo 3 </li>
                    </ul>

                    <Button className='mx-1' size='sm' variant='success'>Finalizar</Button>
                    <Button className='mx-1' size='sm' variant='outline-danger'>Vaciar</Button>
                  </Offcanvas.Body>
                </Offcanvas>

              </MenuNav.Item>
            </MenuNav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;
