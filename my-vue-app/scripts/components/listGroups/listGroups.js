import { PARENT_BLOCK } from "../../../constans";

function listGroups(){
    let sectionBlock = document.createElement('section');
    sectionBlock.className += 'section-groups';

    let container = document.createElement('div');
    container.className += 'container';

    let sectionList = document.createElement('div');
    sectionList.classList += 'section-list';

    let list = document.createElement('ul');
    list.className += 'list-group';


    sectionList.appendChild(list);
    container.appendChild(sectionList);
    sectionBlock.appendChild(container);
    PARENT_BLOCK.appendChild(sectionBlock);
}

export default listGroups;