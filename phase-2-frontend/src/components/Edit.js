import { useParams } from "react-router-dom";
import useCat from "../hooks/useCat.js";
import styled from "styled-components";
import { Container, Card, Button, Row, Col, ButtonGroup } from "react-bootstrap";
import FormPage from "./FormPage.js";
import Loading from "./Loading.js";


function Edit({handleDeleteCat}) {
    
    const id = useParams().id
    const {cat, isLoaded} = useCat(id)

    if (!isLoaded) return <h2><Loading /></h2>;

    return (
        
        <Container>
                <Row className="m-3">
                    <FormPage />
                </Row>
            <Row className="justify-content-md-center" >
                <Col xs="auto">
                    <Div>
                    <Card style={{ width: '18rem'}}>
                        <Card.Img variant="top" src={cat.image} alt={cat.title} />
                        
                        <Card.Body className="mt-1">
                            <Card.Title>{cat.title}</Card.Title>
                            
                            <Card.Text>{cat.description}</Card.Text>
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