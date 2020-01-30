'use strict';

import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {NavLink} from '../../components/NavLink/index';
import classNames from 'classnames';
import CSS from './style.scss'

import {menuItems} from "../../common/data/menuItems";
import {detectScroll} from "../../hooks/detectScroll/index";

export default function Header() {
    const isScroll = detectScroll();

    return (
        <header className={classNames({
            [CSS.header_scroll]: isScroll
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