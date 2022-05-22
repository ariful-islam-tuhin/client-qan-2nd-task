
import { Route, Switch } from "react-router";
import { BrowserRouter } from 'react-router-dom';
import './App.css';


import Header from './components/Header/Header';
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Register from "./components/Register/Register";

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/login">
              <Login></Login>
            </Route>           
            <Route exact path="/register">
              <Register></Register>
            </Route>          
                  
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>         
          </Switch>
        </BrowserRouter>      
    </div>
  );
}

export default App;
