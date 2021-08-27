import React from 'react';
import ReactDOM from 'react-dom';
import {App} from "./components/App/App";
import {StyleGlobalReset} from "./styles/StyleGlobalReset";
import {StyleFonts} from "./styles/StyleFonts";

ReactDOM.render(
    <React.StrictMode>
        <StyleGlobalReset/>
        <StyleFonts/>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
