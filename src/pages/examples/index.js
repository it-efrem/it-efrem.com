'use strict';

import React from 'react';
import {exampleList} from "./data";

export default function ExamplesPage() {
    return (
        <article>
            <h1>
                <mark>💎</mark>
                <span>Examples</span>
            </h1>
            <ul>
                {
                    exampleList.map(ExampleItem)
                }
            </ul>
        </article>
    )
}

function ExampleItem({description, component}, idx) {
    return (
        <li key={idx}>
            <div>
                {component()}
            </div>
            <div>
                {description}
            </div>
        </li>
    )
}