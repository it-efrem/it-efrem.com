import ReactDOM from "react-dom";
import React from "react";
import {Test} from "@it-efrem/storybook/test";

ReactDOM.render(
    <React.StrictMode>
        <div>
            Dicker deploy is work!
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

// ++ ToDo: Config docker
// ++ ToDo: up on VPS
// ++ ToDo: config to deploy
// ToDo: config DNS
// ToDo: how right run rebuild in error case?