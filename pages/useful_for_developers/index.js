'use strict';

import React from 'react';
import Head from 'next/head';
import {links} from "../../static/data/useful_for_developers";
import CSS from "./style.scss";
import CSS_global from "../style.scss";

export default function UsefulForDevelopers() {
    return (
        <>
            <Head>
                <title>Eugene Efremov - UsefulForDevelopers | it-efrem.com</title>
            </Head>
            <article className={CSS.UsefulForDevelopers}>
                <h1>
                    <mark>💪</mark>
                    <span>Useful links</span>
                </h1>
                <ul className={CSS_global.shadow_block}>
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