import { PARENT_BLOCK } from "../../../constans";
import { createInputBlock } from "../../createInputBlock";

function Profile(datas){
    let sectionProfile = document.createElement('section');
    sectionProfile.className += 'section-profile';

    let container = document.createElement('div');
    container.className += 'container';

    let sectionContent = document.createElement('div');
    sectionContent.className += 'section-content';

    let form = document.createElement('form');
    form.className += 'form-block form-profile';

    let formContainer = document.createElement('div');
    formContainer.className += 'form-container';

    let inputBlockEmail = createInputBlock('input-block-redact email', 'email',
    'Email', 'email', 'name@example.com', 'input-email', true, false, null, null, 'input profile-input');

    let nameUser = createInputBlock('input-block-redact name', 'name',
    'ФИО', 'text', 'Иванов Иван Иванович', 'input-name', true, false, null, null, 'input profile-input');

    let phoneNumber = createInputBlock('input-block-redact phone', 'phone',
    'Телефон', 'tel', '+7 (xxx) xxx-xx-xx', 'input-phone-number', false, false, null, null, 'input profile-input');

    let gender = createInputBlock('input-block-redact gender', 'gender',
     'Пол', 'text', 'Мужчина', 'input-gender', true, true, ['Мужчина','Женщина'], 'genderListId', 'input profile-input');

    let birhdayDate = createInputBlock('input-block-redact birhday', 'date',
    'Дата рождения', 'date', null, 'input-date', false, false, null, null, 'input profile-input');

    let footerBlock = document.createElement('div');
    footerBlock.className += 'footer-block-form';

    let saveButton = document.createElement('button');
    saveButton.className += 'btn changes-button';
    saveButton.textContent = 'Сохранить';

    let messageText = document.createElement('p');
    messageText.classList += 'message-text';

    footerBlock.appendChild(saveButton);
    footerBlock.appendChild(messageText);

    formContainer.appendChild(inputBlockEmail);
    formContainer.appendChild(nameUser);
    formContainer.appendChild(phoneNumber);
    formContainer.appendChild(gender);
    formContainer.appendChild(birhdayDate);
    // formContainer.appendChild(saveButton);
    formContainer.appendChild(footerBlock);


    form.appendChild(formContainer);
    sectionContent.appendChild(form);
    container.appendChild(sectionContent);
    sectionProfile.appendChild(container);
    PARENT_BLOCK.appendChild(sectionProfile);
}

export default Profile;