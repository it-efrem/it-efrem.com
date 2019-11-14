import React from 'react';
import {List} from "./index";

const iHaveDone = [
    'For 1.5 years I spent >200 lessons on Skype',
    'I recorded about 80\'s of his own video lectures -> https://www.youtube.com/c/code_robots',
    'They have been watched >550,000 times',
];
const tasks = [
    'Programming in JS, Java and C ++',
    'Fundamentals of Higher Mathematics',
    'Data structures',
    'Algorithms',
];
const aboutProject = [
    'I was developing the educational portal Code & Robots, whose goal was to bring together in one place newcomers and IT professionals'
];

export function Teacher() {
    return (
        <div>
            <p>
                <span className='label'>I have done this:</span>
            </p>
            <List data={iHaveDone}/>

            <p>
                <span className='label'>My task -> To help everyone in the development of topics:</span>
            </p>
            <List data={tasks}/>

            <p>
                <span className='label'>About the project:</span>
            </p>
            <List data={aboutProject}/>
        </div>
    )
}