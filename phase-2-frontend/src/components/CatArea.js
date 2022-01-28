

import { Container } from "react-bootstrap";

import CatCards from "./CatCards";

// ,handleComment

function CatArea({ cats, handleLikedCat,handleDeleteCat  }) {


    const catList = [...cats].reverse().map(cat => (
      <CatCards 
        key ={cat.id} 
        cat={cat} 
        handleLikedCat={handleLikedCat}
        handleDeleteCat={handleDeleteCat}
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