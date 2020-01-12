'use strict';

import React from 'react';
import {List} from "../Experience/List/index";

import {name1} from "../../static/data/aboutMe/index";

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