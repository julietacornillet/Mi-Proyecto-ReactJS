import React, { useState, useEffect } from "react";
import {Container, Row, Col, Form, InputGroup} from "react-bootstrap";
import ListCardModulo from "../components/ListCardModulo";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faSearch } from '@fortawesome/free-solid-svg-icons';

const API_URL = "https://6851a6f38612b47a2c0adc64.mockapi.io/modulos";

function Modulos() {

    const [modulos, setModulos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [buscador, setBuscador] = useState(""); // Estado para el buscador

    
    useEffect(() => {
        fetch(API_URL)
        .then((response) => response.json())
        .then((data) => { setModulos(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error en la carga de módulos:', error);
            setLoading(false);
        });
    }, []);
    
    // Filtrar por título
    const filtroModulos = modulos.filter(modulo =>
    modulo.titulo.toLowerCase().includes(buscador.toLowerCase())
);


    if (loading) {
        return <div className='m-auto text-primary text-opacity-50'><FontAwesomeIcon icon={faSpinner} spin size='4x'/></div>;
    }

    return(
        <Container className="py-5">
            <Row>
                {/* titulo */}
                <Col md='12' className="pb-4">
                    <h2 className="text-primary-emphasis">Módulos del curso</h2>
                </Col>
                {/* buscador */}
                <Row className="d-flex justify-content-center my-4">
                    <Col md={6}>
                        <Form>
                            <InputGroup className="shadow-sm">
                                <InputGroup.Text>
                                <FontAwesomeIcon icon={faSearch} className="text-secondary" />
                                </InputGroup.Text>
                                    <Form.Label className="visually-hidden">Buscar por título</Form.Label>
                                    <Form.Control type="text" placeholder="Buscar por título" value={buscador} onChange={e => setBuscador(e.target.value)} />
                            </InputGroup>
                        </Form>
                    </Col>
                </Row>
                {/* modulos */}
                {filtroModulos.length ? 
                    filtroModulos.map((modulo, id) => (
                        <ListCardModulo key={id} modulo={modulo} />
                    ))
                    : 'No hay datos cargados'
                }
            </Row>
        </Container>
    );
}

export default Modulos;