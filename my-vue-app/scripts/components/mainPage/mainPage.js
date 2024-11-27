import { PARENT_BLOCK } from "../../../constans";

function mainPage(){
    let block = document.createElement('section');
    block.className += 'section-post';

    let container = document.createElement('div');
    container.className += 'container';

    let sectionContent = document.createElement('div');
    sectionContent.className += 'section-content';

    let form = document.createElement('form');
    // врмененно класс поставил
    form.className += 'form-block form-filter';

    let formContainer = document.createElement('div');
    formContainer.className += 'form-container'; 

    


    form.appendChild(formContainer);
    sectionContent.appendChild(form);
    container.appendChild(sectionContent);
    block.appendChild(container);

    PARENT_BLOCK.appendChild(block);
}

export default mainPage;