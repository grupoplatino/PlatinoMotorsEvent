
import { Col, Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import { FaFacebookF, FaInstagram, FaGlobe } from "react-icons/fa";


const Footer = () => {
    return (
        <Container fluid xs="12" sm="12" md="6"
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
                    marginTop: '1em',
                    background: '#F72F26',
                    borderColor: '#F72F26',
                }}
            ></hr>
            <br />


            <Row className="justify-content-center"
                style={{
                    spaceBetween: '10px',
                    fontfamily: 'Poppins',
                    marginBottom: '20px',
                }}
            >
                <Col xs md="auto"><FaGlobe color="black" /></Col>
                <Col xs md="auto">
                    <h5
                        style={{
                            letterSpacing: '10px',
                            fontWeight: 'bold',
                        }}
                    >www.platino.hn </h5>
                </Col>
                <Col xs md="auto">|</Col>
                <Col xs md="auto"><a href="https://www.facebook.com/platinomotors/" ><FaFacebookF color="black" /></a></Col>
                <Col xs md="auto">|</Col>
                <Col xs md="auto"><a href="https://instagram.com/platinomotors?igshid=YmMyMTA2M2Y=" ><FaInstagram color="black" /></a></Col>
                <Col xs md="auto">|</Col>

            </Row>
        </Container >
    );

};

export default Footer;