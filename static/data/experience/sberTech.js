'use strict';

export const leadEngineer = [
    'Changed interaction with Redux:',
    [
        'Minimized nesting in reducers',
        'Conducted a code review for errors (for example: data mutability) and fixed',
        'Refactored the components themselves to work only with the necessary props, which avoided re-rendering',
        'In some components, I refused redux in favor of using useState / useReducer',
        'Started introducing Immutable.js for Redux',
    ],
    'Conducted refactoring of React components (cleaned the code again), which also had a positive effect on the speed of work:',
    [
        'Removed methods and objects from the render function and from the component itself (if necessary) in helpers',
        'Used React.Lazy for pages and dynamic components',
        'Fixed comments from React.StrictMode and \'use strict\'',
    ]
];

export const seniorEngineer = [
    'Rewrote the application from React 15 to React 16.10 (hooks):',
    [
        'Functional style components',
        'To improve performance participating in render methods are done "calculated" using useMemo + useCallback',
        'Made logic reusable with custom hooks',
    ],
    'I covered part of the components with Jest - tests',
    'Started introducing typing with Flow -> flow.org',
    'Redesigned SPA application architecture in accordance with SOLID principles and healthy logic',
    [
        'Simplified the system of modal windows by creating a hook and using portals. Before that, work was done through Redux, which complicated the work with windows'
    ]
];
export const engineer = [
    'More clearly divided components into StateLess / StateFull and logic using HOC, minimized copy-paste',
    'Correctly divided the data between state & store (atomic design)',
    'Stylized UI in Material Design style',
    'Fixed a lot of bugs',
    'Connected and configured ESLint in the project',
    'Examples of developed components:',
    [
        'UI stubs while waiting for component data loading',
        'Catching and error processing through ErrorBoundary with the output of the backup UI',
        'Input fields with an aesthetically pleasing visualization of data validity',
        'Table -> Display big data (1,000,000 rows) without using React-Window + Expanding substrings + Sorting and filtering data',
        'Real-time log viewer',
        'Wizard for difficult forms',
        'etc...',
    ],
];
export const aboutProject = [
    'The system for administering data replication of the entire bank to backup server clusters',
];
export const tasks = [
    'Develop an interface that solves the tasks of monitoring and managing replication servers',
    'Active communication with users (administrators, "followers"), understanding of their needs and work processes',
    'Development of new components using: React, Redux, Less, and refactoring existing ones',
    'Conducting Code Review',
];