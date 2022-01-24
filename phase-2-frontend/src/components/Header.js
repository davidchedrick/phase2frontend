
import { Link, NavLink } from 'react-router-dom';
import styled from "styled-components";

function Header() {

    return(
        <HeaderDiv>
            <h1>
              <Link to="/cats">BodhiCat's Cutie Cats</Link>   
              
            </h1>
            
            <nav>
                <NavLink exact  to="/add">
                    Add
                </NavLink>
                /
                <NavLink exact  to="/settings">
                    Settings
                </NavLink>
                /
                <NavLink exact  to="/">
                    Log Out
                </NavLink>
            </nav>
        </HeaderDiv>
    );

}

const HeaderDiv = styled.div`
   
   height: 100px;
   border: 2px solid;
   border-radius: 3px;
   box-shadow: 5px 3px 30px rgba(0, 0, 0, 0.75), -5px -3px 30px rgba(0, 0, 0, 0.75);
   padding: 10px;
   margin: 10px; 
   background-color: #F3F3F3
   
  

  
    
`
export default Header;