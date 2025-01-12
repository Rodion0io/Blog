import { createInputBlock } from "../createInputBlock";
import paginationBar from "../paginationBar/pagintaionBar";

function paginationBlock(currentPage, pages, groupSize){
    let paginationContainer = document.createElement('div');
    paginationContainer.className += 'form-container pagination-container';

    let paginationBlock = document.createElement('div');
    paginationBlock.className += 'pagination-block';

    let paginationBa = document.createElement('div');
    paginationBa.className += 'pagination-cover';


    let countsPost = createInputBlock('input-block-filter count-posts', 'countPost',
    'Число постов на странице', 'number', null, 'input-count-post',
    false, true, [1,2,3,4,5,6,7,8,9,10], null, 'input input-count-posts', null, null, 5);

    // paginationBa.appendChild(paginationBar(currentPage, pages, groupSize));

    paginationContainer.appendChild(paginationBa);
    paginationContainer.appendChild(countsPost);

    paginationBlock.appendChild(paginationContainer);

    return paginationBlock
}

export default paginationBlock;