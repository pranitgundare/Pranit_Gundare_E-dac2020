import React from 'react';
import Register from "./Register";
import Login from "./Login";
import Feedback from "./Feedback";
import {BrowserRouter as Router,Route} from "react-router-dom";
import './Board.css';
import './App.css';
import UserComponent from './components/UserComponent';
import LoginComponent from './components/LoginComponent';
function App() {
  return (
    <Router>

      <Route exact path="/loginusers">
         <Login/> 
      </Route>


      {/* <Route path="/Register">
          <Register/>
      </Route> */}
      <Route path="/users" component = {UserComponent}>
          {/* <Register/> */}
      </Route>
      <Route path="/" component = {LoginComponent}>
          {/* <Register/> */}
      </Route>
      <Route path="/feedback">
       <Feedback />
      </Route>
    </Router>
  );
}

export default App;
