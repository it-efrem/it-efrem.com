import React from 'react';
import {List} from "./index";

const iHaveDone = [
    'Moved existing functionality from GWT to React.js'
];
const tasks = [
    'Develop Java REST Services for React UI, examples:',
    [
        '(Create, Read) In one transaction, extract / write the necessary data from different tables using View & Join in SQL procedures',
        'Helper\'s development in Kotlin for validating data, which was also used on the UI'
    ],
    'Support the GWT-application and fixing bugs'
];
const aboutProject = [
    'Bank system that automates the process of issuing a loan: applying / reviewing / transferring funds',
    'Stack: Java 8, Spring Framework (Boot, MVC, Data), Hibernate',
];

export function MKB() {
    return (
        <div>
            <hr/>
            <p>
                <span className='label'>I have done this:</span>
            </p>
            <List data={iHaveDone}/>

            <hr/>
            <p>
                <span className='label'>My tasks:</span>
            </p>
            <List data={tasks}/>

            <hr/>
            <p>
                <span className='label'>About the project:</span>
            </p>
            <List data={aboutProject}/>
        </div>
    )
}