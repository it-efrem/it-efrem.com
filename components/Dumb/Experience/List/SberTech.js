import React from 'react';
import {List} from "./index";

const seniorEngineer = [
    'Rewrote the app from React 15 to React 16.10 (hooks)',
    [
        'See my universal hook library <a href="https://github.com/Evgeny-Bukovski/ReactHooksLibrary" target="_blank">here</a>',
        'Functional style of components',
        'To improve performance participating in render methods are done "calculated" using useMemo + useCallback',
        'Made logic reusable with custom hooks',
    ],
    'Introduced use Immutable.js into Redux store',
    'Introduced use Jest in React components',
    'Introduced use Flow for strong typing',
    'Redesigned the SPA application architecture',
    'Examples of developed components:',
    [
        'Table -> Big data display (1,000,000 rows) no lags using React-Window + Expandable substrings + Sorting data by columns on click',
        'Wizard for complex forms',
    ],
];
const engineer = [
    'I move out part of the components in Dumb and more clearly divided the logic using HOC, minimized copy-paste',
    'I designed properly shared of data between state & store (atomic design)',
    'Stylized UI in Material Design Style',
    'Fixed a lot of bugs',
    'Connected and configured ESLint in the project',
    'Examples of developed components:',
    [
        'UI Stubs while waiting for component data to load',
        'Catching and error handling through ErrorBoundary with the output of the backup interface',
        'Input fields with an aesthetically pleasing display of data validity',
        'Made the modal window system global (via Redux), before that, it was just imported in the right place use <Modal .../>',
    ],
];
const aboutProject = [
    'The system for administering data replication of the entire bank to backup server clusters'
];
const tasks = [
    'Developed an interface that solves the tasks of monitoring and managing replication servers',
    'Active communication with users (administrators), understanding of their needs and work processes',
    'Development of new components using: React, Redux, Less, and refactoring existing ones',
    'Conducting Code Review',
];

export function SberTech() {
    return (
        <div>
            <hr/>
            <p>
                <span>Jan 2019 - Jan 2020 (12 months) -> Senior engineer</span>
            </p>
            <div className='label'>I have done this:</div>
            <List data={seniorEngineer}/>

            <hr/>
            <p>
                <span>June 2018 - Jan 2019 (6 months) -> Engineer</span>
            </p>
            <div className='label'>I have done this:</div>
            <List data={engineer}/>

            <hr/>
            <p>
                <span className='label'>About the project:</span>
            </p>
            <List data={aboutProject}/>

            <hr/>
            <p>
                <span className='label'>My tasks:</span>
            </p>
            <List data={tasks}/>
        </div>
    )
}