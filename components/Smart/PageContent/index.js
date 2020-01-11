import './style.scss';

export default function PageContent({children}) {
    return (
        <section className='PageContent'>
            {children}
        </section>
    )
}