import React, { useRef, useState } from 'react';
import { send } from 'emailjs-com';
import { Button, Container, Row, Col, Image, Modal, Form } from 'react-bootstrap'; // Stack,
import sany from '../assets/sany-logo.png'
import logo from '../assets/logo-pm.png'
import Maps from '../common/google_maps'


// "homepage": "https://grupoplatino.github.io/PlatinoMotorsEvent/",

const Body = () => {
    const [show, setShow] = useState(false);
    const [showErrModal, setShowErrModal] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseErrModal = () => setShowErrModal(false);
    const handleShowErrModal = () => setShowErrModal(true);

    const [toSend, setToSend] = useState({
        from_name: '',
        from_email: '',
        from_phone: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_ltp2k3h',
            'template_qfzl4n1',
            // 'template_1dghlio',
            toSend,
            'user_rIgkpBy74HbPtpBcf5maa'
        )
            .then((response) => {
                setShow(false);
                handleShowErrModal();
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    return (
        <Container fluid id='card-invite' className='p-0'>

            <Modal
                show={showErrModal}
                onHide={handleCloseErrModal}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Image fluid
                        style={{
                            with: '100%',
                            height: '60px',
                        }}
                        src={logo} />
                </Modal.Header>
                <Modal.Body >
                    <h5>Confirmación enviada correctamente.</h5>
                    <p>Felicidades, tu confirmación de asistencia se ha enviado correctamente.</p>
                    <div style={{
                        width: '100%',
                        height: '320px',
                    }}>
                        <h4>Ubicación del Evento</h4>
                        <Maps />
                    </div>
                    <div className="d-flex flex-row-reverse">
                        <Button style={{ marginRight: 10 }} variant="outline-danger" onClick={handleCloseErrModal}>Cerrar</Button>
                    </div>

                </Modal.Body>
            </Modal>

            <Modal
                show={show}
                onHide={handleClose}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Image fluid
                        style={{
                            with: '100%',
                            height: '60px',
                        }}
                        src={logo} />
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={onSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Nombre*</Form.Label>
                            <Form.Control name='from_name' required type="text" placeholder="Nombre: Ex. Juan Perez"
                                onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo Electrónico*</Form.Label>
                            <Form.Control name='from_email' autoComplete='none' required type='email' placeholder="Email: Ex. juanperez@email.com"
                                onChange={handleChange} />
                            <Form.Text className="text-muted">
                                Nosotros nunca compartiremos tu correo con nadie más.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Teléfono*</Form.Label>
                            <Form.Control name='from_phone' required type="number" placeholder="Telefono: xxxxxxxx"
                                onChange={handleChange} />
                        </Form.Group>

                        <div className="d-flex flex-row-reverse">
                            <Button type='summit' variant="danger">Confirmar Asistencia</Button>
                            <Button style={{ marginRight: 10 }} variant="outline-danger" onClick={handleClose}>Cerrar</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            <Container fluid className='bg-opacity px-0 pt-4'>
                <Container fluid>
                    <Row className='align-items-center'>
                        <Col xs="12" sm="12" md="12" lg="7" >
                            <div className="card text-center bg-transparent border-0">
                                <div className='card-body'>
                                    <div className='card-title head-one'
                                        style={{ fontfamily: "Josefin Sans Bungee Inline" }}>
                                        Nos Complace Invitarle
                                    </div>
                                    <div className='card-text'>
                                        <h4>
                                            a la exposición de maquinaria pesada
                                        </h4>
                                        <div className='mt-4'>
                                            <img width={300} className='img-fluid' src={sany}></img>
                                        </div>
                                        <br />
                                        <h1>Jueves 26 de Mayo</h1>
                                        <h2>Hora: 4:00 pm en adelante</h2>
                                        <hr className='hr-style'></hr>
                                        <h1>Lugar:</h1>
                                        <h2>Anillo <b>periférico</b></h2>
                                        <p
                                            style={{
                                                fontSize: '25px',
                                                fontWeight: 'normal',
                                            }}
                                        >
                                            Zona la Cañada, <br />
                                            frente a Distribuidora Itsmania.
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <Button variant="outline-danger" onClick={handleShow}
                                        className="w-50" style={{ background: "#F72F26" }}>
                                        <h5 className='text-white'>Confirmar</h5>
                                    </Button>
                                </div>
                            </div >
                        </Col>
                        <Col className='mt-5 mt-sm-5 mt-md-5 mt-lg-0' xs="12" sm="12" md="12" lg="5">
                            <Image src='https://grupoplatino.blob.core.windows.net/develop/excavadora2.png'
                                className='img-fluid shadow-4' alt='Sany' />
                        </Col>
                    </Row>
                </Container >
            </Container>
        </Container>
    );
};


export default Body;