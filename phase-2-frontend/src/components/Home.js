import { useContext, useState } from 'react';
import { UserContext, LogInContext } from '../context/user';
import { useHistory } from 'react-router-dom';

import  logo  from '../logo/tywater.png';
import styled from "styled-components";


function Home() {
    const [formData, setFormData] = useState("")
    const [user, setUser] = useContext(UserContext);
    const [logIn, setLogIn] = useContext(LogInContext);
    const history = useHistory();

    function handleChange(e) {
        let targetValue = e.target.value;
        setFormData(targetValue);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setUser(formData)
        setLogIn(true)
        history.push('/cats')
    }

    return(
        
        <LogoDiv>
            <div className=" m-5 ">
                <LogoTitle className="display-4 justify-content-center m-4 cat-font">
                    BodhiCat's Cutie Cats
                </LogoTitle>
                
                <LogoImg src={ logo }  alt="BodiCat" className=' m-4'/> 
                
                <div className="input-group m-4 justify-content-center">
                    <form onSubmit={handleSubmit}>
                        
                        <input type="text"  placeholder="Username" name="username" onChange={handleChange} className='shadow-box' />
                        <input type="submit" ></input>
                    </form>
                </div>
            </div>
        </LogoDiv>
        
    );

}

const LogoDiv = styled.div`
   margin-top: 4em;
   border: 2px solid;
   box-shadow: 5px 3px 30px rgba(0, 0, 0, 0.75), -5px -3px 30px rgba(0, 0, 0, 0.75);
   background-color: #F3F3F3
`

const LogoTitle = styled.h1`
   border-radius: 360px;
   box-shadow: 5px 3px 30px rgba(0, 0, 0, 0.75), -5px -3px 30px rgba(0, 0, 0, 0.75);
`

const LogoImg = styled.img`
   width: 20rem;
   height: 20rem;
   border: 2px solid;
   border-radius: 360px;
   box-shadow: 5px 3px 40px rgba(0, 0, 0, 0.75), -5px -3px 40px rgba(0, 0, 0, 0.75);
   background-color: #F3F3F3
`

export default Home