import React from 'react';
import {List} from "./List/index";

import {seniorEngineer, engineer, aboutProject, tasks} from "../../static/data/experience/sberTech";

export function SberTech() {
    return (
        <div>
            <p>
                <span className='label_big'>Jan 2019 - Jan 2020 (12 months) -> Senior engineer</span>
            </p>
            <div className='label'>I have done this:</div>
            <List data={seniorEngineer}/>

            <p>
                <span className='label_big'>June 2018 - Jan 2019 (6 months) -> Engineer</span>
            </p>
            <div className='label'>I have done this:</div>
            <List data={engineer}/>

            <p>
                <span className='label'>About the project:</span>
            </p>
            <List data={aboutProject}/>

            <p>
                <span className='label'>My tasks:</span>
            </p>
            <List data={tasks}/>
        </div>
    )
}