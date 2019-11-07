import {Link} from '../../Dumb/Link/index'

export default function Header() {
    return (
        <section>
            <ul>
                {menuItems.map(mapMenu)}
            </ul>
        </section>
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
        label: 'My Medium',
        path: '/articles?tags=medium'
    },
    {
        label: 'My NPM',
        path: '/articles?tags=npm'
    },
    {
        label: 'My Habr',
        path: '/articles?tags=habr'
    },
    {
        label: 'My Stack Overflow',
        link: 'https://stackoverflow.com/users/8963706/it-efrem'
    },
    {
        label: 'My GitHub',
        link: 'https://github.com/Evgeny-Bukovski'
    },
    {
        label: 'My Certifications',
        path: '/certifications'
    },
    {
        label: 'My Experience',
        path: '/experience'
    },
];