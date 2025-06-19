import {Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Card, CardFooter, CardLink, ButtonToolbar} from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { Stack } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';


function CardModulo ({ modulo}) {
    return (
        <Col md={6} lg="4" className="mb-4">
            <Card className="shadow h-100">
                <Card.Img variant="top" src={modulo.imagen || '/modulos_react.jpg'} title={modulo.titulo} className="border-bottom"/>
                <Card.Header className="border-0 pb-0 ms-auto bg-transparent">
                    <Stack><small><Badge className="mt-0 border border-success text-success shadow" bg="light" pill>Módulo {modulo.numero < 10 ? `0${modulo.numero}` : modulo.numero}</Badge></small></Stack>
                </Card.Header>
                <Card.Body className="mt-0">
                    <Card.Title>{modulo.titulo}</Card.Title>
                    <Card.Text>{modulo.descripcion}</Card.Text>
                </Card.Body>
                <CardFooter className="border-top-0 bg-white pb-3">
                    <ButtonToolbar className="justify-content-between" aria-label="Grupo de botones Agregar al carrito y descargar material" >
                        {modulo.btnAdicional ? 
                        <CardLink href={modulo.btnAdicional} title={`${modulo.titulo} Módulo 0` + (modulo.id)} aria-label={'Ver material del módulo' + modulo.titulo} className="btn btn-sm btn-outline-primary" target="blank"> Material teórico <FontAwesomeIcon className="ms-1" icon={faLink} size="sm" /></CardLink> : <Button variant="outline-primary" size="sm" disabled>Próximamente</Button>}
                    </ButtonToolbar>                                
                </CardFooter>
            </Card>
        </Col> 
    );
}

export default CardModulo;