import { PARENT_BLOCK } from "../../../constans";
import { createInputBlock } from "../createInputBlock";

function mainPage(){
    let block = document.createElement('section');
    block.className += 'section-post';

    let container = document.createElement('div');
    container.className += 'container';

    let paginationContainer = document.createElement('div');
    paginationContainer.className += 'form-container pagination-container';

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

    let paginationBlock = document.createElement('div');
    paginationBlock.className += 'pagination-block';

    let paginationBar = document.createElement('div');
    paginationBar.className += 'pagination-cover';


    let pagination = document.createElement('ul');
    pagination.className += 'pagination';

    let leftItem = document.createElement('li');
    leftItem.className += 'pagination-item left-item';
    leftItem.textContent = '<'

    pagination.appendChild(leftItem);

    //временно
    for (let i = 1; i < 4; i++){
        let item = document.createElement('li');
        item.className += 'pagination-item';
        item.textContent = i;
        item.id = i;
        pagination.appendChild(item);
    }

    let rightItem = document.createElement('li');
    rightItem.className += 'pagination-item right-item';
    rightItem.textContent = '>'

    pagination.appendChild(rightItem);

    let countsPost = createInputBlock('input-block-filter count-posts', 'countPost',
    'Число постов на странице', 'number', null, 'input-count-post',
    false, true, [1,2,3,4,5,6,7,8,9,10], null, 'input input-count-posts');

    paginationBar.appendChild(pagination);

    paginationContainer.appendChild(paginationBar);
    paginationContainer.appendChild(countsPost);

    


    // form.appendChild(formContainer);
    sectionContent.appendChild(form);
    buttonBlockContainer.appendChild(newPost);
    buttonBlock.appendChild(buttonBlockContainer);
    // paginationContainer.appendChild(paginationBlock);
    paginationBlock.appendChild(paginationContainer);
    
    container.appendChild(buttonBlock)
    container.appendChild(sectionContent);
    container.appendChild(sectionPosts);
    // container.appendChild(paginationContainer);
    container.appendChild(paginationBlock);
    block.appendChild(container);

    PARENT_BLOCK.appendChild(block);
}

export default mainPage;