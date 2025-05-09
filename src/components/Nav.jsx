
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import {Alert, Nav as MenuNav, Navbar, NavDropdown, Button} from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/modal';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import ButtonContador from './ButtonContador';

import { Link } from 'react-router-dom';




function Nav({contador, setContador}) {
  // console.log(modulosList);
  
  // offCanvas navbar
  const [offcanvasShow, mostrarOffCanvas] = useState(false);

  // modal finalizar carrito
  const [modalShow, mostrarModal] = useState(false); 

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" data-bs-theme="light" className="shadow">
      <Container>
        <Navbar.Brand as={Link} to="/" className='fw-bolder'>Proyecto React JS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <MenuNav className="ms-auto">
            
            <MenuNav.Link as={Link} to='/'>Inicio</MenuNav.Link>
            <MenuNav.Link as={Link} to='/modulos'>Módulos</MenuNav.Link>

              <NavDropdown title="Documentación" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="https://aulasvirtuales.bue.edu.ar/login/index.php" target='_blank'>Plataforma virtual</NavDropdown.Item>
                  <NavDropdown.Item href="https://www.youtube.com/playlist?list=PLPhAjoBgoPidSKXDsJO27RKDXoYDH2fC0" target='_blank'>Clases grabadas</NavDropdown.Item>
                  <NavDropdown.Item href="https://react.dev/" target='_blank'>Documentación React</NavDropdown.Item>
                  <NavDropdown.Item href="https://gamma.app/docs/React-JS-Clase-2-96cn3lmtklm5ejz?mode=doc" target='_blank'>Guía de Props</NavDropdown.Item>
                  <NavDropdown.Item href="https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises" target='_blank'>Guía introductoria a las promesas de JavaScript</NavDropdown.Item>
                  <NavDropdown.Item href="https://www.freecodecamp.org/espanol/news/tutorial-de-react-router-version-6-como-navegar-a-otros-componentes-y-configurar-un-enrutador/" target='_blank'>React Router - Guía para principiantes</NavDropdown.Item>
                  <NavDropdown.Item href="https://mockapi.io/" target='_blank'>MockAPI: Plataforma de simulación de datos</NavDropdown.Item>                    
                <NavDropdown.Divider />
                  <NavDropdown.Item href="https://github.com/nmfernandez1982/Talento-React-2025-1/tree/main" target='_blank'>Repositorio GIT</NavDropdown.Item>
              </NavDropdown>
          
              <MenuNav.Link as={Link} to='/contacto'>Contacto</MenuNav.Link>
              
              <MenuNav.Item>
                {/* carrito botón */}
                <Button variant="light shadow rounded-pill border-success" className='ms-md-2 ms-0 my-md-0 my-3' onClick={() => mostrarOffCanvas(true)}>
                <FontAwesomeIcon icon={faCartShopping} className='mt-1 me-1 text-success-emphasis'/> <Badge pill bg="success" className='fw-medium pb-1' title={`Hay ${contador} modulos seleccionados`}> {contador} </Badge>
                  <span className="visually-hidden">Carrito Módulos</span>
                </Button>
                {/* carrito detalle */}
                <Offcanvas show={offcanvasShow} onHide={() => mostrarOffCanvas(false)} placement="end" className="px-3">
                  <Offcanvas.Header className='pb-0' closeButton>
                    <Offcanvas.Title>
                      <h4 className='text-success fw-bold mt-3'>Carrito</h4>
                    <h5>Listado de módulos</h5>
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <ul>
                      <li> Módulo 1  <ButtonContador setContador={setContador} contador={contador}/> </li>
                      <li> Módulo 2  <ButtonContador setContador={setContador} contador={contador}/></li>
                      <li> Módulo 3  <ButtonContador setContador={setContador} contador={contador}/></li>
                    </ul>
                    <Alert variant='secondary p-2 mt-5' className="d-flex justify-content-between align-items-baseline">
                      <div className='fw-bold'> Total = <Badge pill bg="success" className='fw-medium pb-1 mb-1 roun'> {contador} </Badge></div>
                      <div>
                        <Button onClick={() => mostrarModal(true)} className='mx-1' size='sm' variant='success end'>Finalizar</Button>
                        <Button onClick={() => setContador(contador=0)} size="sm" variant="danger" title="Vaciar" aria-label="Vaciar al carrito"><span className="fw-normal"> Vaciar </span></Button>
                      </div>
                    </Alert>

                    {/* modal para finalizar carrito */}
                    <Modal show={modalShow} onHide={() => mostrarModal(false)} animation={false}>
                      <Modal.Header className='border-0 pb-0' closeButton>
                      </Modal.Header>
                      <Modal.Body className='px-5 pt-0'>
                        <h2 className='text-primary'>
                          ¡Suerte en tu curso de React JS !
                          </h2>
                        Te enviamos a tu casilla de correo toda la información necesaria para poder descargate los módulos seleccionados.
                      </Modal.Body>
                      <Modal.Footer className='border-0 d-flex justify-content-center pb-4'>
                        <Button variant="outline-primary" onClick={() => {
                          mostrarModal(false)
                          mostrarOffCanvas(false)
                          }}>
                          Cerrar
                        </Button>
                      </Modal.Footer>
                    </Modal>

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
