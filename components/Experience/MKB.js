import React from 'react';
import {List} from "./List/index";

import {iHaveDone, tasks, aboutProject} from "../../static/data/experience/mkb";

export function MKB() {
    return (
        <div>
            <p>
                <span className='label'>I have done this:</span>
            </p>
            <List data={iHaveDone}/>

            <p>
                <span className='label'>My tasks:</span>
            </p>
            <List data={tasks}/>

            <p>
                <span className='label'>About the project:</span>
            </p>
            <List data={aboutProject}/>
        </div>
    )
}