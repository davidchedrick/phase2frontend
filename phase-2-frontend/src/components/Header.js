import  logo  from '../logo/tywater.png';
import { Link, NavLink } from 'react-router-dom';
import styled from "styled-components";
import { useContext } from 'react';
import { UserContext } from '../context/user';

function Header() {

    const user = useContext(UserContext);
    
    

    return(
        <>
        <UserDiv>
            Welcome, {user}
        </UserDiv>
        <HeaderDiv className='mb-4 h-25'>
             
            <nav className="navbar navbar-light ">
           
                <LogoImg src={logo} alt="BodiCat" className='m-1' />
                
                <Link to="/cats" className=" cat-font" > BodhiCat's Cutie Cats</Link>   
               
                <IconDiv>
                    <NavLink exact  to="/add">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill-rule="evenodd" d="M11.75 4.5a.75.75 0 01.75.75V11h5.75a.75.75 0 010 1.5H12.5v5.75a.75.75 0 01-1.5 0V12.5H5.25a.75.75 0 010-1.5H11V5.25a.75.75 0 01.75-.75z"></path></svg> 
                    </NavLink>
                    
                    <NavLink exact  to="/settings">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill-rule="evenodd" d="M14.53 15.59a8.25 8.25 0 111.06-1.06l5.69 5.69a.75.75 0 11-1.06 1.06l-5.69-5.69zM2.5 9.25a6.75 6.75 0 1111.74 4.547.746.746 0 00-.443.442A6.75 6.75 0 012.5 9.25z"></path></svg>
                    </NavLink>
                    
                    <NavLink exact  to="/" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill-rule="evenodd" d="M3 3.25c0-.966.784-1.75 1.75-1.75h5.5a.75.75 0 010 1.5h-5.5a.25.25 0 00-.25.25v17.5c0 .138.112.25.25.25h5.5a.75.75 0 010 1.5h-5.5A1.75 1.75 0 013 20.75V3.25zm16.006 9.5l-3.3 3.484a.75.75 0 001.088 1.032l4.5-4.75a.75.75 0 000-1.032l-4.5-4.75a.75.75 0 00-1.088 1.032l3.3 3.484H10.75a.75.75 0 000 1.5h8.256z"></path></svg>
                    </NavLink>
                </IconDiv>
            </nav>
           
        </HeaderDiv>
        </>
    );

}

const HeaderDiv = styled.div`
   
   height: 100px;
   border: 2px solid;
   border-radius: 3px;
   box-shadow: 5px 3px 30px rgba(0, 0, 0, 0.75), -5px -3px 30px rgba(0, 0, 0, 0.75);
   padding: 10px;
   margin: 10px; 
   background-color: #F3F3F3;
   a:hover {
    color: black;
   }
`
const LogoImg = styled.img`
   width: 80px;
   height: 80px;
   border-radius: 360px;

`
const IconDiv = styled.div`
   
   margin-right: 30px;
` 
const UserDiv = styled.div`
    display: flex;
    justify-content: right;
    margin-right: 30px;
    font-weight: bold;
`


export default Header;