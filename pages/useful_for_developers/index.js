import Head from 'next/head';
import "./style.scss";

const links = [
    {
        link: 'https://learn-html.org/',
        title: 'Tutorial that explains how to build HTML & CSS websites',
    },
    {
        link: 'https://css-tricks.com/',
        title: 'CSS guides',
    },
    {
        link: 'https://caniuse.com/',
        title: 'Browser support tables for modern web technologies',
    },
    {
        link: 'https://developers.google.com/web',
        title: 'Tutorials, guides, and best practices',
    },
    {
        link: 'https://developer.mozilla.org/',
        title: 'Learn the best of web development',
    },
    {
        link: 'https://devdocs.io/',
        title: 'API documentations in a fast, organized, and searchable interface',
    },
    {
        link: 'https://learn-js.org/',
        title: 'Interactive JavaScript tutorial',
    },
    {
        link: 'https://tc39.es/ecma262/',
        title: 'ECMAScript® 2020 Language Specification',
    },
    {
        link: 'https://webpack.js.org/',
        title: 'Static module bundler for modern JavaScript applications',
    },
    {
        link: 'https://react.com/',
        title: 'A JavaScript library for building user interfaces',
    },
    {
        link: 'https://flow.org/',
        title: 'Flow is a static type checker for javascript',
    },
    {
        link: 'https://jestjs.io/',
        title: 'Delightful JavaScript Testing Framework with a focus on simplicity',
    },
];

export default function UsefulForDevelopers() {
    return (
        <>
            <Head>
                <title>Eugene Efremov - UsefulForDevelopers | it-efrem.com</title>
            </Head>
            <article className='UsefulForDevelopers'>
                <h1>
                    <mark>💪</mark>
                    <span>Useful links</span>
                </h1>
                <ul className='shadow-block'>
                    {links.map(mapLinks)}
                </ul>
            </article>
        </>
    )
}

const regHost = new RegExp(/(:\/\/)(.*)(\/)/);

function mapLinks({link, title}, idx) {
    const linkFormatted = regHost.exec(link)[2];

    return (
        <li key={idx}>
            <a href={link} target='_blank'>
                <span>{linkFormatted.toUpperCase()}</span>
                <span>—</span>
                <span>{title}</span>
            </a>
        </li>
    )
}