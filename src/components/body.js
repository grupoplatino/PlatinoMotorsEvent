import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Card, Button, Container, Row, Col, Image, Modal, Form } from 'react-bootstrap'; // Stack,


const Body = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Container fluid>
            <Row fluid>
                <Col xs="12" sm="12" md="6" >
                    <Card className="text-center"
                        style={{
                            opacity: 3,
                            height: '90%',
                            display: 'flex',
                            marginTop: '15%',
                            borderRadius: '25px',
                            fontfamily: 'Popins'
                        }}
                    >

                        <Card.Body fluid>
                            <Card.Title
                                style={{
                                    color: "black",
                                    fontSize: 30,
                                    marginTop: '3.5em',
                                    fontWeight: "bolder",
                                    fontfamily: "Josefin Sans Bungee Inline",
                                }}

                            >Nos Complace Invitarle</Card.Title>
                            <Card.Text fluid xs="12" sm="12" md="6">
                                <h4 fluid xs="12" sm="12" md="6">
                                    a la exposición de maquinaria pesada
                                </h4>

                                <h1 fluid xs="12" sm="12" md="6"
                                    style={{
                                        color: "#F72F26",
                                        fontSize: 50,
                                        fontWeight: "bolder",

                                    }}
                                >
                                    SANY</h1>
                                <br />
                                <h1 fluid xs="12" sm="12" md="6">Jueves 26 de Mayo</h1>
                                <h2 fluid xs="12" sm="12" md="6">Hora: 4:00 pm en adelante</h2>
                                <hr fluid xs="12" sm="12" md="6"
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
                                <h1 fluid xs="12" sm="12" md="6">Lugar:</h1>
                                <h2 fluid xs="12" sm="12" md="6">Anillo <b>periférico</b></h2>
                                <br />
                                <p fluid xs="12" sm="12" md="6"
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

                        <Button variant="outline-danger" onClick={() => setModalShow(true)}
                            style={{
                                dispal: 'flex',
                                height: '40px',
                                background: "#F72F26",

                            }}
                        >
                            <h5 fluid xs="12" sm="12" md="6"
                                style={{
                                    color: '#FFFFFF',
                                }}
                            >
                                Confirmar
                            </h5>

                        </Button>

                    </Card >
                </Col>
                <Col xs="12" sm="12" md="6">
                    <Image fluid
                        style={{
                            // width: '70%',
                            // height: '95%',
                            background: 'transparent',
                            objectfit: 'contain',
                            opacity: 3,
                            marginTop: '15%',
                            // marginRight: '10%',
                            borderRadius: '25px',
                        }}
                        src='https://grupoplatino.blob.core.windows.net/develop/excavadora2.png' className='img-fluid shadow-4' alt='Sany' />
                </Col>
            </Row>
            <ECVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}

            />
        </Container >
    );

};
function ECVerticallyCenteredModal(props) {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ltp2k3h', 'template_qfzl4n1', form.current, 'user_rIgkpBy74HbPtpBcf5maa')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Image fluid
                    style={{
                        with: '100%',
                        height: '100px',
                    }}
                    src='https://grupoplatino.blob.core.windows.net/develop/logo-pm.png' />
            </Modal.Header>
            <Modal.Body>
                <Form ref={Form} onSubmit={sendEmail}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="nombre" placeholder="Nombre: Ex. Juan Perez" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo Electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Email: Ex. juanperez@email.com" />
                        <Form.Text className="text-muted">
                            Nosotros nunca compartiremos tu correo con nadie más.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="phonne" placeholder="Telefono" />
                    </Form.Group>

                    <div className="d-flex flex-row-reverse">

                        <Button variant="danger" onClick={props.on}>Confirmar Asistencia</Button>
                        <Button style={{ marginRight: 10 }} variant="outline-danger" onClick={props.onHide}>Close</Button>


                    </div>
                </Form>
            </Modal.Body>

        </Modal>


    )
}


export default Body;