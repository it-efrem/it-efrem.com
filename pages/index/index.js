import Head from 'next/head';
import moment from 'moment'
import './style.scss'
import {getLastCommit} from "../../hooks/api/github/getLastCommit";

export default function IndexPage() {
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
                                <div>
                                    Phone:
                                    <br/>
                                    Email:
                                </div>
                                <div>
                                    (click here to show)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/*//ToDo: SEO*/}
                    <div className=''>Updated: {lastCommit} (Auto)</div>
                    Experience
                </div>
                <div>
                    Skills
                </div>
                <div>
                    About me
                </div>
                <div>

                </div>
            </div>
        </>
    )
}