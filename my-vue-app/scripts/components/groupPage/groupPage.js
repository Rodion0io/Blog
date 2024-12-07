import { PARENT_BLOCK } from "../../../constans";

function groupPage(){
    let sectionGroup = document.createElement('section');
    sectionGroup.className += 'section-group';

    let container = document.createElement('div');
    container.className += 'container group';

    let sectionHeader = document.createElement('div');
    sectionHeader.className += 'section-header';
    
    let section = document.createElement('div');
    section.className += 'section-filter';

    let sectionPosts = document.createElement('div');
    sectionPosts.className += 'section-posts';

    // let sectionFilter = document.createElement('div');
    // sectionFilter.className += 'section-filter';

    // let sectionFilter = document.createElement('div');
    // sectionFilter.className += 'section-filter';

    // let formFilter = document.createElement('form');
    // formFilter.className += 'form-block';


    container.appendChild(sectionHeader);
    container.appendChild(section);
    //это не правильно
    container.appendChild(sectionPosts);
    sectionGroup.appendChild(container);
    PARENT_BLOCK.appendChild(sectionGroup);
}

export default groupPage;