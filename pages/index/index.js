import React, {useState} from 'react';
import Head from 'next/head';
import moment from 'moment'
import './style.scss'
import {getLastCommit} from "../../hooks/api/github/getLastCommit";
import {contacts} from "../../helpers/contacts";
import {differenceBetweenDates} from "../../helpers/duration";
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
                <div className='specialty'>JavaScript / React Developer</div>
                <div className='main'>
                    <div className='photo'/>
                    <div className='basic_info'>
                        <div className='basic_info-block'>
                            <span>My Name</span>
                            <div className='full_name'>Eugene Efremov</div>
                            <div className='passport'>Russian passport</div>
                        </div>
                        <div className='basic_info-block'>
                            <span>My work experience</span>
                            <div className='work_experience'>
                            <span>
                                {
                                    moment(Date.now())
                                        .subtract({years: 2014, months: 5})
                                        .format('Y [years] M [month]')
                                }
                            </span>
                                (Auto)
                            </div>
                        </div>
                        <div className='basic_info-block'>
                            <div>My contacts</div>
                            <div className='contacts'>
                                {
                                    !contactsIsVisible ?
                                        <span className='link' onClick={() => setContactsIsVisible(true)}>
                                                (click here to show)
                                            </span>
                                        :
                                        <div>
                                            <i className="fas fa-mobile-alt"/> {contacts.getPhone}
                                            <br/>
                                            <i className="far fa-envelope"/> {contacts.getEmail}
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='IndexPage_block'>
                    <div className=''>Updated: {lastCommit} (Auto)</div>
                    <div className='IndexPage_block-label'>Experience</div>
                    <div>
                        <ul>
                            {experience.map(mapExperience)}
                        </ul>
                    </div>
                </div>
                <div className='IndexPage_block'>
                    <div className='IndexPage_block-label'>Skills</div>
                    <div className='skills'>
                        <ul>
                            {skills.map(mapSkills)}
                        </ul>
                    </div>
                </div>
                <div className='IndexPage_block'>
                    <div className='IndexPage_block-label'>About me</div>
                    <AboutMe/>
                </div>
            </div>
        </>
    )
}

function mapSkills(item, idx) {
    return <li key={idx}>{item}</li>
}

function mapExperience(item, idx) {
    const workDuration = () => {
        let _result = [];
        const _duration = differenceBetweenDates(
            moment(item.date_to),
            moment(item.date_from)
        );

        if (_duration.years) {
            _result.push(`${_duration.years} years`);
        }
        if (_duration.months) {
            _result.push(`${_duration.months} months`);
        }

        if (_result.length) {
            return _result.join(' ');
        } else {
            return null
        }
    };

    return (
        <li key={idx}>
            <div>
                <div>
                    {moment(item.date_from).format('MMM YYYY')}
                    <span>&nbsp;-&nbsp;</span>
                    {moment(item.date_to).format('MMM YYYY')}
                </div>
                <div>
                    <span>{workDuration()}</span>
                </div>
            </div>
            <div>
                <div>{item.company.name}</div>
                <div>{item.company.site}</div>
                <div dangerouslySetInnerHTML={{__html: item.description}}/>
            </div>
        </li>
    )
}