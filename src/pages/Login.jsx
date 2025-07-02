import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Form, Button, Col, Row, CardBody } from "react-bootstrap";
import Swal from 'sweetalert2';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // validaciones
    const emailValido = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar campos vacíos
    if (email.trim() === '' || password.trim() === '') {
    Swal.fire({
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Por favor, completá todos los campos',
    });
    return;
    }

    // Validar formato de email
    if (!emailValido(email)) {
    Swal.fire({
        icon: 'error',
        title: 'Email y/o contraseña inválido',
        text: 'Ingresá un email válido',
    });
    return;
    }

    // Intentar login con fetch
    try {        
        // *** Credenciales de PRUEBAS
        // *** admin admin@admin.com
        // *** usuario usuario@usuario.com
        // *** pass 1234
        const res = await fetch('https://6851a6f38612b47a2c0adc64.mockapi.io/usuarios'); 
        const users = await res.json();
        //   console.log(users);
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            // paso exitosamente el login
            localStorage.setItem('auth', 'true');
            localStorage.setItem('usuario', JSON.stringify(user));
            navigate(`${user.rol == 'usuario' ? `/usuario/${user.id}`: `/admin/${user.id}`}`);
                Swal.fire({
                icon: 'success',
                title: 'Bienvenida',
                text: `Hola ${user.nombre}!`,
                timer: 1500,
                showConfirmButton: false
                });
            } else {
                // fallaron credenciales
                Swal.fire({
                icon: 'error',
                title: 'Login fallido',
                text: 'Email o contraseña incorrectos',
                footer: '<small><strong>Credenciales de prueba:</strong> <br> "Administrador" admin@admin.com / "Usuario" usuario@usuario.com <br> Password: 1234</small>'
                });
        }
        } catch (error) {
            Swal.fire({
                // error
                icon: 'error',
                title: 'Error de conexión',
                text: 'No se pudo conectar con el servidor',
            });
        }

        // Limpiar campos
        setEmail('');
        setPassword('');
    };

    return (
        <Container className="m-auto">
        <Row className="d-flex justify-content-center m-4">
            <Col md={4}>
                <Card className="shadow p-3">
                    <CardBody>
                        <Form onSubmit={handleSubmit}>
                            <legend className="text-primary-emphasis mb-4 text-center">Gestor de contenidos</legend>

                            <Form.Group controlId="formGridEmail" className="mb-3">
                                <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Ej: admin@admin.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                            </Form.Group>

                            <Form.Group controlId="formPlaintextPassword" className="mb-3">
                                <Form.Label>Contraseña</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="****"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                            </Form.Group>

                            <Button className="mt-3 w-100" variant="primary" type="submit">
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