import React from 'react'
import { Route, Link, Switch } from "react-router-dom";


function OrderForm (props) {
    
    const { } = props

    const onChange = evt => {}

    const onSubmit = evt => {
        evt.preventDefault()
    }

    return (
        <div>
            <Link to= {'/'}>
                <div  className="home-button">Home</div>
            </Link>

            <h1> Order Form </h1>

            {/* ------------------------  orderform below --------------------- */}

            <div onSubmit={onSubmit} className='formContainer'>
                
                <form>
    
                    <div>
                        <h2>Build Your Own Pizza</h2>
                    </div>
    
                    <label> Choice of Size: 
                        <select
                            onChange={onChange}
                            value=''
                            name='Choice of Size'
                        >
                            <option value=''>---- select ----- </option>
                            <option value='Small'>Small</option>
                            <option value='Medium'>Medium</option>
                            <option value='Large'>Large</option>
                            <option value='X-Large'>X-Large</option>
                        </select>
                    </label>
    
                    <label> Choice of Sauce:
                        <input name='Original Red' type='radio'onChange={onChange}/> Original Red
                        <input name='Garlic Ranch' type='radio'onChange={onChange}/>Garlic Ranch
                        <input name='BBQ Sauce' type='radio'onChange={onChange}/>BBQ Sauce
                        <input name='Spinach Alfredo' type='radio'onChange={onChange}/>Spinach Alfredo
                    </label>
    
                    <label> Add Toppings:
                        
                        <input name='pepperoni' type='checkbox' checked='' onChange={onChange}/>pepperoni
                        <input name ='sausage'type= 'checkbox'checked=''onChange={onchange}/> sausage
                        <input name='bacon' type='checkbox'checked=''onChange={onChange}/>bacon
                        <input name='Onion' type='checkbox'checked=''onChange={onChange}/>Onion
                        <input name='Peppers' type='checkbox'checked=''onChange={onChange}/>Peppers
                        <input name='Diced Tomatoes' type='checkbox'checked=''onChange={onChange}/>Diced Tomatoes
    
                    </label>
    
                    <label> Choice of Substitute:
                        <input name='Gluten Free' type='checkbox'onChange={onChange}/>Gluten Free
                    </label>
    
                    <label> Special Instructions
                        <input name='' type='text'></input>
                    </label>
    
                    <button >Add to Order</button>
                </form>
            </div> 
            
        </div>
    )
}  

export default OrderForm