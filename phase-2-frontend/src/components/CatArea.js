

import { Container } from "react-bootstrap";

import CatCards from "./CatCards";



function GameArea({ cats }) {


    const catList = [...cats].reverse().map(cat => (
      <CatCards key ={cat.id} cat={cat} />  
    ))

    return (
        <>
        
        <Container>
            
            
            <Container>
                
                {catList}
            
            </Container>
        </Container>
        
        </>
    );

}


 
export default GameArea;