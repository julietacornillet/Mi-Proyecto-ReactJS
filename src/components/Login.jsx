import React from "react";
import { Container, Card, Form, Button, Col, Row, CardBody } from "react-bootstrap";

import { Link } from 'react-router-dom';

function Login () {
    return(
        <Container className="m-auto">
            <Row className="d-flex justify-content-center">
                <Col md={4}>
                    <Card className="shadow px-3">
                        <CardBody>
                        <Form>
                            <legend className="text-primary-emphasis mb-4 text-center">Gestor de contenidos</legend>
                            <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formPlaintextPassword" className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Button as={Link} to='/comingsoon' className="mt-3" variant="primary" type="submit">
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