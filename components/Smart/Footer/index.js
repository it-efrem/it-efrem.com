import moment from 'moment'
import './style.scss'

export default function Footer() {

    //ToDo: show email
    return (
        <footer>
            <div className='location'>
                <span className='location_label'>Location:</span>
                <ul>
                    <li>
                        <i className="fas fa-globe-americas"/>
                        <span>Earth (third planet)
                            &nbsp;
                            <i className="fas fa-long-arrow-alt-left"></i>
                            &nbsp;
                            I'm here</span>
                    </li>
                    <li>
                        <i className="far fa-sun"/>
                        <span>Solar System</span>
                    </li>
                    <li>
                        <i className="fab fa-empire"/>
                        <span>Orion Arm</span>
                    </li>
                    <li>
                        <i className="fab fa-galactic-republic"/>
                        <span>Milky Way</span>
                    </li>
                    <li>
                        <i className="fab fa-galactic-senate"/>
                        <span>Virgo Supercluster</span>
                    </li>
                    <li>
                        <i className="fas fa-infinity"/>
                        <span>Universe</span>
                    </li>
                </ul>
            </div>
            <div className='location_copy'>
                <div>My Email: (click here to show)</div>
                <div>
                    <span>See this site in </span>
                    <a href='https://github.com/Evgeny-Bukovski/it-efrem.com' target="_blank">GitHub repository</a>
                </div>
                <div>Used React.js + Next.js (SSR), SCSS</div>
                <div>Dev by Eugene &copy; 2014 - {moment(Date.now()).format('YYYY')}</div>
            </div>
        </footer>
    )
}