import React from 'react';
import {List} from "../List";

//ToDo: Понять нужность раздела, доработать или удалить
const name1 = [
    'I try every day to learn useful and new',
    'I manage my time using Google Calendar, Keep, Tasks',
    'On the road I listen to audio books and podcasts',
    'I follow the works on Behance & Dribbble',
    'Using Pomodoro Tracker',
    'I do not lose time',
    'I pragmatist',
];
const name2 = [
    'SCRUM development',
    'Critical Path Project Planning',
    'Studied approaches',
    [
        'TOC Goldratt',
        'Deming Management Theory',
    ],
    'I know the difference between PERT, GERT and Gantt chart',
    'I use COCOMO to estimate task completion time',
];

export function AboutMe() {
    return (
        <div className='shadow-block'>
            <div className='shadow-block_text'>
                <div className='label'>My life rules:</div>
                <List data={name1}/>
                {/*<List data={name2}/>*/}
            </div>
        </div>
    )
}