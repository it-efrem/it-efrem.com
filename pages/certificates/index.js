import React, {useState} from 'react';
import Head from 'next/head';
import './style.scss';
import {certificates} from '../../static/data/myCertificates'
import {Modal} from "../../components/Dumb/Modal";

export default function Certificates() {
    const [modalFullPicture, setModalFullPicture] = useState(false);

    return (
        <>
            {
                modalFullPicture ? renderModalFullPicture(modalFullPicture) : null
            }
            <Head>
                <title>Eugene Efremov - My Certificates | it-efrem.com</title>
            </Head>
            <article className='Certificates'>
                <h1>
                    <mark>💡</mark>
                    <span>My Certificates</span>
                </h1>
                <ul className='shadow-block'>
                    {certificates.map(certificatesMap)}
                </ul>
            </article>
        </>
    )

    function certificatesMap({organization, title, imgSmallPath, imgFullPath}, idx) {
        return (
            <li key={idx}>
                <div onClick={() => setModalFullPicture({organization, title, imgFullPath})}>
                    <img src={imgSmallPath} alt=""/>
                </div>
                <div>
                    <h3>{organization}</h3>
                    <h4>{title}</h4>
                </div>
            </li>
        )
    }

    function renderModalFullPicture(modalFullPicture) {
        const {organization, title, imgFullPath} = modalFullPicture;

        return (
            <Modal closeModal={() => setModalFullPicture(false)}>
                <div className='Certificates_Modal'>
                    <div>
                        <p>{organization}</p>
                        <p>{title}</p>
                    </div>
                    <img src={imgFullPath} alt=""/>
                </div>
            </Modal>
        )
    }
}

