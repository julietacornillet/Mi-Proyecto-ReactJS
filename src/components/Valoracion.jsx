import { useEffect, useState } from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';


function Valoracion() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=3')
        .then(res => res.json())
        .then(data => setComments(data))
        .catch(err => console.error("Error de carga de comentarios", err));
    }, []);

    // Función para mostrar estrellas
    // const getStars = (rating) => {
    // return Array.from({ length: 5 }, (_, i) => i < rating ? '★' : '☆').join(' ');
    // };

    return (
    <div className='row bg-gradient bg-light p-3 px-md-5 pb-5 mt-auto container-fluid d-flex justify-content-center'>
        <div className='col-md-8'>
            <h2 className='h5 text-black-50 mb-3'>Comentarios</h2>
            <Row>
            {comments.map((comment, index) => {
                const avatar = `https://picsum.photos/50/?random=${index + 1}`;

                return (
                <Col key={comment.id} md={4} className="g-3">
                    <Card className='h-100'>
                    <Card.Body>
                        <Card.Title>
                            <Row>
                                <Col md={2}>
                                    <Image src={avatar} roundedCircle className='shadow' />
                                </Col>
                                <Col className='ms-1 text-secondary' md={9}>
                                    {comment.name}
                                </Col>
                            </Row>
                        </Card.Title> 
                        <Card.Text className='small'>
                            {/* <Badge className='text-dark my-2 bg-warning'>{getStars(rating)}</Badge> */}
                            {comment.body}
                            <br/>
                            <span className='small mt-2 fw-medium'>Publicado por: {comment.email}</span>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                );
            })}
            </Row>
        </div>
    </div>
    );
}

export default Valoracion;
