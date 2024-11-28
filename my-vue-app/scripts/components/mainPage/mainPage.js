import { PARENT_BLOCK } from "../../../constans";

function mainPage(){
    let block = document.createElement('section');
    block.className += 'section-post';

    let container = document.createElement('div');
    container.className += 'container';

    let newPost = document.createElement('button');
    newPost.className += 'btn new-post';
    newPost.textContent = 'Написать пост';
    

    let sectionContent = document.createElement('div');
    sectionContent.className += 'section-content';

    let form = document.createElement('form');
    
    form.className += 'form-block form-filter';

    let formContainer = document.createElement('div');
    formContainer.className += 'form-container'; 

    let sectionPosts = document.createElement('div');
    sectionPosts.className += 'section-posts';


    form.appendChild(formContainer);
    sectionContent.appendChild(form);
    container.appendChild(newPost)
    container.appendChild(sectionContent);
    container.appendChild(sectionPosts);
    block.appendChild(container);

    PARENT_BLOCK.appendChild(block);
}

export default mainPage;