import arch_practics from './small/arch_practics.png';
import hrm from './small/hrm.png';
import pm_in_it from './small/pm_in_it.png';
import react_dev from './small/react_dev.png';
import sber_thank from './small/sber_thank.png';
import web_testing from './small/web_testing.jpeg';

import arch_practics_full from './full/arch_practics.jpg';
import hrm_full from './full/hrm.jpg';
import pm_in_it_full from './full/pm_in_it.jpg';
import react_dev_full from './full/react_dev.jpg';
import sber_thank_full from './full/sber_thank.jpg';
import web_testing_full from './full/web_testing.jpg';

//ToDo: Create nextjs bug issue
function hotFixNextJsBug(url) {
    if (!url.includes('_next')) {
        return '/_next/' + url
    }
    return url
}

export const certificates = [
    {
        organization: 'Luxoft',
        title: 'Training - Software Architecture',
        imgSmallPath: hotFixNextJsBug(arch_practics),
        imgFullPath: hotFixNextJsBug(arch_practics_full),
    },
    {
        organization: 'RRS Training Center',
        title: 'Training - Human Resource Management',
        imgSmallPath: hotFixNextJsBug(hrm),
        imgFullPath: hotFixNextJsBug(hrm_full),
    },
    {
        organization: 'Binary District',
        title: 'Training -Tinkoff, Megaphone, Skyeng, Acronis, Project Management in IT',
        imgSmallPath: hotFixNextJsBug(pm_in_it),
        imgFullPath: hotFixNextJsBug(pm_in_it_full),
    },
    {
        organization: 'Luxoft',
        title: 'Training - Advanced ReactJS',
        imgSmallPath: hotFixNextJsBug(react_dev),
        imgFullPath: hotFixNextJsBug(react_dev_full),
    },
    {
        organization: 'SberBank',
        title: 'Thanks',
        imgSmallPath: hotFixNextJsBug(sber_thank),
        imgFullPath: hotFixNextJsBug(sber_thank_full),
    },
    {
        organization: 'Luxoft',
        title: 'Training - Web Application Testing',
        imgSmallPath: hotFixNextJsBug(web_testing),
        imgFullPath: hotFixNextJsBug(web_testing_full),
    }
];
