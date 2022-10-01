import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Cart = () => {
    return (
        <div className='d-flex mt-5 justify-content-around'>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://reacttraining.com/images/logo-icon-512.png" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://reacttraining.com/images/logo-icon-512.png" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://reacttraining.com/images/logo-icon-512.png" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Cart;