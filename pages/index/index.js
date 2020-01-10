import React, {useState} from 'react';
import Head from 'next/head';
import moment from 'moment';
import './style.scss'
import {getLastCommit} from "../../hooks/api/github/getLastCommit";
import {contacts} from "../../helpers/contacts";
import {differenceBetweenDates, workDuration} from "../../helpers/duration";
import {AboutMe} from "../../components/Dumb/Experience/AboutMe";
import {experience, skills} from './data';

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
                            <span className="mySpeciality">React Developer</span>
                            <span className="myName">Eugene Efremov</span>
                            <span className="myContacts">
                                {
                                    !contactsIsVisible ?
                                        <div onClick={() => setContactsIsVisible(true)}>
                                            <i className="fas fa-mobile-alt"/>
                                            <br/>
                                            <i className="far fa-envelope"/>
                                        </div>
                                        :
                                        <div>
                                            <i className="fas fa-mobile-alt"/> {contacts.getPhone}
                                            <br/>
                                            <i className="far fa-envelope"/> {contacts.getEmail}
                                        </div>
                                }
                            </span>
                        </div>
                    </div>
                </div>

            </div>
            <div className='IndexPage'>
                <div className="IndexPage_container">
                    <div className='IndexPage_block'>
                        <div className='IndexPage_block-label'>
                            <span>Experience {getWorkExperience()}</span>
                        </div>
                        <div className='lastUpdateDate'>
                            <span>Last update of the GitHub {lastCommit} (Auto)</span>
                        </div>
                        <div className='experience'>
                            <ul>
                                {experience.map(mapExperience)}
                            </ul>
                        </div>
                    </div>
                    <div className='IndexPage_block'>
                        <div className='IndexPage_block-label'>
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
            <div className='experience_item'>
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
                    <div className='experience_item_text'>
                        {item.component}
                    </div>
                </div>
            </div>
        </li>
    )
}