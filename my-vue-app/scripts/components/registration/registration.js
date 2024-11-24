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


    inputBlockEmail.appendChild(lableInputEmail);
    inputBlockEmail.appendChild(inputEmail);

    inputBlockPassword.appendChild(lableInputPassword);
    inputBlockPassword.appendChild(inputPassword);

    formContainer.appendChild(formTitle);
    formContainer.appendChild(inputBlockEmail);
    formContainer.appendChild(inputBlockPassword)

    form.appendChild(formContainer);
    sectionContent.appendChild(form);
    container.appendChild(sectionContent);
    sectionForm.appendChild(container);
    PARENT_BLOCK.appendChild(sectionForm);
}

export default registrationForm;