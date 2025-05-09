import React, { useState } from 'react';
import { Container, Card, Form, Button, Col, Row, CardBody } from "react-bootstrap";
import Swal from 'sweetalert2';

import { useNavigate } from 'react-router-dom';

function Login () {

    const navigate = useNavigate();

    const [email, setEmail]=useState('');
    const [pass, setPass]=useState('');

    const emailValido=(email)=>
    {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        // validar que no haya campos vacíos
        if(email.trim()==='' || pass.trim()==='')
        {
            // alerta con el error
            Swal.fire({
                icon: 'warning',
                title: 'Campos incompletos',
                text: 'Por favor, completá todos los campos',
            });
            return;
        }

        // valida el formato email
        if(!emailValido(email))
        {
            // alerta con el error
            Swal.fire({
                icon: 'error',
                title: 'Email no válido',
                text: 'Por favor, ingresá un email válido',
            });
            return;
        }

        // si paso las validaciones ingreso
        navigate('/comingsoon');

        // con el useState limpio formulario
        setEmail('');
        setPass('');
        
    };


    return(
        <Container className="m-auto">
            <Row className="d-flex justify-content-center">
                <Col md={4}>
                    <Card className="shadow p-3">
                        <CardBody>
                        <Form onSubmit={handleSubmit}>
                            <legend className="text-primary-emphasis mb-4 text-center">Gestor de contenidos</legend>
                            <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formPlaintextPassword" className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Tu Password" value={pass} onChange={(e) => setPass(e.target.value)} />
                            </Form.Group>

                            <Button className="mt-3" variant="primary" type="submit">
                                Ingresar
                            </Button>
                        </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;