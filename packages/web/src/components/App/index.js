import React from "react";
import {MenuMobile} from "../Menu/Mobile";
import {MenuDesktop} from "../Menu/Desktop";

export const App = () => {
    return (
        <div>
            <MenuMobile/>
            <MenuDesktop/>
        </div>
    )
}
