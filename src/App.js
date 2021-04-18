import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddService from './Components/DashBoard/AddService/AddService';
import Book from './Components/DashBoard/Book/Book';
import DashBoard from './Components/DashBoard/DashBoard/DashBoard';
import Order from './Components/DashBoard/Order/Order';
import Review from './Components/DashBoard/Review/Review';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';

export const UserContext = createContext();

const App = () => {
  const [loggedInuser, setLoggedInuser] = useState({});
  return (

    <UserContext.Provider value={[loggedInuser, setLoggedInuser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>

          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/dashBoard">
            <DashBoard></DashBoard>
          </Route>
          <Route path="/book">
            <Book></Book>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/order">
              <Order></Order>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>


  );
};

export default App;
