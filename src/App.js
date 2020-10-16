import Axios from "axios";
import React, {useState, useEffect} from "react";
import { Route, Link, Switch } from "react-router-dom";
import * as yup from 'yup'

// import Components
import Home from './components/Home'
import OrderForm from './components/OrderForm'
import orderFormSchema from "./validation/orderFormSchema";

//initial state values
const initialOrdersListData = [];


const initialOrderForm = {
 
  //dropdown
  size: '',

  //checkboxes for toppings
  pepperoni: false,
  bacon: false,
  onion: false,
  peppers: false,
  dicedTomatoes: false,

  // checkboxes for substitute
  glutenFree: false,

  // text input
  instructions: '',

}

const initialOrderFormErrors = {


}


const App = () => {
  
  // slices of State
  const [ordersList, setOrdersList] = useState(initialOrdersListData) // this will hold a list of orders i.e objects in an array
  const [orderForm, setOrderForm] = useState(initialOrderForm)  // individual order object
  
  const [formErrors, setFormErrors] = useState(initialOrderFormErrors) // object
  const [disabled, setDisabled] = useState()       // boolean
  
  const inputChange = (name, value) => {
    yup
      .reach(orderFormSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({...formErrors, [name]:''})
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })

      setOrderForm({
        ...orderForm, [name]: value
      })


  }
  
  const formSubmit = () => {
    const newOrder = {
      size: orderForm.size,
      pepperoni: orderForm.pepperoni,
      bacon: orderForm.bacon,
      onion: orderForm.onion,
      peppers: orderForm.peppers,
      dicedTomatoes: orderForm.dicedTomatoes,
      glutenFree: orderForm.glutenFree,
      instructions: orderForm.instructions,
    }

      postNewOrder(newOrder)
  }

  const postNewOrder = newOrder => {
    Axios.post('https://reqres.in/api/users', newOrder)
      .then( res => {
        setOrdersList(ordersList.concat(res.data))
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => 
        setOrderForm(initialOrderForm))
  }
  
  
  
  
  
  return (
    <div>
      <Switch>

        <Route path='/pizza'>
            <OrderForm
              values = {orderForm}
              change = {inputChange}
              submit = {formSubmit}
              disabled = {disabled}
              errors = {formErrors}
            
            />
        </Route>

        <Route path='/'>
            <Home/>
        </Route>

      </Switch>
    </div>
  );
};
export default App;
