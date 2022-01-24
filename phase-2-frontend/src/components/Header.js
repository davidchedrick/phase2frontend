import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

function Header() {

    return(
        <HeaderDiv>
            <Navbar expand="md">
                <Navbar.Brand href="/">BodhiCat's Cutie Cats</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end">
                        <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
        </HeaderDiv>
    );

}

const HeaderDiv = styled.div`
   
   height: 100px;
   border: 2px solid;
   box-shadow: 5px 3px 30px rgba(0, 0, 0, 0.75), -5px -3px 30px rgba(0, 0, 0, 0.75);
   padding: 10px;
   margin: 10px; 

    .navbar-brand, .navbar-nav .nav-link {
        color: #111;


        &:hover {
            color: white;
        }
    
`
export default Header;