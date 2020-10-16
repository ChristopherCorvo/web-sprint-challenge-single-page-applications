import React from 'react'
import { Route, Link, Switch } from "react-router-dom";

import styled from 'styled-components'



function OrderForm (props) {
    
    const {change,values,submit,disabled,errors } = props

    const onChange = evt => {

        const {name, value, checked, type} = evt.target
        console.log(name)
        console.log(value)
        console.log(checked)
        console.log(type)
        
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    const onSubmit = evt => {
        console.log(evt.target)
        evt.preventDefault()
        submit()
    }

    return (
        <div>
            <Link to= {'/'}>
                <div  className="home-button">Home</div>
            </Link>

            <h1> Order Form </h1>

            {/* ------------------------  orderform below --------------------- */}

            <div className='formContainer'>
                
                <form onSubmit={onSubmit}>
    
                    <div>
                        <h2>Build Your Own Pizza</h2>
                    </div>

                    <div>
                        <label> Full Name:
                            <input
                                name='name'
                                type='text'
                                value={values.name}
                                onChange={onChange}
                                />
                        </label>
                    </div>
    
                    <label> Choice of Size: 
                        <select
                            onChange={onChange}
                            value={values.size}
                            name='size'
                        >
                            <option value=''>---- select ----- </option>
                            <option value='Small'>Small</option>
                            <option value='Medium'>Medium</option>
                            <option value='Large'>Large</option>
                            <option value='X-Large'>X-Large</option>
                        </select>
                    </label>
    
                    <div className='Add-Toppings'> 

                        <h4>Add Toppings:</h4>
                        
                        <label> pepperoni
                            <input 
                                type='checkbox' 
                                name='pepperoni' 
                                checked={values.pepperoni} 
                                onChange={onChange}
                            />
                        </label>  

                        <label>bacon
                            <input 
                                name='bacon' 
                                type='checkbox'
                                checked={values.bacon}
                                onChange={onChange}
                            />
                        </label>

                        <label>onion
                            <input 
                                name='onion' 
                                type='checkbox'
                                checked={values.onion}
                                onChange={onChange}
                            />
                        </label>

                        <label>peppers
                            <input 
                                name='peppers' 
                                type='checkbox'
                                checked={values.peppers}
                                onChange={onChange}
                            />
                        </label>

                        <label>diced tomatoes
                            <input 
                                name='dicedTomatoes' 
                                type='checkbox' 
                                checked={values.dicedTomatoes} 
                                onChange={onChange}
                            />
                        </label>
    
                    </div> 
                    {/* closing div for Add-Toppings Section  */}
                    
                    <div className='gluten-free'>
                        <label> Choice of Substitute:
                            <label>Gluten Free
                                <input 
                                    name='glutenFree' 
                                    type='checkbox' 
                                    checked={values.glutenFree}
                                    onChange={onChange}
                                />
                            </label>
                        </label>
                    </div>
                    
                    <div>
                        <label> Special Instructions
                            <input 
                                name='instructions' 
                                type='text'
                                value={values.instructions}
                                onChange={onChange}
                            />
                        </label>
                    </div>
                    
                    
                    
                        <button>Add to Order</button>
                    
                    
                    
                </form>
            </div> 
            
        </div>
    )
}  

export default OrderForm