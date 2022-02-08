import React, { useState } from "react";
import { Container, Card, Button, Row, Col, ButtonGroup } from "react-bootstrap";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

function FormPage({ cats, handleAddCat }) {

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        image: "",
    })

    function handleFormData(e) {
        let targetName = e.target.name;
        let targetValue = e.target.value;

        setFormData({
            ...formData, [targetName]: targetValue
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        let id = uuid();

        const newCat ={
            
            ...formData,
            favorite: false,
            comments: [],
            id,
        }
        
        handleAddCat(newCat);

        setFormData({
            name: "",
            description: "",
            image: "",
        });

    }

    return(
        <div className="pb-5 " >
            <h1 className="m-4">New Cat!</h1>
            <form className="m-5" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Name" 
                    name="name"
                    className="input"
                    onChange={handleFormData}
                    value={formData.name}
                />
                <input 
                    type="text" 
                    placeholder="Description" 
                    name="description"
                    className="input"
                    onChange={handleFormData}
                    value={formData.description}
                />
                <input 
                    type="text" 
                    placeholder="Image" 
                    name="image"
                    className="input"
                    onChange={handleFormData}
                    value={formData.image}
                />
                

                <input 
                    type="submit" 
                    value="Submit"
                    className="input"
                />
            </form>
           
            <Container className="p-4">        
                <Row className="justify-content-md-center" >
                    <Col xs="auto">
                        <Div>
                        <Card style={{ width: '18rem'}}>
                            <Card.Img variant="top" src={formData.image} alt={formData.name}/>
                            
                            <Card.Body className="mt-1">
                                <Card.Title>{formData.name}</Card.Title>
                                
                                <Card.Text>{formData.description}</Card.Text>
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
                                        🤍
                                    </Button>
                                </ButtonGroup> 
                            <hr/> 
                                
                            </Card.Body>
                        </Card>
                        </Div>
                    </Col>
                </Row>
            </Container>
        </div>  
    )
}

const Div = styled.div`
    margin: 20px;
    border-radius: 15px;
    box-shadow: 5px 3px 50px rgba(0, 0, 0, 0.75), -5px -3px 50px rgba(0, 0, 0, 0.75);
`

export default FormPage; 