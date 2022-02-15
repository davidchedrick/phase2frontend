import {useState, useEffect} from 'react';

function useCat(id){
    
    const [cat, setCat] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=>{
        fetch(`https://json-temp.herokuapp.com/cats/${id}`)
        .then(res => res.json())
        .then(cat => {
            setCat(cat);
            setIsLoaded(true);
        });
    },[]);

    return {cat, isLoaded}

};

export default useCat;