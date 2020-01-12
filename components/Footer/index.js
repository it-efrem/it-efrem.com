'use strict';

import React, {useState} from 'react';
import moment from 'moment'
import './style.scss'

import {contacts} from "../../static/data/contacts";

export default function Footer() {
    const [contactsIsVisible, setContactsIsVisible] = useState(false);

    return (
        <footer>
            <div>
                <div className='label'>My location:</div>
                <ul>
                    <li>
                        <i className="fas fa-globe-americas"/>
                        <span>Earth (third planet)
                            &nbsp;
                            <i className="fas fa-long-arrow-alt-left"></i>
                            &nbsp;
                            I'm here</span>
                    </li>
                    <li>
                        <i className="far fa-sun"/>
                        <span>Solar System</span>
                    </li>
                    <li>
                        <i className="fab fa-empire"/>
                        <span>Orion Arm</span>
                    </li>
                    <li>
                        <i className="fab fa-galactic-republic"/>
                        <span>Milky Way</span>
                    </li>
                    <li>
                        <i className="fab fa-galactic-senate"/>
                        <span>Virgo Supercluster</span>
                    </li>
                    <li>
                        <i className="fas fa-infinity"/>
                        <span>Universe</span>
                    </li>
                </ul>
            </div>
            <div className='copyright'>
                <div className='copyright_email'>
                    <mark>📧</mark>
                    &nbsp;
                    {
                        !contactsIsVisible ?
                            <span className='link' onClick={() => setContactsIsVisible(true)}>
                                click to email
                            </span>
                            :
                            <span>
                                <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
                            </span>
                    }
                </div>
                <div>
                    <p>
                        <span>See this site in</span>
                        &nbsp;
                        <a href='https://github.com/Evgeny-Bukovski/it-efrem.com' target="_blank">GitHub repository</a>
                    </p>
                    <p>Used React.js + Next.js, SCSS</p>
                    <p>Dev by Eugene &copy; 2014 - {moment(Date.now()).format('YYYY')}</p>
                </div>
            </div>
        </footer>
    )
}