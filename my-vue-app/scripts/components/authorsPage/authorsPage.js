import { PARENT_BLOCK } from "../../../constans";

function authorsPage(){
    let section = document.createElement('section');
    section.className += 'section-authors';

    let container = document.createElement('div');
    container.className += 'container';

    let listBlock = document.createElement('div');
    listBlock.className += 'authors-list-block';


    container.appendChild(listBlock);
    section.appendChild(container);
    PARENT_BLOCK.appendChild(section);
}

export default authorsPage;