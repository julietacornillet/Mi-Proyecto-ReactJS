import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {Card, ButtonToolbar, CardFooter} from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { Stack, CardLink } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faLink } from '@fortawesome/free-solid-svg-icons';

function Modulos({contador, setContador, modulosList, addToCart}) {
    // console.log(modulosList);
    
    return(
        <Container className="py-5">
            <Row>
                <Col md='12' className="pb-4">
                    <h2 className="text-primary-emphasis">Módulos del curso</h2>
                </Col>

                {modulosList.map((modulo, idx) => (
                    <Col md={6} key={idx} lg="4" className="mb-4">
                        <Card className="shadow h-100">
                            <Card.Img variant="top" src={modulo.imagen} alt="imagen aleatoria sobre el módulo de la clase"/>
                            <Card.Header className="border-0 pb-0 ms-auto bg-transparent">
                                <Stack><small><Badge className="mt-0 border border-success text-success shadow-sm" bg="light" pill>Módulo 0{idx + 1}</Badge></small></Stack>
                            </Card.Header>
                            <Card.Body className="mt-0">
                                <Card.Title>{modulo.titulo}</Card.Title>
                                <Card.Text>{modulo.texto}</Card.Text>
                            </Card.Body>
                            <CardFooter className="border-top-0 bg-white pb-3">
                                <ButtonToolbar className="justify-content-between" aria-label="Grupo de botones Agregar al carrito y descargar material" >

                                    {modulo.btnAdicional ? 
                                    <CardLink href={modulo.btnAdicional} title={`Ver material del módulo N°` + (idx + 1)} aria-label={'Ver material del módulo' + modulo.titulo} className="btn btn-sm btn-outline-primary" target="blank"> Material teórico <FontAwesomeIcon className="ms-1" icon={faLink} size="sm" /></CardLink> : ''}

                                    {modulo.btnTexto ? 
                                    <Button onClick={()=>setContador(contador+1)} variant="primary rounded-circle" title={modulo.btnTexto} aria-label="Agregar al carrito" size="sm"> <FontAwesomeIcon icon={faCartShopping} size="sm" /></Button> : <Button variant="primary" size="sm" disabled>Próximamente</Button>}
                                        
                                    
                                    {/* <ButtonGroup aria-label="Agregar al carrito">
                                        <Button onClick={()=>addToCart(modulo.titulo)} variant="outline-primary" title={modulo.btnTexto} aria-label="Agregar al carrito" size="sm"> <FontAwesomeIcon icon={faCartShopping} size="sm" /></Button>
                                        <Button onClick={()=>setContador(contador+1)} size="sm" variant="outline-success shadow" title="Sumar" aria-label="Sumar al carrito"><span className="h5 px-1 fw-bolder">+</span></Button>
                                        <Button onClick={()=>setContador(contador-1)} size="sm" variant="outline-danger shadow" title="Quitar" aria-label="Quitar al carrito"><span className="h5 px-1 fw-bolder">-</span></Button>
                                    </ButtonGroup> */}

                                </ButtonToolbar>                                
                            </CardFooter>
                        </Card>
                    </Col>    
                ))}
            </Row>
        </Container>
    );
}

export default Modulos;