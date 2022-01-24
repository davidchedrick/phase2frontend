import React, { useState, useEffect } from "react";
import GameCards from "./GameCards";
import FormPage from "./FormPage";
import { Container } from "react-bootstrap";



function GameArea() {

    const [cats, setCats] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/cats")
          .then(resp => resp.json())
          .then(cats => setCats(cats));
    }, []);

    const gameList = cats.map(game => (
      <GameCards key ={game.id} game={game} />  
    ))

    return (
        <>
         <FormPage />
        <Container>
            
            <h1>cat games</h1>
            
            <Container>
                
                {gameList}
            
            </Container>
        </Container>
        
        </>
    );

}


 
export default GameArea;