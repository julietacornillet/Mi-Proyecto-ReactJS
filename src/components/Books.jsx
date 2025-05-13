import { useEffect, useState } from 'react';
import { Row, Col, Card, CardFooter, Button, Container, Badge } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


function Books({contador, setContador}) {
    const [books, setBooks] = useState([]);

    useEffect(() => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=react&limit=20')
        .then(res => res.json())
        .then(data => setBooks(data.items))
        .catch(err => console.error("Error de carga de libros", err));
    }, []);


    return (
        
        <Container className="py-5">
            <Row>
                <Col md='12' className="pb-4">
                    <h2 className="text-primary-emphasis">Libros React JS</h2>
                </Col>
                {books.map((book) => {
                    return (
                    <Col key={book.id} md={6} className="g-3">
                        <Card className='h-100 position-relative'>
                            <span className="position-absolute top-0 end-0 m-2">
                                <Button onClick={()=>setContador(contador+1)} variant="success rounded-circle shadow" title="Agregar al carrito" aria-label="Agregar al carrito" size="sm"> <FontAwesomeIcon icon={faCartShopping} size="sm" /></Button>
                            </span>

                            <Card.Body>
                                    <Row>
                                        <Col md={3}>
                                            <Card.Img src={book.volumeInfo.imageLinks.thumbnail} className='shadow pe-0' />
                                        </Col>
                                        <Col md={8} className='text-secondary'>
                                            <p className='h5'>{book.volumeInfo.title}</p>
                                            
                                            <small className="ms-end">       
                                                {book.volumeInfo.language ? <Badge className="fw-medium mt-0 mb-1" text='black' bg="warning" pill>Español</Badge> : ''} 
                                                <Badge className="fw-medium mt-0 mb-1 border border-danger text-danger bg-light mx-1" pill>{book.volumeInfo.categories}</Badge>                                     
                                                {book.saleInfo.isEbook ? <Badge className="fw-medium mt-0 mb-1 border border-primary text-primary bg-light" pill>eBook</Badge> : '' }
                                            </small>

                                            <p>{ book.volumeInfo.description?.slice(0, 100)}</p>
                                            <span className='small fw-medium'>Publicado por: {book.volumeInfo.authors}</span>
                                        </Col>
                                    </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    );
                })}
            </Row>
        </Container>
    );
}

export default Books;
