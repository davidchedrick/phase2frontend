import React, { useState } from "react";
import Comments from "./Comments";
import styled from "styled-components";
import { Container, Card, Button, Row, Col, ListGroup, ButtonGroup } from "react-bootstrap";
import CommentBox from "./CommentBox";

function CatCards({ cat, handleLikedCat }) {
//    , handleComment

    // const [isLiked, setIsLiked] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const { image, title, description, comments, id } = cat;
    
    // const commentArea = comments.map(commentList => 
        
    //     (
    //         <Comments 
    //             key={commentList.id} 
    //             commentList={commentList}
    //         /> 
    //     )
    // )

   function handleClicked() {
       setIsClicked(!isClicked)
   }

//    function handleLikedClick(cat) {
//         setIsLiked(!isLiked)
//         handleLikedCat(cat)
//     }

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
                                {/* {commentArea} */}
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
                                    // handleComment={handleComment} 
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