import App from 'next/app'
import React from 'react'
import Head from 'next/head';
import './reset.scss'
import './style.scss'

import Header from "../components/Smart/Header";
import Footer from "../components/Smart/Footer";
import PageContent from "../components/Smart/PageContent";

//ToDo: Replace fontawesome to files
export default class MyApp extends App {
    render() {
        const {Component, pageProps} = this.props;
        return (
            <>
                <Head>
                    {/*//ToDo: import icons*/}
                    {/*<link rel="image_src" href=".png"/>*/}
                    {/*<meta property="og:image" content=".png"/>*/}
                    {/*<link rel="shortcut icon" href=".png"/>*/}
                    {/*<link rel="icon" href=".png"/>*/}
                    {/*<link rel="shortcut icon" href=".png" type="image/png"/>*/}
                    <script src="https://kit.fontawesome.com/321ff4e708.js" crossOrigin="anonymous"></script>
                    <link type='text/css' href='../static/fonts/roboto/roboto.css'/>
                </Head>
                <PageContent>
                    <Header/>
                    <Component {...pageProps} />
                    <Footer/>
                </PageContent>
            </>
        )
    }
}