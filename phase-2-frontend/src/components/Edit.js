import { useParams } from "react-router-dom";
import { useState } from "react";
import useCat from "../hooks/useCat.js";

import styled from "styled-components";
import { Container, Card, Button, Row, Col, ButtonGroup } from "react-bootstrap";

import Loading from "./Loading.js";
import Editer from "./Editer.js";

function Edit({handleDeleteCat, handleUpdateCat}) {
    
    const id = useParams().id;
    const {cat, isLoaded} = useCat(id);
    const [isEdit, setIsEdit] = useState(false);
   
    if (!isLoaded) return <h2><Loading /></h2>;

    function handleUpdate(updatedCatCard, cat) {
        handleUpdateCat(updatedCatCard, cat)
        setIsEdit(isEdit => !isEdit)
    }

    return (
        
        <Container>
            {isEdit ? <Editer cat={cat} handleUpdate={handleUpdate} /> : null}
                
            <Row className="justify-content-md-center" >
                <Col xs="auto">
                    <Div>
                    <Card style={{ width: '18rem'}}>
                        <Card.Img variant="top" src={cat.image} alt={cat.name} />
                        
                        <Card.Body className="mt-1">
                            <Card.Title onClick={() =>  setIsEdit(isEdit => !isEdit)}>{cat.name}</Card.Title>
                            
                            <Card.Text >
                                {cat.description}    
                                <span className="ms-4 " onClick={() =>  setIsEdit(isEdit => !isEdit)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                                        <path fillRule="evenodd" d="M17.263 2.177a1.75 1.75 0 012.474 0l2.586 2.586a1.75 1.75 0 010 2.474L19.53 10.03l-.012.013L8.69 20.378a1.75 1.75 0 01-.699.409l-5.523 1.68a.75.75 0 01-.935-.935l1.673-5.5a1.75 1.75 0 01.466-.756L14.476 4.963l2.787-2.786zm-2.275 4.371l-10.28 9.813a.25.25 0 00-.067.108l-1.264 4.154 4.177-1.271a.25.25 0 00.1-.059l10.273-9.806-2.94-2.939zM19 8.44l2.263-2.262a.25.25 0 000-.354l-2.586-2.586a.25.25 0 00-.354 0L16.061 5.5 19 8.44z"></path>
                                    </svg>
                                </span>  
                            </Card.Text>
                            <hr/>
                            <Card.Text>Comments:</Card.Text>
                            
                            <hr/>
                              
                            <ButtonGroup className="me-2">
                                <Button 
                                    variant="dark"
                                   
                                >💬</Button>
                                
                            </ButtonGroup>  
                            <ButtonGroup className="me-2"> 
                                <Button variant="dark"  >
                                    { cat.favorite ? "❤️" : "🤍" } 
                                </Button>
                            </ButtonGroup> 
                           <hr/> 
                               
                        </Card.Body>
                    </Card>
                    </Div>
                </Col>
                <Row>
                    <Button onClick={() => handleDeleteCat(cat)} type="button" className="btn btn-danger mt-4 mb-5"  >
                        DELETE
                    </Button>
                </Row>
            </Row>
        </Container>
        
    );
}

const Div = styled.div`
    margin: 20px;
    border-radius: 15px;
    box-shadow: 5px 3px 50px rgba(0, 0, 0, 0.75), -5px -3px 50px rgba(0, 0, 0, 0.75);
`
export default Edit;