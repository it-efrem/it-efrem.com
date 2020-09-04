import ReactDOM from "react-dom";
import React from "react";

ReactDOM.render(
    <React.StrictMode>
        <div>
            Docker deploy is work!
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

// ++ ToDo: Config docker
// ++ ToDo: up on VPS
// ++ ToDo: config to deploy
// ++ ToDo: config DNS
// ToDo: add git tag after master push
// ToDo: how right run rebuild in error case?
// ToDo: run production build in containers

// ToDo: config NGINX
//        api.it-efrem.com   -   2999
//            it-efrem.com   -   3000
//  storybook.it-efrem.com   -   3001

// ToDo: Server protected review
// ToDo: Save scripts to file