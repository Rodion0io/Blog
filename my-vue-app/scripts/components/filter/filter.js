import {createInputBlock} from "../../components/createInputBlock"
import { getTagList } from "../../requests/getTagList";

function filter(){


    let parentBlock = document.querySelector('.form-filter');

    let formContainerMain = document.createElement('div');
    formContainerMain.className += 'form-container'; 

    let formContainerHeader = document.createElement('div');
    formContainerHeader.className += 'form-container header'; 

    let block = document.createElement('div');
    block.className += 'filter-component';



    let filterHeader = document.createElement('div');
    filterHeader.className += 'filter-header';

    let headerContent = document.createElement('p');
    headerContent.className += 'header-name';
    headerContent.textContent = 'Фильтры';

    filterHeader.appendChild(formContainerHeader);
    formContainerHeader.appendChild(headerContent);
    




    // let topFormPart = document.createElement('div');
    // topFormPart.className += 'top-part';


    let leftFormPart = document.createElement('div');
    leftFormPart.className += 'left-part';
    
    let leftBottomBlock = document.createElement('div');
    leftBottomBlock.className += 'left-bottom-part'

    let nameInput = createInputBlock('input-block-filter name', 'name',
    'Поиск по имени автора', 'text', null, 'input-name',
     true, false, null, null, 'input');

    let sortInput = createInputBlock('input-block-filter sort', 'name',
    'Сортировать', 'text', null, 'input-name',
     true, false, null, null, 'input');

    let startTimeInput = createInputBlock('input-block-filter start', 'name',
    'Время чтения от', 'text', null, 'input-name',
    true, false, null, null, 'input');


    leftBottomBlock.appendChild(sortInput);
    leftBottomBlock.appendChild(startTimeInput);


    leftFormPart.appendChild(nameInput);
    leftFormPart.appendChild(leftBottomBlock);



    let rightFormPart = document.createElement('div');
    rightFormPart.className += 'right-part';
    

    let listBlock = document.createElement('div');
    listBlock.className += 'list-block';

    let nameSelectBlock = document.createElement('p');
    nameSelectBlock.className += 'name-select';
    nameSelectBlock.textContent = 'Поиск по тэгам';

    let selectList = document.createElement('select');
    selectList.className += 'select-list';
    selectList.setAttribute('multiple', true);

    listBlock.appendChild(nameSelectBlock);
    listBlock.appendChild(selectList);
    

    getTagList().then(data => {
        selectList.setAttribute('size', `${data.length}`);
    
        selectList.innerHTML = '';
    
        data.forEach(item => {
            const option = document.createElement('option');
            option.id = item['id']
            option.value = item['name'];
            option.textContent = item['name'];
            selectList.appendChild(option);
        });
    }).catch(error => {
        console.error(error);
    });


    let endTimeInput = createInputBlock('input-block-filter end', 'name',
    'Время чтения от до', 'text', null, 'input-name',
    true, false, null, null, 'input');

    let flagInput = createInputBlock('input-block-filter flag', 'name',
    'Только мои группы', 'checkbox', null, 'input-name',
    true, false, null, null, 'input');

    let selectButton = document.createElement('button');
    selectButton.className += 'btn select-filters-button';
    selectButton.textContent = 'Применить';

    let rightBottomBlock = document.createElement('div');
    rightBottomBlock.className += 'right-bottom-block';

    let rightBottomLeftBlock = document.createElement('div');
    rightBottomLeftBlock.className += 'right-bottom-left-block'


    rightBottomLeftBlock.appendChild(endTimeInput);
    rightBottomLeftBlock.appendChild(flagInput);

    rightBottomBlock.appendChild(rightBottomLeftBlock);
    rightBottomBlock.appendChild(selectButton);

    rightFormPart.appendChild(listBlock);
    rightFormPart.appendChild(rightBottomBlock);

    

    
    // block.appendChild(filterHeader)
    block.appendChild(leftFormPart);
    block.appendChild(rightFormPart);
    formContainerMain.appendChild(block);

    parentBlock.appendChild(filterHeader)
    parentBlock.appendChild(formContainerMain);
}

export default filter;