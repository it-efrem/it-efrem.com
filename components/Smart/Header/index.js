import React, {useEffect, useState} from 'react';
import {Link} from '../../Dumb/Link/index';
import classNames from 'classnames'
import './style.scss'

export default function Header() {
    const [headerScroll, setHeaderScroll] = useState(false);

    useEffect(() => {
        detectScroll();
        document.addEventListener('scroll', detectScroll);
        return () => document.removeEventListener('scroll', detectScroll);
    }, []);

    function detectScroll() {
        if (window.pageYOffset > 0) {
            setHeaderScroll(true);
        }
        if (window.pageYOffset === 0) {
            setHeaderScroll(false);
        }
    }

    return (
        <header className={classNames({
            'header_scroll': headerScroll
        })}>
            <nav>
                <ul>
                    <li>
                        <span>About me</span>
                        &nbsp;
                        <mark>☞</mark>
                    </li>
                    {menuItems.map(mapMenu)}
                </ul>
            </nav>
        </header>
    )
}

function mapMenu(item) {
    return (
        <li key={item.label}>
            <Link {...item}/>
        </li>
    );
}

//ToDo: Move from here
const menuItems = [
    {
        icon: 'fas fa-vial',
        label: 'Experience',
        path: '/'
    },
    {
        icon: 'fab fa-github-alt',
        label: 'GitHub',
        link: 'https://github.com/Evgeny-Bukovski'
    },
    // {
    //     icon: 'fab fa-medium',
    //     label: 'Medium',
    //     path: '/articles?tags=medium'
    // },
    // {
    //     icon: 'fab fa-npm',
    //     label: 'NPM',
    //     path: '/articles?tags=npm'
    // },
    {
        icon: 'fab fa-stack-overflow',
        label: 'StackOverflow',
        link: 'https://stackoverflow.com/users/8963706/it-efrem'
    },
    // {
    //     icon: 'fas fa-hospital-symbol',
    //     label: 'Habr',
    //     path: '/articles?tags=habr'
    // },
    {
        icon: 'fas fa-hospital-symbol',
        label: 'Habr',
        path: 'https://habr.com/ru/users/it-efrem/posts/'
    },
    {
        icon: 'fas fa-graduation-cap',
        label: 'Certifications',
        path: '/certifications'
    },
    {
        icon: 'fas fa-heart',
        label: 'Useful links',
        path: '/useful_for_developers'
    },
];