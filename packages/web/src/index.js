import ReactDOM from "react-dom";
import React from "react";
import {App} from "./components/App";
import "./styles/reset.css";
import "./styles/fonts.scss";

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);