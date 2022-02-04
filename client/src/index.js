import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import App from "./App";
import {ContextProvider} from "./context/Context"

ReactDOM.render(
    <ContextProvider>
    <App />
    </ContextProvider>, 
    document.getElementById("root"));