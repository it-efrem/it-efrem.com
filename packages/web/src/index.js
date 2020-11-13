import ReactDOM from "react-dom";
import React from "react";
import "./styles/reset.css";
import "./styles/fonts.scss";
import {App} from "./components/App";
import {Cursor} from "./components/Cursor";

ReactDOM.render(
  <React.StrictMode>
    <App/>
    <Cursor/>
  </React.StrictMode>,
  document.getElementById('root')
);