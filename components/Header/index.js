'use strict';

import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {NavLink} from '../Link/index';
import classNames from 'classnames';
import './style.scss'
import {menuItems} from "../../static/data/menuItems";
import {detectScroll} from "../../hooks/detectScroll";

export default function Header() {
    const isScroll = detectScroll();

    return (
        <header className={classNames({
            'header_scroll': isScroll
        })}>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>
                            <a>
                                <span>About me</span>
                                &nbsp;
                                <mark>👉</mark>
                            </a>
                        </Link>
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
            <NavLink {...item}/>
        </li>
    );
}