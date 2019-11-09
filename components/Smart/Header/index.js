import {Link} from '../../Dumb/Link/index'
import './style.scss'

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>My:</li>
                    {menuItems.map(mapMenu)}
                </ul>
            </nav>
        </header>
    )
}

function mapMenu(item) {
    return (
        <li key={item.label}>
            <Link {...item}/>
        </li>
    );
}

//ToDo: Move from here
const menuItems = [
    {
        icon: 'fas fa-vial',
        label: 'Experience',
        path: '/'
    },
    {
        icon: 'fab fa-github-alt',
        label: 'GitHub',
        link: 'https://github.com/Evgeny-Bukovski'
    },
    {
        icon: 'fab fa-medium',
        label: 'Medium',
        path: '/articles?tags=medium'
    },
    {
        icon: 'fab fa-npm',
        label: 'NPM',
        path: '/articles?tags=npm'
    },
    {
        icon: 'fab fa-stack-overflow',
        label: 'StackOverflow',
        link: 'https://stackoverflow.com/users/8963706/it-efrem'
    },
    {
        icon: 'fas fa-hospital-symbol',
        label: 'Habr',
        path: '/articles?tags=habr'
    },
    {
        icon: 'fas fa-graduation-cap',
        label: 'Certifications',
        path: '/certifications'
    },
];