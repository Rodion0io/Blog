import { createInputBlock } from "../createInputBlock";
import { getTagList } from "../../requests/getTagList";

function shortFilterBlock(){
    let parentBlock = document.querySelector('.section-filter');


    // let section = document.createElement('div');
    // section.className += 'section-filter';

    let form = document.createElement('form');
    form.className += 'form-block short-form';

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

    let inputsBlock = document.createElement('div');
    inputsBlock.className += 'inputs-block';



    let sortInput = createInputBlock('input-block-filter sort short', 'sorting',
    'Сортировать', 'text', null, 'input-sort',
    false, true, ['','По дате создания (сначала новые)','По дате создания (сначала старые)',
     'По количеству лайков (по убыванию)', 'По количеству лайков (по возрастанию)'], null, 'input');


    //Вынести в отдельную функцию
    let listBlock = document.createElement('div');
    listBlock.className += 'list-block short-list';

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


    let buttonContainer = document.createElement('div');
    buttonContainer.className += 'button-container';

    let sendButton = document.createElement('button');
    sendButton.className += 'btn send-filter-button';
    sendButton.textContent = 'Применить';
    sendButton.type = 'button';

    buttonContainer.appendChild(sendButton);

    inputsBlock.appendChild(sortInput);
    inputsBlock.appendChild(listBlock);

    formContainerMain.appendChild(inputsBlock);
    formContainerMain.appendChild(buttonContainer);

    filterHeader.appendChild(formContainerHeader);
    formContainerHeader.appendChild(headerContent);

    form.appendChild(filterHeader);
    form.appendChild(formContainerMain)
    // section.appendChild(form);
    parentBlock.appendChild(form)
}

export default shortFilterBlock;