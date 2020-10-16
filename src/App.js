import React, {useState, useEffect} from "react";
import { Route, Link, Switch } from "react-router-dom";

// import Components
import Home from './components/Home'
import OrderForm from './components/OrderForm'



const App = () => {
  
  
  
  
  
  
  
  
  
  
  return (
    <div>
      <Switch>
        
        <Route path='/pizza'>
            <OrderForm/>
        </Route>

        <Route path='/'>
            <Home/>
        </Route>

      </Switch>
    </div>
  );
};
export default App;
