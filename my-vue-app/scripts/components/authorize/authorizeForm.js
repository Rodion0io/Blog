import { PARENT_BLOCK} from "../../../constans"
import { createInputBlock } from "../../createInputBlock";

function AuthorizeForm(){
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
    formTitle.textContent = 'Вход';

    let inputBlockEmail = document.createElement('div');
    inputBlockEmail.className += 'input-block email';

    let lableInputEmail = document.createElement('label');
    lableInputEmail.className = 'lable';
    lableInputEmail.setAttribute('for', 'email');
    lableInputEmail.textContent = 'Email'

    let inputEmail = document.createElement('input');
    inputEmail.className += 'input';
    inputEmail.setAttribute('type', 'email');
    inputEmail.setAttribute('name', 'email');
    inputEmail.setAttribute('placeholder', 'name@example.com');
    inputEmail.required = true;
    inputEmail.id = 'input-email';

    let inputBlockPassword = document.createElement('div');
    inputBlockPassword.className += "input-block password"

    let lableInputPassword = document.createElement('label');
    lableInputPassword.className = 'lable';
    lableInputPassword.setAttribute('for', 'email');
    lableInputPassword.textContent = 'Пароль'

    let inputPassword = document.createElement('input');
    inputPassword.className += 'input';
    inputPassword.setAttribute('type', 'password');
    inputPassword.setAttribute('name', 'name');
    inputPassword.id = 'input-password';

    let errorMessage = document.createElement('p');
    errorMessage.className += 'error-message';
    // errorMessage.setAttribute()
    // errorMessage.textContent = 'bi bim bam bam'


    let btnBlock = document.createElement('div');
    btnBlock.className += 'btn-block';

    let enterBtn = document.createElement('a');
    enterBtn.className += 'href btn enter-btn';
    enterBtn.textContent = 'Войти';

    let regBtn = document.createElement('a');
    regBtn.className += 'href btn reg-btn';
    regBtn.textContent = 'Зарегистрироваться';
    regBtn.setAttribute('href', '/registration')

    btnBlock.appendChild(enterBtn);
    btnBlock.appendChild(regBtn);

    inputBlockEmail.appendChild(lableInputEmail);
    inputBlockEmail.appendChild(inputEmail);

    inputBlockPassword.appendChild(lableInputPassword);
    inputBlockPassword.appendChild(inputPassword);

    formContainer.appendChild(formTitle);
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

export default AuthorizeForm;