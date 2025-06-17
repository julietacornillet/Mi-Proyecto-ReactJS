import { useEffect, useState, useContext } from 'react';

import {Container, Row, Col} from 'react-bootstrap';
import ListCardBook from '../components/ListCardBook';

import { CartContext } from '../components/CartContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';



// function Books ({setContador, contador}) {
    
    // const [books, setBooks] = useState([]);

    // useEffect(() => {
    // fetch(`https://www.googleapis.com/books/v1/volumes?q="${filters}"&maxResults=15`)
    //     .then(res => res.json())
    //     .then(data => setBooks(data.items))
    //     .catch(err => console.error("Error de carga de libros", err));
    // }, []);


function Books () {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const { agregarAlCarrito } = useContext(CartContext);

    const filters = 'react+javascript';
    
    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=filter={${filters}}&maxResults=15`)
        .then((response) => response.json())
        .then((data) => { setBooks(data.items);
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error en la carga de libros:', error);
            setLoading(false);
        });
    }, [filters]);
    
    
    if (loading) {
        return <div className='m-auto text-primary text-opacity-50'><FontAwesomeIcon icon={faSpinner} spin size='4x'/></div>;
    }


        
    return (
        <Container className="py-5">
            <Row>
                <Col md='12' className="pb-4">
                    <h2 className="text-primary-emphasis">Libros React JS</h2>
                </Col>
                    {books.map((book) => {
                        return (
                            <Col md={6} className="g-4" key={book.id}>
                                <ListCardBook book={book} agregarAlCarrito={agregarAlCarrito}/>
                            </Col>
                        );
                    })}       
            </Row>
        </Container> 
    );
}

export default Books;