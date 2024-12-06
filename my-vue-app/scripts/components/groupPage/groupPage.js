import { PARENT_BLOCK } from "../../../constans";

function groupPage(){
    let sectionGroup = document.createElement('section');
    sectionGroup.className += 'section-group';

    let container = document.createElement('div');
    container.className += 'container group';
    

    // let sectionFilter = document.createElement('div');
    // sectionFilter.className += 'section-filter';

    // let sectionFilter = document.createElement('div');
    // sectionFilter.className += 'section-filter';

    // let formFilter = document.createElement('form');
    // formFilter.className += 'form-block';


    // container.appendChild(sectionFilter);
    sectionGroup.appendChild(container);
    PARENT_BLOCK.appendChild(sectionGroup);
}

export default groupPage;