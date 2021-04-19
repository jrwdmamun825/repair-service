import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddAdmin from './Components/Admin/AddAdmin/AddAdmin';
import ManageServices from './Components/Admin/ManageService/ManageServices';

import AddService from './Components/DashBoard/AddService/AddService';
import DashBoard from './Components/DashBoard/DashBoard/DashBoard';
import Order from './Components/DashBoard/Order/Order/Order';
import OrderList from './Components/DashBoard/Order/OrderList/OrderList';
import Review from './Components/DashBoard/Review/Review';
import YourOrder from './Components/DashBoard/YourOrder/YourOrder';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';

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
          <PrivateRoute path="/dashBoard">
            <DashBoard></DashBoard>
          </PrivateRoute>
          <Route path="/booking">
            <YourOrder></YourOrder>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <PrivateRoute path="/order/:_id">
            <Order></Order>
          </PrivateRoute>
          <Route path="/orderList">
            <OrderList></OrderList>
          </Route>
          <Route path="/makeAdmin">
            <AddAdmin></AddAdmin>
          </Route>
          <Route path="/manageService">
            <ManageServices></ManageServices>
          </Route>
          

        </Switch>
      </Router>
    </UserContext.Provider>


  );
};

export default App;
