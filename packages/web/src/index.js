import ReactDOM from "react-dom";
import React from "react";
import {App} from "./components/App";
import "./styles/reset.css";
import "./styles/fonts.scss";

ReactDOM.render(
    <React.StrictMode>
        <p>
            Site is being developed...
        </p>
        <p>
            Write to telegram:
            <a href="https://t.me/it_efrem" target="_blank">@it_efrem</a>
        </p>
    </React.StrictMode>,
    document.getElementById('root')
);

// ReactDOM.render(
//     <React.StrictMode>
//         <App/>
//     </React.StrictMode>,
//     document.getElementById('root')
// );