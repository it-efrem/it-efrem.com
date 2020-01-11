import App from 'next/app'
import React from 'react'
import Head from 'next/head';
import './reset.scss'
import './style.scss'

import '../static/data/ym'
import Header from "../components/Smart/Header";
import Footer from "../components/Smart/Footer";
import PageContent from "../components/Smart/PageContent";

export default class MyApp extends App {
    render() {
        const {Component, pageProps} = this.props;
        return (
            <>
                <Head>
                    <link rel="image_src" href="/static/favicon.png"/>
                    <meta property="og:image" content="/static/favicon.png"/>
                    <link rel="shortcut icon" href="/static/favicon.png"/>
                    <link rel="icon" href="/static/favicon.png"/>
                    <link rel="shortcut icon" href="/static/favicon.png" type="image/png"/>

                    <link type='text/css' href='../static/fonts/roboto/roboto.css'/>
                    <link href='/static/fonts/fontawesome-free-5.12.0-web/css/fontawesome.min.css' rel="stylesheet"/>
                    <link href='/static/fonts/fontawesome-free-5.12.0-web/css/brands.min.css' rel="stylesheet"/>
                    <link href='/static/fonts/fontawesome-free-5.12.0-web/css/regular.min.css' rel="stylesheet"/>
                    <link href='/static/fonts/fontawesome-free-5.12.0-web/css/solid.min.css' rel="stylesheet"/>
                </Head>
                <PageContent>
                    <Header/>
                    <Component {...pageProps} />
                    <Footer/>
                    <noscript>
                        <div>
                            <img src="https://mc.yandex.ru/watch/56986774" style={{
                                position: 'absolute', left: '-9999px'
                            }} alt=""/>
                        </div>
                    </noscript>
                </PageContent>
            </>
        )
    }
}