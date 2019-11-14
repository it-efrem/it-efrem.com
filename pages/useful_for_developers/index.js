import Head from 'next/head';

const links = [
    {
        link: 'https://css-tricks.com/',
        title: '',
    },
    {
        link: 'https://jestjs.io/',
        title: '',
    },
];

export default function UsefulForDevelopers() {
    return (
        <>
            <Head>
                <title>Eugene Efremov - UsefulForDevelopers | it-efrem.com</title>
            </Head>
            <div>
                UsefulForDevelopers
            </div>
        </>
    )
}