import React from 'react';
import { Card, Button, Container, Row, Col, } from 'react-bootstrap'; // Stack,
import Image from 'react-bootstrap/Image';

const Body = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Card className="text-center"
                        style={{
                            opacity: 3,
                            display: 'flex',
                            marginTop: '5%',
                            marginLeft: '10%',
                            borderRadius: '25px',
                            fontfamily: 'Popins'
                        }}
                    >

                        <Card.Body >
                            <Card.Title
                                style={{
                                    color: "black",
                                    fontSize: 30,
                                    marginTop: '10px',
                                    fontWeight: "bolder",
                                    fontfamily: "Josefin Sans Bungee Inline",
                                }}

                            >Nos Complace Invitarle</Card.Title>
                            <Card.Text>
                                <h4>
                                    a la exposición de maquinaria pesada
                                </h4>

                                <h1
                                    style={{
                                        color: "#F72F26",
                                        fontSize: 50,
                                        fontWeight: "bolder",

                                    }}
                                >
                                    SANY</h1>
                                <br />
                                <h1>Jueves 26 de Mayo</h1>
                                <h2>Hora: 4:00 pm en adelante</h2>
                                <hr
                                    style={{
                                        display: 'flex',
                                        align: 'center',
                                        height: '5px',
                                        width: '100%',
                                        color: 'black',
                                        opacity: 0.6,
                                        background: 'black',
                                        borderColor: 'black',
                                        borderRadius: '25px',
                                    }}
                                ></hr>
                                <h1>Lugar:</h1>
                                <h2>Anillo <b>periférico</b></h2>
                                <br />
                                <p
                                    style={{
                                        fontSize: '25px',
                                        fontWeight: 'normal',
                                    }}
                                >
                                    Zona la cañada, <br />
                                    frente a Dirstribuidora itsmania.
                                </p>
                            </Card.Text>
                        </Card.Body>

                        <Button variant="outline-danger"
                            style={{
                                dispal: 'flex',
                                height: '40px',
                                background: "#F72F26",

                            }}
                        >
                            <h5
                                style={{
                                    color: '#FFFFFF',
                                }}
                            >
                                Confirmar
                            </h5>

                        </Button>

                    </Card >
                </Col>
                <Col>
                    <Image fluid
                        style={{
                            width: '70%',
                            height: '95%',
                            background: 'transparent',
                            objectfit: 'contain',
                            opacity: 3,
                            marginTop: '5%',
                            marginRight: '10%',
                            borderRadius: '25px',
                        }}
                        src='https://grupoplatino.blob.core.windows.net/develop/excavadora2.png' className='img-fluid shadow-4' alt='Sany' />
                </Col>
            </Row>

        </Container>
    );

};

export default Body;