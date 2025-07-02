import React, { useContext, useState } from 'react';
import {Alert, Button, Badge, Modal, Offcanvas, Table} from 'react-bootstrap';
import { CartContext } from './CartContext';
// import ButtonContador from './ButtonContador';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function Carrito (){
    const { carrito, setCarrito } = useContext(CartContext);

    const totalItems = carrito.reduce((total, book) => total + book.cantidad, 0);
    const totalPagar = carrito.reduce((total, book) => total + book.saleInfo.listPrice.amount * book.cantidad, 0);

    // offCanvas navbar
    const [offcanvasShow, mostrarOffCanvas] = useState(false);
    // modal finalizar carrito
    const [modalShow, mostrarModal] = useState(false); 


    return (
    <>
        <Button variant="light shadow rounded-pill border-success" className='ms-md-2 ms-0 my-md-0 my-3' onClick={() => mostrarOffCanvas(true)}>
            <FontAwesomeIcon icon={faCartShopping} className='mt-1 me-1 text-success'/> 
            {totalItems > 0 ? <Badge pill bg="success" className='fw-medium pb-1 bg-gradient' title={`Hay ${totalItems} productos seleccionados`}> {totalItems} </Badge> : ''}
            <span className="visually-hidden">Carrito</span>
        </Button>

            {/* carrito detalle */}
            <Offcanvas show={offcanvasShow} onHide={() => mostrarOffCanvas(false)} placement="end" className="px-1">
                <Offcanvas.Header className='pb-0' closeButton>
                    <Offcanvas.Title>
                        <h4 className='fw-medium mt-3'>Detalle Carrito</h4>
                    </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>   
                    {totalItems > 0 ?
                    <>
                    
                    <Table hover responsive className="mt-3" size='sm'>
                        <thead>
                        <tr>
                            <th></th>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                            {carrito.map((item) => (
                                <CarritoItem item={item} totalItems={totalItems} key={item.id} mostrarOffCanvas={mostrarOffCanvas}/>
                            ))}
                        </tbody>
                    </Table>
                        <Alert variant='secondary p-2 mt-5' className="d-flex justify-content-between align-items-baseline">
                            <span className='float-start fw-bold'> Total: ${totalPagar.toFixed(2)}</span>
                            <div>
                            <Button onClick={() => mostrarModal(true)} className='mx-1' size='sm' variant='success end'>Finalizar</Button>
                            <Button onClick={() => setCarrito([])} size="sm" variant="danger" title="Vaciar" aria-label="Vaciar al carrito"><span className="fw-normal"> Vaciar </span></Button>
                            </div>
                        </Alert>
                    </>
                    : 'No hay nada seleccionado'}
                </Offcanvas.Body>
            </Offcanvas>

            

            {/* modal para finalizar carrito */}
            <Modal show={modalShow} onHide={() => mostrarModal(false)} animation={false}>
                <Modal.Header className='border-0 pb-0' closeButton>
                </Modal.Header>
                <Modal.Body className='px-5 pt-0'>
                <h2 className='text-primary'>¡Gracias!</h2>
                    Te enviamos a tu casilla de correo con tu factura y toda la información necesaria para poder descargate los módulos seleccionados.
                </Modal.Body>
                <Modal.Footer className='border-0 d-flex justify-content-center pb-4'>
                <Button variant="outline-primary" onClick={() => {
                    mostrarModal(false)
                    mostrarOffCanvas(false)
                    setCarrito([])
                    }}>
                    Cerrar
                </Button>
                </Modal.Footer>
            </Modal>
    </>
    );
};


function CarritoItem({item}){
    
    const { carrito, setCarrito } = useContext(CartContext);

    const eliminarDelCarrito = (id) => {
        setCarrito(prev => prev.filter(book => book.id !== id));
    };

    return <>
            <tr>
                <td><Badge pill bg="white" className='border border-success-subtle border-2 fw-bold bg-gradient text-success'> {item.cantidad} </Badge></td>
                <td> {item.volumeInfo.title} </td>
                <td> {item.saleInfo.listPrice.currencyCode} {item.saleInfo.listPrice.amount.toFixed(2)} </td>
                <td> {item.saleInfo.listPrice.currencyCode} {(item.saleInfo.listPrice.amount * item.cantidad).toFixed(2)}</td>
                <td>
                    <Button variant="outline-danger" size="sm" onClick={() => eliminarDelCarrito(item.id)} >
                    <FontAwesomeIcon icon={faTrashAlt} size="sm" />
                    </Button>
                </td>
            </tr>
            </>

}

export default Carrito;
