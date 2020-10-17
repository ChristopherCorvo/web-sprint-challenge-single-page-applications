import React from 'react'
import { Route, Link, Switch } from "react-router-dom";
import styled from 'styled-components'

const Home = (props) => {
    
    const HomePageWrapper = styled.div`
        display:flex;
        flex-direction:column;
        

        nav{
            display:flex;
            align-items: center;
            height: 7vh;
            padding-left: 2%;
            
        }

        .main{
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 40vh;
            background-color: mistyrose;
            align-items: center;

            h2{
                font-size: 3rem;
            }

            .orderButton{
                font-size: 1rem;
                padding-left: 20%;
                padding-right: 20%;
                border-radius: 10px;
                background-color: lightcoral;
            }

            .homeButton{
                font-size: 2rem;
                padding-left: 20%;
                padding-right: 20%;
                border-radius: 10px;
                padding-top: 25%;
            }

        }   
    `
    
    return (
        <div>
            <HomePageWrapper>
                <nav>
                    <Link to= {'/'}>
                        <button className='homeButton'>Lambda Eats</button>
                    </Link>
                </nav>

                <div className='main'>
                    <h2> Your favorite food, delivered while coding</h2>

                    <Link to= {'/pizza'}>
                        <button className='orderButton'>Order Now</button>
                    </Link>

                </div>

                <div> 
                    
                    <p></p>

                </div>
            </HomePageWrapper>
        </div>
    )
}

export default Home
