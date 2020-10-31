import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'


const ProductScreen = ({ match }) => {
    const x = products.find((c) => c._id === match.params.id)

    return (
        <>
            <Link className="btn btn-dark my-3" to='/'>
                Go back
            </Link>

            <Row>
                <Col md={6}>
                    <Image src={x.image} alt={x.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <h3>
                                {x.name}
                            </h3>
                        </ListGroupItem>

                        <ListGroupItem>
                            <Rating value={x.rating} text={`${x.numReviews} reviews`} />
                        </ListGroupItem>

                        <ListGroupItem>
                            {x.description}
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md={3} varient='flush'>
                    <Card>
                        <ListGroupItem>
                            <Row>
                                <Col>
                                    Price:
                                </Col>
                                <Col>
                                    <strong>{x.price}</strong>

                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>
                                    Status:
                                </Col>
                                <Col>
                                    {x.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                </Col>
                            </Row>

                        </ListGroupItem>
                        <ListGroupItem>
                            <Button className="btn-block" type="button" disabled={x.countInStock === 0}>
                                Add to Cart</Button>
                        </ListGroupItem>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
