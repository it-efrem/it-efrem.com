import React from 'react';
import {List} from "./List/index";

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
                <div className='label'>I have done this:</div>
            </p>
            <List data={iHaveDone}/>

            <p>
                <hr/>
                <div className='label'>My tasks:</div>
            </p>
            <List data={tasks}/>

            <p>
                <hr/>
                <div className='label'>About the project:</div>
            </p>
            <List data={aboutProject}/>
        </div>
    )
}