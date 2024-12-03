import { PARENT_BLOCK } from "../../../constans";
import { createInputBlock } from "../createInputBlock";
import paginationBlock from "../paginationBlock/paginationBlock";

function mainPage(currentPage, pages, groupSize){
    let block = document.createElement('section');
    block.className += 'section-post';

    let container = document.createElement('div');
    container.className += 'container';

    let buttonBlock = document.createElement('div');
    buttonBlock.className += 'button-block';

    let buttonBlockContainer = document.createElement('div');
    buttonBlockContainer.className += 'button-block__container';


    let newPost = document.createElement('button');
    newPost.className += 'btn new-post';
    newPost.textContent = 'Написать пост';
    

    let sectionContent = document.createElement('div');
    sectionContent.className += 'section-content';

    let form = document.createElement('form');
    
    form.className += 'form-block form-filter';

    let sectionPosts = document.createElement('div');
    sectionPosts.className += 'section-posts';

    let paginationBloc = paginationBlock(currentPage, pages, groupSize);


    sectionContent.appendChild(form);
    buttonBlockContainer.appendChild(newPost);
    buttonBlock.appendChild(buttonBlockContainer);
    
    
    container.appendChild(buttonBlock)
    container.appendChild(sectionContent);
    container.appendChild(sectionPosts);
    container.appendChild(paginationBloc);
    block.appendChild(container);

    PARENT_BLOCK.appendChild(block);
    
}

export default mainPage;