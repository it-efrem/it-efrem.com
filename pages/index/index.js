'use strict';

import React, {useState} from 'react';
import Head from 'next/head';
import moment from 'moment';
import {getLastCommit} from "../../hooks/api/github/getLastCommit";
import {workDuration} from "../../helpers/duration";
import {AboutMe} from "../../components/AboutMe";
import {contacts} from "../../static/data/contacts";
import './style.scss'

import {SberTech} from "../../components/Experience/SberTech";
import {MKB} from "../../components/Experience/MKB";
import {Teacher} from "../../components/Experience/Teacher";

export default function IndexPage() {
    const [contactsIsVisible, setContactsIsVisible] = useState(false);
    const lastCommit = getLastCommit();

    return (
        <>
            <Head>
                <title>Eugene Efremov - My Experience | it-efrem.com</title>
            </Head>
            <div className='IndexPage'>
                <div className="main_container">
                    <div className="main_layout">
                        <div>
                            <div className="myPhoto"/>
                            <div className="myContacts">
                                {
                                    !contactsIsVisible ?
                                        <div className='clickContacts'>
                                            <div className='btn' onClick={() => setContactsIsVisible(true)}>
                                                <i className="far fa-envelope"/>
                                                &nbsp;
                                                <span>Click to email</span>
                                            </div>
                                        </div>
                                        :
                                        <div className='myContacts_data'>
                                            <div className='myContacts_row'>
                                                <i className="far fa-envelope"/>
                                                &nbsp;
                                                <span>
                                                    <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
                                                </span>
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                        <div className='main_layout_right'>
                            <span className="mySpeciality">
                                <mark>⚛</mark>
                                React Developer
                            </span>
                            <span className="myName">
                                <mark>🔥</mark>
                                Eugene Efremov
                            </span>
                        </div>
                    </div>
                </div>
                <article>
                    <div className="IndexPage_container">
                        <div className='IndexPage_block'>
                            <h2>
                                <mark>⚡</mark>
                                <span>Experience {getWorkExperience()}</span>
                            </h2>
                            <div className='lastUpdateDate'>
                                <i className="fas fa-magic"/>
                                &nbsp;
                                <span title="Auto update">Last update from the GitHub — {lastCommit}</span>
                            </div>
                            <div className='experience'>
                                <ul>
                                    {experience.map(mapExperience)}
                                </ul>
                            </div>
                        </div>
                        <div className='IndexPage_block'>
                            <h2>
                                <mark>🔨</mark>
                                <span>Skills</span>
                            </h2>
                            <div className='skills'>
                                <ul>
                                    {skills.map(mapSkills)}
                                </ul>
                            </div>
                        </div>
                        <div className='IndexPage_block'>
                            <h2>
                                <mark>👽</mark>
                                <span>About me</span>
                            </h2>
                            <AboutMe/>
                        </div>
                    </div>
                </article>
            </div>
        </>
    )
}

function getWorkExperience() {
    const workDurationInt = experience.reduce((acc, item) => {
        const duration = item.date_to - item.date_from;
        return duration + acc;
    }, 0);

    return moment(workDurationInt)
        .subtract({years: 1970})
        .format('Y [years] M [month]')
}

function mapSkills(label, idx) {
    return <li key={idx}>{label}</li>
}

function mapExperience(item, idx) {
    return (
        <li key={idx}>
            <div className='experience_item shadow-block'>
                <div className='experience_item_dates'>
                    <div className='experience_item_datePeriod'>
                        <span>{moment(item.date_from).format('MMM YYYY')}</span>
                        <span>&nbsp;—&nbsp;</span>
                        <span>{moment(item.date_to).format('MMM YYYY')}</span>
                    </div>
                    <div className='experience_item_workDuration'>
                        <span>{workDuration({...item})}</span>
                    </div>
                </div>
                <div>
                    <div className='experience_item_company'>
                        <div>{item.company.name}</div>
                        <div>
                            <a href={item.company.site_link} target='_blank'>{item.company.site_name}</a>
                        </div>
                    </div>
                    <div className='shadow-block_text'>
                        {item.component}
                    </div>
                </div>
            </div>
        </li>
    )
}

const experience = [
    {
        date_from: +moment('05.2018', 'MM.YYYY').format('x'),
        date_to: Date.now(),
        position: 'Senior Frontend Developer, UI/UX Designer',
        company: {
            name: 'Sberbank - Technologies',
            site_name: ' sber-tech.com',
            site_link: ' http://sber-tech.com/',
        },
        component: <SberTech/>,
    },
    // {
    //     date_from: +moment('04.2018', 'MM.YYYY').format('x'),
    //     date_to: Date.now(),
    //     position: 'Team Leader, Head of UX/UI',
    //     company: {
    //         name: 'CastWeek, StartUp (Remote)',
    //         site_name: 'castweek.com',
    //         site_link: ' http://castweek.com/',
    //     },
    //     component: <CastWeek/>,
    // },
    {
        date_from: +moment('01.2018', 'MM.YYYY').format('x'),
        date_to: +moment('05.2018', 'MM.YYYY').format('x'),
        position: 'Backend Developer (Java)',
        company: {
            name: 'Credit Bank of Moscow',
            site_name: 'mkb.ru',
            site_link: ' http://www.mkb.ru/',
        },
        component: <MKB/>,
    },
    {
        date_from: +moment('05.2016', 'MM.YYYY').format('x'),
        date_to: +moment('12.2017', 'MM.YYYY').format('x'),
        position: 'Programming Mentor (C ++, Java, JS)',
        company: {
            name: 'Programming teacher',
        },
        component: <Teacher/>,
    }
];

const skills = ['JavaScript', 'ES9', 'React 16.10', 'Node.js', 'Webpack', 'NPM', 'Git', 'Sass', 'БЭМ', 'REST', 'HTML5', 'CSS3', 'Product Management', 'Design Patterns', 'Web Design', 'Scrum'];