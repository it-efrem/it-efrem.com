'use strict';

import React, {Component} from 'react';
import './style.scss';

export default function PageContent({children}) {
    return (
        <React.StrictMode>
            <ErrorBoundary>
                <section className='PageContent'>
                    {children}
                </section>
            </ErrorBoundary>
        </React.StrictMode>
    )
}

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    componentDidCatch(error, info) {
        //On enterprise - send stack to server
        console.error(error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Application crashed! :(</h1>;
        }

        return this.props.children;
    }
}