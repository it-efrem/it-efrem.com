'use strict';

import React from 'react';
import {List} from "../List/index";
import CSS from '../../../style.scss';

import {leadEngineer, seniorEngineer, engineer, aboutProject, tasks} from "./data";

export function Index() {
    return (
        <div>
            <p>
                <span className={CSS.shadow_block_text_label_big}>
                    Nov 2019 - Jan 2020 (3 months) -> Lead engineer
                </span>
            </p>
            <div className={CSS.shadow_block_text_label}>I have done this:</div>
            <List data={leadEngineer}/>

            <p>
                <span className={CSS.shadow_block_text_label_big}>
                    Jan 2019 - Nov 2019 (10 months) -> Senior engineer
                </span>
            </p>
            <div className={CSS.shadow_block_text_label}>I have done this:</div>
            <List data={seniorEngineer}/>

            <p>
                <span className={CSS.shadow_block_text_label_big}>
                    June 2018 - Jan 2019 (6 months) -> Engineer
                </span>
            </p>
            <div className={CSS.shadow_block_text_label}>I have done this:</div>
            <List data={engineer}/>

            <p>
                <span className={CSS.shadow_block_text_label}>About the project:</span>
            </p>
            <List data={aboutProject}/>

            <p>
                <span className={CSS.shadow_block_text_label}>My tasks:</span>
            </p>
            <List data={tasks}/>
        </div>
    )
}