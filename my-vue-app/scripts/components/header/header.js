import { PARENT_BLOCK_HEADER, SITE_TITLE, MAIN, AUTHORS, COMMUNITIES } from "../../../constans";

function header(){
    let container = document.createElement('div');
    container.className += 'container';

    let heroContent = document.createElement('div');
    heroContent.className += 'hero-content';

    let heroContentLeft = document.createElement('div');
    heroContentLeft.className += 'hero-content__left';

    let title = document.createElement('h2');
    title.className += 'title';
    title.textContent = SITE_TITLE;

    let navbar = document.createElement('nav');
    navbar.className += 'navbar';

    let mainLink = document.createElement('a');
    mainLink.className += 'href navbar_link';
    mainLink.href = '/';
    mainLink.textContent = MAIN;

    let authorsLink = document.createElement('a');
    authorsLink.className += 'href navbar_link';
    authorsLink.href = '/authors';
    authorsLink.textContent = AUTHORS;

    let communitiesLink = document.createElement('a');
    communitiesLink.className += 'href navbar_link';
    communitiesLink.href = '/communities';
    communitiesLink.textContent = COMMUNITIES;

    let heroContentRight = document.createElement('div');
    heroContentRight.className += 'hero-content__right';

    let enterLink = document.createElement('a');
    enterLink.className += 'href navbar_link';
    enterLink.href = '/login';
    enterLink.textContent = 'Вход';

    navbar.appendChild(mainLink);
    navbar.appendChild(authorsLink);
    navbar.appendChild(communitiesLink);

    heroContentLeft.appendChild(title);
    heroContentLeft.appendChild(navbar);
    heroContentRight.appendChild(enterLink);

    heroContent.appendChild(heroContentLeft);
    heroContent.appendChild(heroContentRight);
    container.appendChild(heroContent);
    PARENT_BLOCK_HEADER.appendChild(container);
}

export default header;