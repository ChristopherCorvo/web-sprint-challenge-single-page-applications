import React from 'react'
import { Route, Link, Switch } from "react-router-dom";

const Home = (props) => {
    
    
    return (
        <div>
            <Link to= {'/pizza'}>
                <div  className="order-button">Order</div>
            </Link>

            <h1>Home Page</h1>


        </div>
    )
}

export default Home
