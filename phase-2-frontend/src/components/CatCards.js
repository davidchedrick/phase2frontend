import React, { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { Container, Card, Button, Row, Col, ListGroup, ListGroupItem, ButtonGroup } from "react-bootstrap";

import CommentBox from "./CommentBox";


function CatCards({ cat, handleLikedCat, handleComment }) {
    
    const [isClicked, setIsClicked] = useState(false);
    const { image, name, description, comments } = cat;

   function handleClicked() {
       setIsClicked(isClicked => !isClicked)
   }
 
    return (
        
        <Container>
            <Row className="justify-content-md-center" >
                <Col xs="auto">
                    <Div>
                        <Card style={{ width: '18rem'}}>
                            <Card.Img variant="top" src={image} alt={name} />
                            <div className="btn d-flex justify-content-end">
                                <Link 
                                    className="pb-0"
                                    variant="lite"
                                    to={`/edit/${cat.id}`}
                                    ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                                </Link>
                            </div>
                            <Card.Body className="mt-1">
                                <Card.Title>{name}</Card.Title>
                                
                                <Card.Text>{description}</Card.Text>
                                <hr/>
                                <Card.Text>Comment:</Card.Text>
                                <Container>
                                    <ListGroup >
                                        <ListGroupItem className="d-flex justify-content-between align-items-start">
                                            {comments} 
                                        </ListGroupItem>
                                    </ListGroup>
                                </Container>
                                <hr/>
                                
                                <ButtonGroup className="me-2">
                                    <Button variant="dark" onClick={() => handleClicked()}>
                                        💬
                                    </Button>
                                </ButtonGroup>  
                                <ButtonGroup className="me-2"> 
                                    <Button variant="dark" onClick={() => handleLikedCat(cat) } >
                                        { cat.favorite ? "❤️" : "🤍" } 
                                    </Button>
                                </ButtonGroup> 

                                {isClicked ? <><hr/> 
                                    <CommentBox 
                                        setIsClicked={setIsClicked}
                                        handleComment={handleComment} 
                                        cat={cat}
                                    />
                                    </> : null
                                }
                                
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

export default CatCards