import React, { useState, useEffect } from "react";
import {Container, Row, Col} from "react-bootstrap";
import ListCardModulo from "../components/ListCardModulo";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const API_URL = "https://6851a6f38612b47a2c0adc64.mockapi.io/modulos";

function Modulos() {

    const [modulos, setModulos] = useState([]);
    const [loading, setLoading] = useState(true);

    
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
    
    
    if (loading) {
        return <div className='m-auto text-primary text-opacity-50'><FontAwesomeIcon icon={faSpinner} spin size='4x'/></div>;
    }

    return(
        <Container className="py-5">
            <Row>
                <Col md='12' className="pb-4">
                    <h2 className="text-primary-emphasis">Módulos del curso</h2>
                </Col>
                {modulos.length ? 
                    modulos.map((modulo, id) => (
                        <ListCardModulo key={id} modulo={modulo} />
                    ))
                    : 'No hay datos cargados'
                }
            </Row>
        </Container>
    );
}

export default Modulos;