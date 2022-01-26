

import { Container } from "react-bootstrap";

import CatCards from "./CatCards";



function CatArea({ cats, handleComment }) {


    const catList = [...cats].reverse().map(cat => (
      <CatCards 
        key ={cat.id} 
        cat={cat} 
        handleComment={handleComment}
      />  
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


 
export default CatArea;