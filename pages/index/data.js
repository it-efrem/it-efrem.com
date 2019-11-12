import moment from 'moment';
import {SberTech} from "../../components/Dumb/Experience/List/SberTech";
import {CastWeek} from "../../components/Dumb/Experience/List/CastWeek";
import {MKB} from "../../components/Dumb/Experience/List/MKB";
import {Teacher} from "../../components/Dumb/Experience/List/Teacher";

export const experience = [
    {
        date_from: +moment('05.2018', 'MM.YYYY').format('x'),
        date_to: Date.now(),
        position: 'Senior Frontend Developer, UI/UX Designer',
        company: {
            name: 'Sberbank - Technologies',
            site: ' sber-tech.com',
        },
        component: <SberTech/>,
    },
    {
        date_from: +moment('04.2018', 'MM.YYYY').format('x'),
        date_to: Date.now(),
        position: 'Team Leader, Head of UX/UI',
        company: {
            name: 'CastWeek, StartUp (Remote)',
            site: 'www.castweek.com',
        },
        component: <CastWeek/>,
    },
    {
        date_from: +moment('01.2018', 'MM.YYYY').format('x'),
        date_to: +moment('05.2018', 'MM.YYYY').format('x'),
        position: 'Backend Developer (Java)',
        company: {
            name: 'Credit Bank of Moscow',
            site: 'www.mkb.ru',
        },
        component: <MKB/>,
    },
    {
        date_from: +moment('05.2016', 'MM.YYYY').format('x'),
        date_to: +moment('12.2017', 'MM.YYYY').format('x'),
        position: 'Programming Mentor (C ++, Java, JS)',
        company: {
            name: 'Programming courses',
            site: '',
        },
        component: <Teacher/>,
    }
];

export const skills = ['JavaScript', 'ES9', 'React 16.10', 'Node.js', 'Webpack', 'NPM', 'Git', 'Sass', 'БЭМ', 'REST', 'HTML5', 'CSS3', 'Product Management', 'Design Patterns', 'Web Design', 'Scrum'];