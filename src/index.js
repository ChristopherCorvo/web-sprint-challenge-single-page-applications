import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// this allows me to route to differen pages without reloading
import { BrowserRouter as Router } from 'react-router-dom';

import App from "./App";



ReactDOM.render(
    // by enclosing <App> in <Router></Router> I am saying to manage routing internally
    <Router>
        <App />
    </Router>

,document.getElementById("root")

);
