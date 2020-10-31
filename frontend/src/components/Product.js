import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'


const Product = ({ x }) => {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/product/${x._id}`}>
                <Card.Img src={x.image} variant='top' />
            </Link>
            <Card.Body>
                <Link to={`/product/${x._id}`}>
                    <Card.Title as='div'>
                        <strong>{x.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as='div'>
                    < Rating value={x.rating} text={`${x.numReviews} reviews`} />
                </Card.Text>

                <Card.Text as='h3'>
                    ${x.price}
                </Card.Text>

            </Card.Body>
        </Card>
    )
}

export default Product
