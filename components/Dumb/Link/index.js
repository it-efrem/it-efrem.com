export function Link({path, link, label}) {
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

    return <a {...aParametrs}>{label}</a>;
}