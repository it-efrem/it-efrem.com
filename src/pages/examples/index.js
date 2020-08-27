'use strict';

import React, {useState} from 'react';
import {exampleList} from "./data";

export default function ExamplesPage() {
    const [value, setValue] = useState(1);

    return (
        <article>
            <h1 onClick={() => setValue(value + 1)}>
                <mark>💎</mark>
                <span>Examples {value}</span>
            </h1>
            <ul>
                {
                    exampleList.map(ExampleItem)
                }
            </ul>
        </article>
    )
}

function ExampleItem({description, Component}, idx) {
    return (
        <li key={idx}>
            <div>
                <Component/>
            </div>
            <div>
                {description}
            </div>
        </li>
    )
}