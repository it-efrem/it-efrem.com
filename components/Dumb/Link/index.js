export function Link({path, link, icon, label}) {
    const aParametrs = {
        href: null,
        target: null
    };

    aParametrs.href = path || link;

    if (path) {
        aParametrs.target = '_self';
    }

    if (link) {
        aParametrs.target = '_blank';
    }

    return <a {...aParametrs}>
        {
            icon ? <i className={icon}/> : null
        }
        {label}
    </a>;
}