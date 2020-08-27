'use strict';

import App from 'next/app';
import React from 'react';
import Head from 'next/head';
import 'core-js/es6/string';
import '../src/pages/style.scss';

import Header from "../src/containers/Header";
import Footer from "../src/containers/Footer";
import PageContent from "../src/containers/PageContent";

export default class MyApp extends App {
    render() {
        const {Component, pageProps} = this.props;
        return (
            <>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>

                    <link rel="image_src" href="/favicon.png"/>
                    <meta property="og:image" content="/favicon.png"/>
                    <link rel="shortcut icon" href="/favicon.png"/>
                    <link rel="icon" href="/favicon.png"/>
                    <link rel="shortcut icon" href="/favicon.png" type="image/png"/>

                    <link type='text/css' href='/fonts/roboto/roboto.css'/>
                    <link href='/fonts/fontawesome-free-5.12.0-web/css/fontawesome.min.css'
                          rel="stylesheet"/>
                    <link href='/fonts/fontawesome-free-5.12.0-web/css/brands.min.css' rel="stylesheet"/>
                    <link href='/fonts/fontawesome-free-5.12.0-web/css/regular.min.css' rel="stylesheet"/>
                    <link href='/fonts/fontawesome-free-5.12.0-web/css/solid.min.css' rel="stylesheet"/>

                    <script src="/yandex.js" async/>
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
