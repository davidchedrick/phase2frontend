import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './App.css';

import CatArea from './CatArea';
import Header from './Header';
import Settings from './Settings';
import FormPage from './FormPage';
import Home from './Home';



function App() {

    const [cats, setCats] = useState([]);
    const [fetchRequest, setFetchRequest] = useState(false);
    const [loggedIn, isLoggedIn] = useState(false)

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
        .then(setFetchRequest(!fetchRequest));
    }

   function handleLogIn() {
       isLoggedIn(!loggedIn)
   }

    return (
        <div  className='App'>
           {loggedIn ? <Header /> : null }
            <Switch>

                

                <Route  path="/cats">
                    <CatArea cats={cats} />
                </Route>

                <Route path="/add">
                    <FormPage   cats={cats} handleAddCat={handleAddCat} />
                </Route>

                <Route path="/settings">
                    <Settings   />
                </Route> 

                <Route exact path="/">
                    <Home setLogIn={handleLogIn}/>
                </Route>

                
                
                <Route path="*">
                    <h1>404 not found</h1>
                </Route>

            </Switch>    
        </div>
    );

}

export default App;