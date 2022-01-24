import React, { useState, useEffect } from "react";
import CatCards from "./CatCards";
import FormPage from "./FormPage";
import { Container } from "react-bootstrap";



function GameArea() {

    const [cats, setCats] = useState([]);
    const [fetchRequest, setFetchRequest] = useState(false);

    useEffect(() => {
        fetchCats();
    }, [fetchRequest]);

    function fetchCats() {
        fetch("http://localhost:3000/cats")
          .then(resp => resp.json())
          .then(cats => setCats(cats));
    }

    function handleAddCat(newCat) {
        fetch("http://localhost:3000/cats", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCat)
        })
        .then(setFetchRequest(!fetchRequest))
    }

    const gameList = cats.map(game => (
      <CatCards key ={game.id} game={game} />  
    ))

    return (
        <>
         <FormPage cats={cats} handleAddCat={handleAddCat} />
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