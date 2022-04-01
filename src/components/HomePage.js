import React from "react";
import {Link} from 'react-router-dom'


const HomePage = (props) => {

    return (
        <div>
            <h1>Lambda Eats</h1>
            <Link to='/pizza'>
            <button id="order-pizza">Order Pizza</button>
            </Link>
        </div>
    )
}

export default HomePage;