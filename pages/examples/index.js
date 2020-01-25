'use strict';

import React from 'react';
import ReactFunctionVsClass from "./ReactFunctionVsClass";

export default function ExamplesPage() {
    return (
        <article>
            <h1>Examples</h1>

            <div>
                <div>
                    <ReactFunctionVsClass/>
                </div>
                <div>
                    Dedicated to all those who do not want to rewrite their code on functional components
                </div>
            </div>
        </article>
    )
}