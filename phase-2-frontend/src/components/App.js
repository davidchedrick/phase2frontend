import { Route, Switch, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { LogInContext } from '../context/user';
import './App.css';

import CatArea from './CatArea';
import Header from './Header';
import Edit from './Edit';
import FormPage from './FormPage';
import Home from './Home';






function App() {

    const [cats, setCats] = useState([]);
    const [fetchRequest, setFetchRequest] = useState(false);
    const [logIn, setLogIn] = useContext(LogInContext);
    

    const BASE_URL = "http://localhost:3000/cats"

    const history = useHistory();

    useEffect(() => {
        fetchCats();
    }, [fetchRequest]);

    function fetchCats() {
        fetch(BASE_URL)
          .then(resp => resp.json())
          .then(cats => setCats(cats));
    }

    function handleAddCat(newCat) {
        console.log("newCat on app: ", newCat);
        fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCat)
        })
        .then(setFetchRequest(!fetchRequest));
        history.push("/cats")
    }

    function handleLikedCat(cat) {
        fetch(BASE_URL + `/${cat.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"favorite": !cat.favorite})
        })
        .then(setFetchRequest(!fetchRequest))

    }

    function handleDeleteCat(cat) {
        fetch(BASE_URL + `/${cat.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(setFetchRequest(!fetchRequest))
        history.push("/cats")
    }

    function handleComment(newComment, cat) {
        fetch(`http://localhost:3000/cats/${cat.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({comments: newComment})
        })
        .then(setFetchRequest(!fetchRequest))
    }



    if(!logIn){
        return(
                <div  className='App'>
               <Home />
                </div>
        )
    }

    return (
        <div  className='App'>
            
                <Header />
                <Switch>

                    

                    <Route  path="/cats">
                        <CatArea 
                            cats={cats} 
                            handleLikedCat={handleLikedCat}
                            handleDeleteCat={handleDeleteCat}
                            handleComment={handleComment}
                        />
                    </Route>

                    <Route path="/edit/:id">
                        <Edit  handleDeleteCat={handleDeleteCat}  />
                    </Route> 

                    <Route path="/add">
                        <FormPage   
                            cats={cats} 
                            handleAddCat={handleAddCat} 
                        />
                    </Route>

                    

                    <Route exact path="/">
                        <Home />
                    </Route>

            
                    
                    <Route path="*">
                        <h1>404 not found</h1>
                    </Route>

                </Switch>    
            
        </div>
    );

}

export default App;