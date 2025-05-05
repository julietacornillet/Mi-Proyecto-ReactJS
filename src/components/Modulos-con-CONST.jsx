import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {ButtonGroup, ButtonToolbar} from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { Stack, CardLink } from "react-bootstrap";

function Modulos({contador, setContador}) {
    
    const modulos= [{
        id:1,
        titulo:"Primeros Pasos",
        texto:'Repaso HTML, CSS y JavaScript / Instalación con Vite y Node.js / Estructura básica del proyecto React / Introducción a JSX y creación de componentes funcionales',
        imagen:"https://picsum.photos/id/366/250/120",
        btnTexto: "Lo quiero!",
        btnAdicional:"https://ttech2025.github.io/flipbook/REACTJS/Clase01"
    },
    {
        id:2,
        titulo:"JXS y Componentes",
        texto:'Repaso de JSX y componentes funcionales / Creación de componentes más complejos / Bienvenida a TechLab / Situación Inicial en TechLab',
        imagen:"https://picsum.photos/id/370/250/120",
        btnTexto: "Lo quiero!",
        btnAdicional:"https://ttech2025.github.io/flipbook/REACTJS/Clase02"
    },
    {
        id:3,
        titulo:'Layout en React',
        texto:'Creación de la estructura básica de la aplicación / Desarrollo de los primeros componentes reutilizables (Header, Footer, Nav, Main, Gallery) / Visualización de los componentes en el navegador / TalentoLab',
        imagen:"https://picsum.photos/id/527/250/120",
        btnTexto: "Lo quiero!",
        btnAdicional:"https://gamma.app/docs/React-Js-Clase-3-knia97rncybu749?mode=doc"
    },
    {
        id:4,
        titulo:'React Hooks y Eventos',
        texto:'Introducción al manejo del estado local con useState / Comprensión y manejo de eventos en React (clics, formularios) / Proyecto final Talento Lab',
        imagen:"https://picsum.photos/250/120?random=4",
        btnTexto: 'Lo quiero!',
        btnAdicional:'https://gamma.app/docs/React-JS-Clase-4-qlfauwtg284qlpp?mode=doc'
    },
    {
        id:5,
        titulo:'Uso de useEffect y Peticiones a APIs',
        texto:'Introducción al manejo de efectos secundarios con useEffect / Realización de peticiones a APIs para cargar productos / Manejo del estado de carga y errores en aplicaciones React',
        imagen:"https://picsum.photos/250/120?random=5",
        btnTexto: 'Lo quiero!',
        btnAdicional:'https://gamma.app/docs/React-JS-Clase-5-oqv5sj0vc1s6bxy?mode=doc'
    },
    {
        id:6,
        titulo:'Router - Rutas Estáticas y Dinámicas',
        texto:'Introducción al manejo de efectos secundarios con useEffect / Realización de peticiones a APIs para cargar productos / Manejo del estado de carga y errores en aplicaciones React.',
        imagen:"https://picsum.photos/250/120?random=6",
        btnTexto: '',
        btnAdicional:''
    }
    ];
    
    return(
        <Container className="py-3">
            <Row>
                <Col md='12' className="py-4">
                    <h2 className="text-primary-emphasis">Módulos del curso</h2>
                </Col>

                {modulos.map((clase, idx) => (
                    <Col md={6} key={idx} lg="4" className="mb-4 h-100">
                        <Card className="shadow">
                            <Card.Img variant="top" src={clase.imagen} alt="imagen aleatoria sobre el módulo de la clase"/>
                            <Card.Header className="border-0 pb-0 ms-auto bg-transparent">
                                <Stack><small><Badge className="mt-0 border border-success text-success shadow-sm" bg="light" pill>Módulo 0{idx + 1}</Badge></small></Stack>
                            </Card.Header>
                            <Card.Body className="mt-0">
                                <Card.Title>{clase.titulo}</Card.Title>
                                <Card.Text>{clase.texto}</Card.Text>

                                <ButtonToolbar className="justify-content-between" aria-label="Grupo de botones Agregar al carrito y descargar material" >

                                    <ButtonGroup aria-label="Descargar">
                                        {clase.btnTexto ? <Button  onClick={()=>setContador(contador+1)} variant="primary" title="Agregar al carrito" aria-label="Agregar al carrito" size="sm">{clase.btnTexto}</Button> : <Button variant="primary" size="sm" disabled>Próximamente</Button>}
                                        {clase.btnAdicional ? <CardLink href={clase.btnAdicional} title={`Ver material del módulo N°` + (idx + 1)} aria-label={'Ver material del módulo N°' + clase.titulo} className="btn btn-sm btn-outline-dark" target="blank">🔗</CardLink> : ''}
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