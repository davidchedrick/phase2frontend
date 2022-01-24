
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Container } from 'react-bootstrap';
import GameArea from './GameArea';
import Header from './Header';
import Contact from './Contact';


function App() {



    return (
        <Container fluid className='App'>
            <Header />
            <Switch>
                <Route exact path="/">
                    <GameArea  />
                </Route>
                <Route>
                    <Contact path="/contact" />
                </Route> 
                <Route path="*">
                    <h1>404 not found</h1>
                </Route>
            </Switch>    
        </Container>
    );

}

export default App;
