'use strict';

import React, {useState, useEffect, useRef} from 'react'
import ReactDOM from 'react-dom';
import classNames from 'classnames'
import './style.scss';

export function Modal({children, closeModal}) {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        if (process.browser) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keyup', keyEscape);

            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
                document.removeEventListener('keyup', keyEscape);
            }
        }
    }, []);

    if (process.browser) {
        return ReactDOM.createPortal(
            <div className={classNames(
                'Modal',
                {'Modal_hidden': !isVisible}
            )}>
                <div ref={containerRef}
                     className='Modal_container'>
                    {children}
                </div>
            </div>,
            document.getElementById('__next')
        );
    } else {
        return null
    }

    function close() {
        setTimeout(closeModal, 300);
        setIsVisible(false);
    }

    function handleClickOutside(e) {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
            close()
        }
    }

    function keyEscape(e) {
        if (e.key === 'Escape') {
            close()
        }
    }
}