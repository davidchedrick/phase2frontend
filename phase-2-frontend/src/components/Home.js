import { Link } from 'react-router-dom';
import  logo  from '../logo/tywater.png';
import styled from "styled-components";

function Home({ setLogIn }) {

    return(
        <>
        <LogoDiv >
        <LogoImg src={ logo }  alt="BodiCat"/> 
        
        </LogoDiv>
        <Link to="/cats"><button onClick={() => setLogIn()}>Welcome</button></Link>
        </>
    );

}

const LogoDiv = styled.div`
   
  
   border: 2px solid;
   border-radius: 360px;
   box-shadow: 5px 3px 30px rgba(0, 0, 0, 0.75), -5px -3px 30px rgba(0, 0, 0, 0.75);
   background-color: #F3F3F3
   
`
const LogoImg = styled.img`
   
  
   border: 2px solid;
   border-radius: 360px;
   box-shadow: 5px 3px 30px rgba(0, 0, 0, 0.75), -5px -3px 30px rgba(0, 0, 0, 0.75);
   background-color: #F3F3F3
   
`

export default Home