import React, { useState } from "react";
import Comments from "./Comments";
import styled from "styled-components";
import { Container, Card, Button, Row, Col, ListGroup, ButtonGroup } from "react-bootstrap";
import CommentBox from "./CommentBox";

import { Link } from "react-router-dom";

function CatCards({ cat, handleLikedCat, handleComment }) {
   

    
    const [isClicked, setIsClicked] = useState(false);
    const { image, name, description, comments, id } = cat;
    
    
    const commentArea = comments.map(commentList => 
        
        (
            <Comments 
                key={commentList.id} 
                commentList={commentList}
            /> 
        )
    )

   function handleClicked() {
       setIsClicked(!isClicked)
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
                            <Card.Text>Comments:</Card.Text>
                            
                            <ListGroup >
                                {commentArea}
                            </ListGroup>
                            <hr/>
                              
                            <ButtonGroup className="me-2">
                                <Button 
                                    variant="dark"
                                    onClick={() => handleClicked()}
                                >💬</Button>
                                
                            </ButtonGroup>  
                            <ButtonGroup className="me-2"> 
                                <Button variant="dark" onClick={() => handleLikedCat(cat) } >
                                    { cat.favorite ? "❤️" : "🤍" } 
                                </Button>
                            </ButtonGroup> 
                            {isClicked ? <><hr/> 
                                <CommentBox 
                                    handleComment={handleComment} 
                                    cat={cat}
                                /></> : null}
                            
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