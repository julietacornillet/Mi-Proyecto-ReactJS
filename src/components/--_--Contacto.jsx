import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import Swal from "sweetalert2";

function Contacto() {

    // campos form validaciones
    const [nombre, setNombre]=useState('');
    const [email, setEmail]=useState('');
    const [tel, setTel]=useState('');
    const [asunto, setAsunto]=useState('');
    const [mensaje, setMensaje]=useState('');

    const emailValido=(email)=>
    {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const telefonoValido = (tel) => {
        const regex = /^\+?\d{7,15}$/;
        return regex.test(tel);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        // validar que no haya campos vacíos
        if(nombre.trim()==='' || email.trim()==='' || tel.trim()==='' || asunto.trim()==='' || mensaje.trim()==='')
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

        // valida el formato del teléfono
        if(!telefonoValido(tel))
        {
            Swal.fire({
                icon: 'error',
                title: 'Teléfono no válido',
                text: 'Por favor, ingresá un número de teléfono válido (solo dígitos, con o sin +)',
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
        setTel('');
        setAsunto('');
        setMensaje('');
        
    };

    // formulario
    return (
        <Container className='py-5'>
        <h2 className="text-primary-emphasis mb-4">Formulario de consultas</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="formGridState">
                <Col sm={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col sm={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="tu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col sm={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="number" placeholder="+54911" value={tel} onChange={(e) => setTel(e.target.value)} />
                    </Form.Group>
                </Col>
            </Form.Group>
            <Form.Group className="mb-3">                
                <Col sm={8}>
                    <Form.Group className="mb-3">
                        <Form.Label>Asunto de consulta</Form.Label>
                        <Form.Control type="text" placeholder="Tu consulta" value={asunto} onChange={(e) => setAsunto(e.target.value)} />
                    </Form.Group>
                </Col>
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder='Detalle de tu consulta' value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
            </Form.Group>

            <Form.Check type="switch" id="custom-switch" label="Quiero recibir novedades" />

            <Button variant="primary" type="submit" className='mt-5'>Enviar consulta</Button>
        </Form>
        </Container>
    );
    }

    export default Contacto;
