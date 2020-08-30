'use strict';

import React, {useState} from 'react';

export function ReactFunctionVsClass() {
    return (
        <>
            <FunctionalComponent/>
            <ClassComponent/>
        </>
    )
}

const newState = {b: 2};

function FunctionalComponent() {
    const [state, setState] = useState({a: 1});

    // Displays a 'FunctionalComponent' 3 times
    // state used in DOM
    console.log('FunctionalComponent', state);

    return (
        <div>
            <button onClick={() => setState(newState)}>Function Click</button>
            <span>{JSON.stringify(state)}</span>
        </div>
    )
}

class ClassComponent extends React.Component {
    state = {a: 1};

    render() {
        // Displays a 'ClassComponent' infinity times
        // state NOT used in DOM
        console.log('ClassComponent', this.state);

        return (
            <div>
                <button onClick={() => this.setState(newState)}>Class Click</button>
            </div>
        )
    }
}