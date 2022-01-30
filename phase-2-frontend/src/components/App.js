import { Route, Switch, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './App.css';

import CatArea from './CatArea';
import Header from './Header';
import Edit from './Edit';
import FormPage from './FormPage';
import Home from './Home';




function App() {

    const [cats, setCats] = useState([]);
    const [fetchRequest, setFetchRequest] = useState(false);
    // const [loggedIn, isLoggedIn] = useState(false)

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
        fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCat)
        })
        .then(setFetchRequest(!fetchRequest));
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

    // function handleComment(newComment, cat) {
    //     console.log("newComment!!!!: ", newComment);
    //     fetch(`http://localhost:3000/cats/${cat.id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(newComment)
    //     })
    //     .then(setFetchRequest(!fetchRequest))
    // }

//    function handleLogIn() {
//        isLoggedIn(!loggedIn)
//    }

    return (
        <div  className='App'>
            <Header />
           {/* {loggedIn ?  : null } */}
            <Switch>

                

                <Route  path="/cats">
                    <CatArea 
                        cats={cats} 
                        handleLikedCat={handleLikedCat}
                        handleDeleteCat={handleDeleteCat}
                        // handleComment={handleComment}
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

                {/* setLogIn={handleLogIn} */}
                
                <Route path="*">
                    <h1>404 not found</h1>
                </Route>

            </Switch>    
        </div>
    );

}

export default App;