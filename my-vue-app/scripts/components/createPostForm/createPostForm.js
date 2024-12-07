import { PARENT_BLOCK } from "../../../constans";
import { getTagList } from "../../requests/getTagList";
import { createInputBlock } from "../createInputBlock";

function createPostForm(){
    let mainSection = document.createElement('section');
    mainSection.className += 'create-post-section';

    let container = document.createElement('div');
    container.className += 'container';

    let sectionBlock = document.createElement('div');
    sectionBlock.className += 'section-form';

    let formBlock = document.createElement('form');
    formBlock.className += 'form-block form-new-post';

    let formContaienr = document.createElement('div');
    formContaienr.className += 'form-container';


    let formTitle = document.createElement('h1');
    formTitle.className += 'form-title';
    formTitle.textContent = 'Написать новый пост';

    
    let firstSectionParametrs = document.createElement('div');
    firstSectionParametrs.className += 'first-section-parametrs'


    let namePostInput = createInputBlock('input-block-filter name-post', 'title',
    'Название', 'text', null, 'input-name',
    true, false, null, null, 'input');

    let timeReading = createInputBlock('input-block-filter time', 'time',
    'Время чтения', 'number', null, 'input-start-time',
    true, false, null, null, 'input');

    firstSectionParametrs.appendChild(namePostInput);
    firstSectionParametrs.appendChild(timeReading);

    let secondSectionParametrs = document.createElement('div');
    secondSectionParametrs.className += 'second-section-parametrs';


    // Здесь надо будет подгрузить с сервера список групп и, наверное, хранить объекты
    let groupList = createInputBlock('input-block-filter group', 'group',
    'Группа', 'text', null, 'input-groups',
    false, true, ['','По дате создания (сначала новые)','по дате создания (сначала старые)',
     'по количеству лайков (по убыванию)', 'по количеству лайков (по возрастанию)'], null, 'input');




    let listBlock = document.createElement('div');
    listBlock.className += 'list-block create-group';
 
    let nameSelectBlock = document.createElement('p');
    nameSelectBlock.className += 'name-select';
    nameSelectBlock.textContent = 'Тэги';
 
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



    secondSectionParametrs.appendChild(groupList);
    secondSectionParametrs.appendChild(listBlock);


    let linkPhoto = createInputBlock('input-block-filter photo', 'photo',
    'Ссылка на картинку', 'text', null, 'input-photo-id',
    false, false, null, null, 'input');


    let textPostBlock = document.createElement('div');
    textPostBlock.className += 'text-post-block';

    let textPostTitle = document.createElement('p');
    textPostTitle.textContent = 'Текст';

    let inputTextBlock = document.createElement('textarea');
    inputTextBlock.className += 'input-block-text-area textarea-create-post';

    textPostBlock.appendChild(textPostTitle);
    textPostBlock.appendChild(inputTextBlock);

    let addressBlock = document.createElement('div');
    addressBlock.className += 'address-block';

    let addressBlockTitle = document.createElement('h2');
    addressBlockTitle.className += 'address-block-title';
    addressBlockTitle.textContent = 'Адрес';


    //здесь тоже параметры подгружаются с сервера
    let subjectCountry = createInputBlock('input-block-filter subject', 'subject',
    'Субъект РФ', 'text', null, 'input-subject',
    false, true, ['','По дате создания (сначала новые)','по дате создания (сначала старые)',
     'по количеству лайков (по убыванию)', 'по количеству лайков (по возрастанию)'], null, 'input');

    addressBlock.appendChild(addressBlockTitle);
    addressBlock.appendChild(subjectCountry);

    let buttonContainer = document.createElement('div');
    buttonContainer.className += 'button-container';

    let createNewPostButton = document.createElement('button');
    createNewPostButton.className += 'btn create-new-post';
    createNewPostButton.textContent = 'Создать пост';

    buttonContainer.appendChild(createNewPostButton);


    formContaienr.appendChild(formTitle);
    formContaienr.appendChild(firstSectionParametrs);
    formContaienr.appendChild(secondSectionParametrs);
    formContaienr.appendChild(linkPhoto);
    formContaienr.appendChild(textPostBlock);
    formContaienr.appendChild(addressBlock);
    formContaienr.appendChild(buttonContainer);
    formBlock.appendChild(formContaienr);
    sectionBlock.appendChild(formBlock);
    container.appendChild(sectionBlock);
    mainSection.appendChild(container);
    PARENT_BLOCK.appendChild(mainSection);
}

export default createPostForm;