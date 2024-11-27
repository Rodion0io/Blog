import {createInputBlock} from "../../components/createInputBlock"
import { getTagList } from "../../requests/getTagList";

function filter(){

    let parentBlock = document.querySelector('.form-container');

    let block = document.createElement('div');
    block.className += 'filter-component';



    let filterHeader = document.createElement('div');
    filterHeader.className += 'filter-header';

    let headerContent = document.createElement('p');
    headerContent.className += 'header-name';
    headerContent.textContent = 'Фильтры';

    let topFormPart = document.createElement('div');
    topFormPart.className += 'top-part';

    



    let nameInput = createInputBlock('input-block-filter name', 'name',
    'Поиск по имени автора', 'text', null, 'input-name',
     true, false, null, null, 'input');

    let listBlock = document.createElement('div');
    listBlock.className += 'list-block';

    let nameSelectBlock = document.createElement('p');
    nameSelectBlock.className += 'name-select';
    nameSelectBlock.textContent = 'Поиск по тэгам';

    let selectList = document.createElement('select');
    selectList.className += 'select-list';
    selectList.setAttribute('multiple', true);
    

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



    let bottomFormPart = document.createElement('div');
    bottomFormPart.className += 'bottom-part';


    let settingsBlock = document.createElement('div');
    settingsBlock.className += 'settings-block';

    let sortInput = createInputBlock('input-block-filter sort', 'name',
    'Сортировать', 'text', null, 'input-name',
     true, false, null, null, 'input');

    let startTimeInput = createInputBlock('input-block-filter start', 'name',
    'Время чтения от', 'text', null, 'input-name',
    true, false, null, null, 'input');

    let endTimeInput = createInputBlock('input-block-filter end', 'name',
    'Время чтения от до', 'text', null, 'input-name',
    true, false, null, null, 'input');

    let flagInput = createInputBlock('input-block-filter flag', 'name',
    'Только мои группы', 'checkbox', null, 'input-name',
    true, false, null, null, 'input');

    let selectButton = document.createElement('button');
    selectButton.className += 'btn select-filters-button';
    selectButton.textContent = 'Применить';


    listBlock.appendChild(nameSelectBlock);
    listBlock.appendChild(selectList);

    filterHeader.appendChild(headerContent);

    topFormPart.appendChild(nameInput);
    topFormPart.appendChild(listBlock);

    settingsBlock.appendChild(sortInput);
    settingsBlock.appendChild(startTimeInput);
    settingsBlock.appendChild(endTimeInput);
    settingsBlock.appendChild(flagInput);


    bottomFormPart.appendChild(settingsBlock);
    bottomFormPart.appendChild(selectButton);

    block.appendChild(filterHeader);
    block.appendChild(topFormPart);
    block.appendChild(bottomFormPart);


    parentBlock.appendChild(block);
}

export default filter;