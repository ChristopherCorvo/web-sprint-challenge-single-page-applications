import React from 'react'

const OrderConfirmation = (props) => {
    const {values} = props
    console.log(values)
    console.log(values.name)
    console.log(values.toppings)
    
    
    return values.map(order => {

        return (
    
            <div>
                <h4>Name: {order.name}</h4>
                <h4>Size {order.size}</h4>
                <div> Toppings:
                    <li>{order.pepperoni ? 'pepperoni' : ''}</li>
                </div>
            </div>
        )

    })
    
}

export default OrderConfirmation
