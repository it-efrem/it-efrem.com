import React from 'react';
import Link from 'next/link';

export function NavLink({link, icon, label}) {
    const otherSite = link.includes('http');

    if (!otherSite) {
        return (
            <Link href={link}>
                <a>
                    {
                        icon ? <i className={icon}/> : null
                    }
                    {label}
                </a>
            </Link>
        );
    } else {
        return (
            <a href={link} target='_blank'>
                {
                    icon ? <i className={icon}/> : null
                }
                {label}
            </a>
        );
    }
}