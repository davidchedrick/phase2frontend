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
import Loading from './Loading';

function App() {

    const [cats, setCats] = useState([]);
    const [fetchRequest, setFetchRequest] = useState(false);
    const [logIn] = useContext(LogInContext);
    const [isLoaded, setIsLoaded] = useState(false);

    const history = useHistory();

    const BASE_URL = "http://localhost:3000/cats";

    useEffect(() => {
        fetchCats();
    }, [fetchRequest]);

    function fetchCats() {
        fetch(BASE_URL)
          .then(resp => resp.json())
          .then(cats => {
              setCats(cats)
              setIsLoaded(true)
              setFetchRequest(false)
            });
    }

    function handleAddCat(newCat) {
        fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCat)
        })
        .then(setFetchRequest(fetchRequest => !fetchRequest));
        history.push("/cats");
    }

    function handleLikedCat(cat) {
        fetch(BASE_URL + `/${cat.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"favorite": !cat.favorite})
        })
        .then(setFetchRequest(fetchRequest => !fetchRequest))
    }

    function handleDeleteCat(cat) {
        fetch(BASE_URL + `/${cat.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(setFetchRequest(fetchRequest => !fetchRequest))
        history.push("/cats");
    }

    function handleComment(newComment, cat) {
        fetch(BASE_URL + `/${cat.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newComment)
        })
        .then(setFetchRequest(fetchRequest => !fetchRequest))
    }

    function handleUpdateCat(updatedCatCard, cat) {
        console.log("cat id update: ", cat);
        console.log("updatedCatCard in app: ", updatedCatCard);
        fetch(BASE_URL + `/${cat.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedCatCard)
        })
        .then(setFetchRequest(fetchRequest => !fetchRequest))
        history.push("/cats");
    }

    if(!logIn){
        return(
            <div  className='App'>
               <Home />
            </div>
        )
    }

    if (!isLoaded) return <h2><Loading /></h2>;

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
                        <Edit 
                            handleDeleteCat={handleDeleteCat} 
                            handleUpdateCat={handleUpdateCat}
                        />
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