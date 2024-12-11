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


    let leftFormPart = document.createElement('div');
    leftFormPart.className += 'left-part';
    
    let leftBottomBlock = document.createElement('div');
    leftBottomBlock.className += 'left-bottom-part'

    let nameInput = createInputBlock('input-block-filter name', 'author',
    'Поиск по имени автора', 'text', null, 'input-name',
    false, false, null, null, 'input');

    let sortInput = createInputBlock('input-block-filter sort', 'sorting',
    'Сортировать', 'text', null, 'input-sort',
    false, true, ['','По дате создания (сначала новые)','По дате создания (сначала старые)',
     'По количеству лайков (по убыванию)', 'По количеству лайков (по возрастанию)'], null, 'input');

    let startTimeInput = createInputBlock('input-block-filter start', 'min',
    'Время чтения от', 'text', null, 'input-start-time',
    false, false, null, null, 'input');


    leftBottomBlock.appendChild(sortInput);
    leftBottomBlock.appendChild(startTimeInput);


    leftFormPart.appendChild(nameInput);
    leftFormPart.appendChild(leftBottomBlock);



    let rightFormPart = document.createElement('div');
    rightFormPart.className += 'right-part';
    



    //Вынести в отдельную функцию
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
    
    // const responseTag = await getTagList()

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


    let endTimeInput = createInputBlock('input-block-filter end', 'max',
    'Время чтения до', 'text', null, 'input-end-time',
    false, false, null, null, 'input');

    let flagInput = createInputBlock('input-block-filter flag', 'onlyMyCommunities',
    'Только мои группы', 'checkbox', null, 'input-flag',
    false, false, null, null, 'input');

    let selectButton = document.createElement('button');
    selectButton.className += 'btn select-filters-button';
    selectButton.setAttribute('type', 'button');
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

    parentBlock.appendChild(filterHeader);
    parentBlock.appendChild(formContainerMain);
}

export default filter;