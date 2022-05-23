
import { Col, Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import { FaFacebookF, FaInstagram, FaGlobe } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
    return (
        <Container fluid
            style={{
                alignItems: 'center',
            }}
        >
            <hr className="m-0"
                style={{
                    flex: 1,
                    height: '5px',
                    opacity: 1,
                    borderRadius: '25px',
                    background: '#F72F26',
                    borderColor: '#F72F26',
                }}
            ></hr>
            <Row className="justify-content-center mt-3"
                style={{
                    spaceBetween: '10px',
                    fontfamily: 'Poppins',
                }}>
                <Col md="auto" className="p-0 d-none d-md-block"><FaGlobe color="black" /></Col>
                <Col xs="12" md="auto">
                    <h5 className="text-sm-left"
                        style={{
                            letterSpacing: '10px',
                            fontWeight: 'bold',
                        }}
                    >www.platino.hn </h5>
                </Col>
                <Col xs="2" md="auto">|</Col>
                <Col xs="3" md="auto"><a href="https://www.facebook.com/platinomotors/" ><FaFacebookF color="black" /></a></Col>
                <Col xs="2" md="auto">|</Col>
                <Col xs="3" md="auto"><a href="https://instagram.com/platinomotors?igshid=YmMyMTA2M2Y=" ><FaInstagram color="black" /></a></Col>
                <Col xs="2" md="auto">|</Col>
            </Row>
        </Container >
    );

};

export default Footer;