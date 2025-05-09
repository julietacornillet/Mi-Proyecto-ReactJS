import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import Swal from "sweetalert2";

function Contacto() {

    // campos form validaciones
    const [nombre, setNombre]=useState('');
    const [email, setEmail]=useState('');
    const [mensaje, setMensaje]=useState('');

    const emailValido=(email)=>
    {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        // validar que no haya campos vacíos
        if(nombre.trim()==='' || email.trim()==='' || mensaje.trim()==='')
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

        // si paso las validaciones y está todo ok lo envío
        Swal.fire({
            icon: 'success',
            title: 'Formulario enviado exitosamente!',
            html: `Gracias, <span class="fw-bold text-success">${nombre}</span> por mensaje!`,
        });

        // con el useState limpio formulario
        setNombre('');
        setEmail('');
        setMensaje('');
        
    };

    // formulario
    return (
        <Container className='py-5'>
        <h2 className="text-primary-emphasis mb-3">Formulario de consultas</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="formGridState">
                <Col sm={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col sm={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="tu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                </Col>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={3} value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">Enviar consulta</Button>
        </Form>
        </Container>
    );
    }

    export default Contacto;
