import './style.scss';

export default function PageContent({children}) {
    return (
        <section className='PageContent'>
            <article>
            {children}
            </article>
        </section>
    )
}