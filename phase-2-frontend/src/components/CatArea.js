

import { Container } from "react-bootstrap";

import CatCards from "./CatCards";

// ,handleComment

function CatArea({ cats, handleLikedCat  }) {


    const catList = [...cats].reverse().map(cat => (
      <CatCards 
        key ={cat.id} 
        cat={cat} 
        handleLikedCat={handleLikedCat}
        // handleComment={handleComment}
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