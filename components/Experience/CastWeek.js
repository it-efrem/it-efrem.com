'use strict';

import React from 'react';
import {List} from "./List/index";
import CSS from '../../pages/style.scss';

const iHaveDone = [
    'top secret',
];
const tasks = [
    'top secret',
];
const aboutProject = [
    'top secret',
];

export function CastWeek() {
    return (
        <div>
            <p>
                <hr/>
                <div className={CSS.shadow_block_text_label}>I have done this:</div>
            </p>
            <List data={iHaveDone}/>

            <p>
                <hr/>
                <div className={CSS.shadow_block_text_label}>My tasks:</div>
            </p>
            <List data={tasks}/>

            <p>
                <hr/>
                <div className={CSS.shadow_block_text_label}>About the project:</div>
            </p>
            <List data={aboutProject}/>
        </div>
    )
}