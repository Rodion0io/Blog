import { PARENT_BLOCK } from "../../../constans";

function groupPage(){
    let sectionGroup = document.createElement('section');
    sectionGroup.className += 'section-group';

    let container = document.createElement('div');
    container.className += 'container group';


    sectionGroup.appendChild(container);
    PARENT_BLOCK.appendChild(sectionGroup);
}

export default groupPage;