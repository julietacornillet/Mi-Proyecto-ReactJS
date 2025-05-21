import { useEffect, useState } from 'react';

import {Container, Row, Col} from 'react-bootstrap';
import ListCardBook from '../components/ListCardBook';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';



function Books ({setContador, contador}) {
    
    // const [books, setBooks] = useState([]);

    // useEffect(() => {
    // fetch(`https://www.googleapis.com/books/v1/volumes?q="${filters}"&maxResults=15`)
    //     .then(res => res.json())
    //     .then(data => setBooks(data.items))
    //     .catch(err => console.error("Error de carga de libros", err));
    // }, []);

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

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
                            <ListCardBook key={book.id} book={book} contador={contador} setContador={setContador}/>
                        );
                    })}       
            </Row>
        </Container> 
    );
}

export default Books;