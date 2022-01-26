import React, { useState } from "react";
import Comments from "./Comments";
import styled from "styled-components";
import { Container, Card, Button, Row, Col, ListGroup, ButtonGroup } from "react-bootstrap";
import CommentBox from "./CommentBox";

function CatCards({ cat }) {
   

    const [isLiked, setIsLiked] = useState(false)
    const { image, title, description, comments } = cat
    
    const commentArea = comments.map(commentList => 
        
        (
            <Comments 
                key={commentList.id} 
                commentList={commentList}
            /> 
        )
    )

    function handleComment() {

    }
    

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
                            <hr/>
                            <Card.Text>Comments:</Card.Text>
                            
                            <ListGroup >
                                {commentArea}
                            </ListGroup>
                            <hr/>
                            <ButtonGroup className="me-2">
                                <Button 
                                    variant="dark"
                                    onClick={<CommentBox cat={cat}/>}
                                >💬</Button>
                            </ButtonGroup>  
                            <ButtonGroup className="me-2"> 
                                <Button variant="dark" onClick={() => setIsLiked(!isLiked)} >
                                    { isLiked ? "❤️" : "🤍" } 
                                </Button>
                            </ButtonGroup> 

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