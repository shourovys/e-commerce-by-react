import React from 'react';
import Navbar from './components/NavBar/NavBar.js';
import './App.css';
import Shop from './components/Shop/Shop';
import { Switch, Route } from "react-router-dom";
import Order from './components/Order/Order.js';
import ProductInfo from './components/ProductInfo/ProductInfo.js';
import Authentication from './components/Authentication/Authentication.js';
import Notification from './components/Notification/Notification.js';
import { PrivateRoute } from './components/Authentication/AuthFunctions'
import ProceedCheckout from './components/ProceedCheckout/ProceedCheckout.js';



function App() {
  return (
    <div className="App">

      <Navbar />
      <Notification />
      <Switch>
        {/* <Route exact path='/login'>
          <Authentication />
        </Route> */}
        <Route path='/home'>
          <Shop />
        </Route>
        <Route path='/order'>
          <Order />
        </Route>
        <Route path='/login'>
          <Authentication />
        </Route>
        <Route exact path='/'>
          <Shop />
        </Route>
        <Route path='/product/:key'>
          <ProductInfo />
        </Route>
        <PrivateRoute path='/proceedCheckout'>
          <ProceedCheckout />
        </PrivateRoute >
      </Switch>
    </div>
  );
}

export default App;

