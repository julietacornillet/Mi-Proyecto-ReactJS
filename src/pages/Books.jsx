import { useEffect, useState, useContext } from 'react';
import {Container, Row, Col, Form, InputGroup} from 'react-bootstrap';
import ListCardBook from '../components/ListCardBook';

import { CartContext } from '../components/CartContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faSearch } from '@fortawesome/free-solid-svg-icons';



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
    const [buscador, setBuscador] = useState(""); // Estado para el buscador
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

    // Filtrar libros por título o descripción
    const filtroBooks = books.filter(book => {
        const titulo = book.volumeInfo.title?.toLowerCase() || "";
        const autores = book.volumeInfo.authors?.join(', ').toLowerCase() || "";
        const buscadorText = buscador.toLowerCase();
        return titulo.includes(buscadorText) || autores.includes(buscadorText);
    });
        
    return (
        <Container className="py-5">
            <Row>
                {/* título */}
                <Col md='12' className="pb-4">
                    <h2 className="text-primary-emphasis">Libros React JS</h2>
                </Col>
                {/* buscador */}
                <Row className="d-flex justify-content-center mb-2">
                    <Col md={6}>
                        <Form>
                            <InputGroup className="shadow-sm">
                                <InputGroup.Text>
                                <FontAwesomeIcon icon={faSearch} className="text-secondary" />
                                </InputGroup.Text>
                                <Form.Label className="visually-hidden">Buscar por título o autor</Form.Label>
                                <Form.Control type="text" placeholder="Buscar por título o autor" value={buscador} onChange={e => setBuscador(e.target.value)}
                                />
                            </InputGroup>
                        </Form>
                    </Col>
                </Row>
                {/* libros */}
                {filtroBooks.map((book) => {
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