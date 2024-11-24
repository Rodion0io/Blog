import { PARENT_BLOCK} from "../../../constans"
import { createInputBlock } from "../../createInputBlock";


function registrationForm(){
    let sectionForm = document.createElement('section');
    sectionForm.className += "section-form";

    let container = document.createElement('div');
    container.className += 'container';

    let sectionContent = document.createElement('div');
    sectionContent.className += 'section-content';

    let form = document.createElement('form');
    form.className += 'form-block';

    let formContainer = document.createElement('div');
    formContainer.className += 'form-container';

    let formTitle = document.createElement('h2');
    formTitle.className += 'block-title';
    formTitle.textContent = 'Регистрация';

    let nameUser = createInputBlock('input-block name', 'name',
    'ФИО', 'text', 'Иванов Иван Иванович', 'input-name', true);

    let birhdayDate = createInputBlock('input-block birhday', 'date',
     'Дата рождения', 'date', null, 'input-date', false);

    let gender = createInputBlock('input-block gender', 'gender',
     'Пол', 'select', 'Мужчина', 'input-gender', true)

    let phoneNumber = createInputBlock('input-block phone', 'phone',
    'Телефон', 'tel', '+7 (xxx) xxx-xx-xx', 'input-phone-number', false);

    let inputBlockEmail = createInputBlock('input-block email', 'email',
    'Email', 'email', 'name@example.com', 'input-email', true);

    let inputBlockPassword = createInputBlock("input-block password", 'name',
    'Пароль', 'password', null, 'input-password', true);

    let errorMessage = document.createElement('p');
    errorMessage.className += 'error-message';

    let btnBlock = document.createElement('div');
    btnBlock.className += 'btn-block';

    let enterBtn = document.createElement('a');
    enterBtn.className += 'href btn enter-btn';
    enterBtn.textContent = 'Зарегестрироваться';

    let infoText = document.createElement('p');
    infoText.className += 'notification';
    infoText.textContent = 'Email будет использоваться для входа в систему';


    inputBlockEmail.appendChild(infoText);

    btnBlock.appendChild(enterBtn);

    formContainer.appendChild(formTitle);
    formContainer.appendChild(nameUser);
    formContainer.appendChild(birhdayDate);
    formContainer.appendChild(gender);
    formContainer.appendChild(phoneNumber);
    formContainer.appendChild(inputBlockEmail);
    formContainer.appendChild(inputBlockPassword);
    formContainer.appendChild(errorMessage);
    formContainer.appendChild(btnBlock);

    form.appendChild(formContainer);
    sectionContent.appendChild(form);
    container.appendChild(sectionContent);
    sectionForm.appendChild(container);
    PARENT_BLOCK.appendChild(sectionForm);
}

export default registrationForm;