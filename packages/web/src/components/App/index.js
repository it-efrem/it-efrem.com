import React from "react";
import {MenuMobile} from "../Menu/Mobile";
import {MenuDesktop} from "../Menu/Desktop";
import {IndexPage} from "../../pages/index";

export const App = () => {
    return (
        <>
            {/*ToDo: Add Routing*/}
            <IndexPage/>

            <MenuMobile/>
            <MenuDesktop/>
        </>
    )
}
