import React, {useEffect, useState} from 'react';

export function detectScroll() {
    const [windowScroll, setWindowScroll] = useState(false);

    useEffect(() => {
        if (process.browser) {
            _detectScroll();
            document.addEventListener('scroll', _detectScroll);
        }
        return () => document.removeEventListener('scroll', _detectScroll);
    }, []);

    function _detectScroll() {
        if (window.pageYOffset > 0) {
            setWindowScroll(true);
        }
        if (window.pageYOffset === 0) {
            setWindowScroll(false);
        }
    }

    return windowScroll;
}