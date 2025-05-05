import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {ButtonGroup, ButtonToolbar} from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { Stack, CardLink } from "react-bootstrap";

function Modulos({contador, setContador, modulosList, addToCart}) {
    // console.log(modulosList);
    
    return(
        <Container className="py-3">
            <Row>
                <Col md='12' className="py-4">
                    <h2 className="text-primary-emphasis">Módulos del curso</h2>
                </Col>

                {modulosList.map((modulo, idx) => (
                    <Col md={6} key={idx} lg="4" className="mb-4 h-100">
                        <Card className="shadow">
                            <Card.Img variant="top" src={modulo.imagen} alt="imagen aleatoria sobre el módulo de la clase"/>
                            <Card.Header className="border-0 pb-0 ms-auto bg-transparent">
                                <Stack><small><Badge className="mt-0 border border-success text-success shadow-sm" bg="light" pill>Módulo 0{idx + 1}</Badge></small></Stack>
                            </Card.Header>
                            <Card.Body className="mt-0">
                                <Card.Title>{modulo.titulo}</Card.Title>
                                <Card.Text>{modulo.texto}</Card.Text>

                                <ButtonToolbar className="justify-content-between" aria-label="Grupo de botones Agregar al carrito y descargar material" >

                                    <ButtonGroup aria-label="Descargar">
                                        {modulo.btnTexto ? <Button onClick={()=>addToCart(modulo.titulo)} variant="primary" title="Agregar al carrito" aria-label="Agregar al carrito" size="sm">{modulo.btnTexto}</Button> : <Button variant="primary" size="sm" disabled>Próximamente</Button>}
                                        {modulo.btnAdicional ? <CardLink href={modulo.btnAdicional} title={`Ver material del módulo N°` + (idx + 1)} aria-label={'Ver material del módulo N°' + modulo.titulo} className="btn btn-sm btn-outline-dark" target="blank">🔗</CardLink> : ''}
                                    </ButtonGroup>

                                    <ButtonGroup aria-label="Agregar al carrito">
                                        <Button onClick={()=>setContador(contador+1)} size="sm" variant="outline-success shadow" title="Sumar" aria-label="Sumar al carrito"><span className="h5 px-1 fw-bolder">+</span></Button>
                                        <Button onClick={()=>setContador(contador-1)} size="sm" variant="outline-danger shadow" title="Quitar" aria-label="Quitar al carrito"><span className="h5 px-1 fw-bolder">-</span></Button>
                                    </ButtonGroup>

                                </ButtonToolbar>

                            </Card.Body>
                        </Card>
                    </Col>    
                ))}
            </Row>
        </Container>
    );
}

export default Modulos;