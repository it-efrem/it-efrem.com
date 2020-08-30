'use strict';

import React from 'react';
import {List} from "../Experience/List";
import CSS_global from '../../style.scss';

import {name1} from "./data";

export function AboutMe() {
    return (
        <div className={CSS_global.shadow_block}>
            <div className={CSS_global.shadow_block_text}>
                <div className={CSS_global.shadow_block_text_label}>My life rules:</div>
                <List data={name1}/>
                {/*<List data={name2}/>*/}
            </div>
        </div>
    )
}
