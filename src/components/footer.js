
import { Col, Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';


const Footer = () => {
    // const facebook = <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
    // const instagram = <FontAwesomeIcon icon="fa-brands fa-instagram" />
    // const globe = <FontAwesomeIcon icon="fa-solid fa-globe" />
    return (
        <Container fluid
            style={{
                alignItems: 'center',
            }}
        >
            <hr
                style={{
                    flex: 1,
                    height: '10px',
                    opacity: 1,
                    borderRadius: '25px',
                    background: '#F72F26',
                    borderColor: '#F72F26',
                }}
            ></hr>
            <br />


            <Row className="justify-content-center"
                style={{ spaceBetween: '10px', fontfamily: 'Poppins' }}
            >
                <Col xs md="auto"><a href="" ></a></Col>
                <Col xs md="auto">
                    <h5
                        style={{
                            letterSpacing: '10px',
                            fontWeight: 'bold',
                        }}
                    >www.platino.hn </h5>
                </Col>
                <Col xs md="auto">|</Col>
                <Col xs md="auto"><a href="" ></a></Col>
                <Col xs md="auto">|</Col>
                <Col xs md="auto"><a href="" ></a></Col>
                <Col xs md="auto">|</Col>

            </Row>
        </Container >
    );

};

export default Footer;