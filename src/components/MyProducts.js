import React from 'react'
import ProductData from '../assets/json/products.json'

//ReactBootstrap UI Package
import { Row, Col, Card } from 'react-bootstrap'

export default function MyProducts(props) {
    return (<>
        <h1 className="text-center bg-primary text-white p-2">MYPRODUCTS COMPONENT</h1>

        <h3>PURE BOOTSTRAP</h3>
        <div className="row">
            {
                ProductData.map((data, i) => {
                    return (<div className="col-lg-4">
                        <div class="card">
                            <img src={data.image} class="card-img-top w-25 mx-auto my-4" style={{ height: '120px' }} />
                            <div class="card-body text-center">
                                <p class="card-text">{data.title}</p>
                                <h6 class="card-title">{data.category}</h6>
                                <h2 class="card-title">${data.price}</h2>
                            </div>
                        </div>
                    </div>
                    )
                })
            }

        </div>

        <br /><br /><br />



        <h3>PURE REACT_BOOTSTRAP UI PACKAGE</h3>

        <Row>
            {
                ProductData.map((data, i) => {
                    return (<Col lg={4} key={i}>
                        <Card>
                            <Card.Img src={data.image} variant="top" className="w-25 mx-auto my-4" style={{ height: '120px' }} />
                            <Card.Body className="card-body text-center">
                                <Card.Text className="card-text">{data.title}</Card.Text>
                                <Card.Title className="card-title">{data.category}</Card.Title>
                                <Card.Title className="card-title">${data.price}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    )
                })
            }
        </Row>

    </>)
}
