import { useState } from 'react';
import {Alert, Button, Badge, Modal, Offcanvas} from 'react-bootstrap';

import ButtonContador from './ButtonContador';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';




function ButtonCarrito ({contador, setContador}) {

    // offCanvas navbar
    const [offcanvasShow, mostrarOffCanvas] = useState(false);

    // modal finalizar carrito
    const [modalShow, mostrarModal] = useState(false); 

    return (
        <>
            {/* carrito botón */}
            <Button variant="light shadow rounded-pill border-success" className='ms-md-2 ms-0 my-md-0 my-3' onClick={() => mostrarOffCanvas(true)}>
                <FontAwesomeIcon icon={faCartShopping} className='mt-1 me-1 text-success'/> <Badge pill bg="success" className='fw-medium pb-1 bg-gradient' title={`Hay ${contador} modulos seleccionados`}> {contador} </Badge>
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
            
        </>
    );
}

export default ButtonCarrito;