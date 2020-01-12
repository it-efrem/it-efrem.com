'use strict';

import React from 'react';
import './style.scss';

export default function PageContent({children}) {
    return (
        <React.StrictMode>
            <section className='PageContent'>
                {children}
            </section>
        </React.StrictMode>
    )
}