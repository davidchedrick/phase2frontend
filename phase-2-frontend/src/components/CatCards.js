import React from "react";
import styled from "styled-components";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

function GameCards({ game }) {

    const { image, title, description } = game
    console.log("game: ", game);

    return (
        
        <Container>
            <Row className="justify-content-md-center" >
                <Col xs="auto">
                    <Div>
                    <Card style={{ width: '18rem'}}>
                        <Card.Img variant="top" src={image} alt={title} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{description}</Card.Text>
                            {/* <Button>
                                ★
                            </Button> */}
                            <Button variant="dark" >
                                ☆
                            </Button>
                        </Card.Body>
                    </Card>
                    </Div>
                </Col>
            </Row>
        </Container>
        
    );

}

const Div = styled.div`
  margin: 20px;
  
  border-radius: 15px;
  box-shadow: 5px 3px 50px rgba(0, 0, 0, 0.75), -5px -3px 50px rgba(0, 0, 0, 0.75);

`


export default GameCards