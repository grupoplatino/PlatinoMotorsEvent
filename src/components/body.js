import React from 'react';
import Container from 'react-bootstrap/Container';


const Body = () => {
    return (
        <Container>
            <Figure>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="holder.js/171x180"
                />
                <Figure.Caption>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                </Figure.Caption>
            </Figure>
        </Container>
    );

};

export default Body;