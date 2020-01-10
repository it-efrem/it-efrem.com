import React, {useState} from 'react';
import Head from 'next/head';
import moment from 'moment';
import './style.scss'
import {getLastCommit} from "../../hooks/api/github/getLastCommit";
import {contacts} from "../../helpers/contacts";
import {differenceBetweenDates, workDuration} from "../../helpers/duration";
import {AboutMe} from "../../components/Dumb/Experience/AboutMe";
import {experience, skills} from './data';

//ToDo: Использовать CSS Модули
//ToDo: Разбить на более мелкие компоненты
//ToDo: Мобильная верстка
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
                                    //ToDo: Create Component Button
                                    !contactsIsVisible ?
                                        <div className='clickContacts'>
                                            <div className='btn' onClick={() => setContactsIsVisible(true)}>
                                                <i className="far fa-envelope"/>
                                                &nbsp;
                                                <span>View contacts</span>
                                            </div>
                                        </div>
                                        :
                                        <div className='myContacts_data'>
                                            <div className='myContacts_row'>
                                                <i className="fas fa-mobile-alt"/>
                                                &nbsp;
                                                <span>{contacts.getPhone}</span>
                                            </div>
                                            <div className='myContacts_row'>
                                                <i className="far fa-envelope"/>
                                                &nbsp;
                                                <span>{contacts.getEmail}</span>
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
                <div className="IndexPage_container">
                    <div className='IndexPage_block'>
                        <div className='IndexPage_block-label'>
                            <mark>⚡</mark>
                            <span>Experience {getWorkExperience()}</span>
                        </div>
                        <div className='lastUpdateDate'>
                            <i className="fas fa-magic"/>
                            &nbsp;
                            <span title="Auto update">Last update of the GitHub {lastCommit}</span>
                        </div>
                        <div className='experience'>
                            <ul>
                                {experience.map(mapExperience)}
                            </ul>
                        </div>
                    </div>
                    <div className='IndexPage_block'>
                        <div className='IndexPage_block-label'>
                            <mark>🔨</mark>
                            <span>Skills</span>
                        </div>
                        <div className='skills'>
                            <ul>
                                {skills.map(mapSkills)}
                            </ul>
                        </div>
                    </div>
                    <div className='IndexPage_block'>
                        <div className='IndexPage_block-label'>
                            <mark>👽</mark>
                            <span>About me</span>
                        </div>
                        <AboutMe/>
                    </div>
                </div>
            </div>
        </>
    )
}

function getWorkExperience() {
    const _wordDurationInt = experience.reduce((acc, item) => {
        const duration = item.date_to - item.date_from;
        return duration + acc;
    }, 0);

    return moment(_wordDurationInt)
        .subtract({years: 1970})
        .format('Y [years] M [month]')
}

function mapSkills(item, idx) {
    return <li key={idx}>{item}</li>
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