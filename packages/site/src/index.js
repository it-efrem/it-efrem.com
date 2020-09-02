import ReactDOM from "react-dom";
import React from "react";
import {Test} from "@it-efrem/storybook/test";

ReactDOM.render(
    <React.StrictMode>
        <div>
            <div>123123</div>
            <Test/>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

// ToDo: Config docker
// ToDo: up on VPS
// ToDo: config to deploy
// ToDo: config DNS