import { useEffect, useState } from 'react';

import {CardFooter, Col, Row} from "react-bootstrap";
import {Card, Badge} from 'react-bootstrap';

import ButtonAgregar from "./ButtonAgregar";



function CardLibro ({tipoLibro, contador, setContador}) {
    
    const [books, setBooks] = useState([]);

    useEffect(() => {
    fetch('https://www.googleapis.com/books/v1/volumes?q="react+Javascript"&maxResults=15')
        .then(res => res.json())
        .then(data => setBooks(data.items))
        .catch(err => console.error("Error de carga de libros", err));
    }, []);

    return (
        <>
        {books.map((book) => {
                    return (
                    <Col key={book.id} md={6} className="g-3">
                        <Card className='h-100 position-relative'>
                            <span className="position-absolute top-0 end-0 m-2">
                                <ButtonAgregar contador={contador} setContador={setContador} title={'Agreagar libro al carrito'} alt={'Agreagar al carrito'} disabled={book.saleInfo.saleability === 'NOT_FOR_SALE'}  variant={book.saleInfo.saleability === 'NOT_FOR_SALE' ? 'outline-success rounded-circle' : 'success rounded-circle'}/>                             
                            </span>

                            <Card.Body className='pb-0'>
                                    <Row>
                                        <Col md={3}>
                                            <Card.Img src={book.volumeInfo.imageLinks.thumbnail} className='shadow pe-0' />
                                        </Col>
                                        <Col md={8} className='text-secondary'>
                                            <p className='h5'>{book.volumeInfo.title}</p>
                                            
                                            <div className="ms-end my-3">
                                                <small>       
                                                    <Badge className="mt-0 mb- 1 border border-secondary text-secondary bg-light me-1" pill>{book.volumeInfo.language == 'es' ? 'Español' : 'Inglés'}</Badge> 
                                                    <Badge className="mt-0 mb-1 border border-success text-success bg-light me-1" pill>{book.volumeInfo.categories}</Badge>                                     
                                                    {book.saleInfo.isEbook ? (<Badge className="mt-0 mb-1 border border-primary text-primary bg-light me-1" pill>{tipoLibro}</Badge>) : '' }
                                                    <Badge className="mt-0 mb-1 me-1" bg='danger' pill>
                                                        {book.saleInfo.saleability == 'NOT_FOR_SALE' ? 'Agotado' : ''}
                                                    </Badge>
                                                </small>
                                            </div>

                                            <p> {book.volumeInfo.description?.slice(0, 100)} </p>
                                            <span className='small fw-medium'>Publicado por: {book.volumeInfo.authors}</span>
                                        </Col>
                                    </Row>
                            </Card.Body>

                            {book.saleInfo?.listPrice
                                ? 
                                <CardFooter className='ms-auto bg-success bg-opacity-10 fw-medium rounded-start-0 border-success small text-success-emphasis mt-0'>
                                    Precio: {book.saleInfo.listPrice.currencyCode} {book.saleInfo.listPrice.amount}
                                </CardFooter>    
                                : ''
                            }
                        </Card>
                    </Col>
                    );
                })}
        </>
    );
}

export default CardLibro;