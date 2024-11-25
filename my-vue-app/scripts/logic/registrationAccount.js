import { EMAIL_MASK, PHONE_NUMBER_MASK } from "../../constans";
import { registerRequest } from "../requests/registerRequest";
import listAccount from "../components/listAccount/listAccount";

export function registrationAccount(){
    let regButton = document.querySelector('.registration-btn');

    regButton.addEventListener('click', () => {
        let nameInput = document.getElementById('input-name');
        let birthdayInput = document.getElementById('input-date');
        let genderInput = document.getElementById('input-gender');
        let phoneNumberInput = document.getElementById('input-phone-number');
        let emailInput = document.getElementById('input-email');
        let passwordInput = document.getElementById('input-password');
        let errorBlock = document.querySelector('.error-message');

        let name = nameInput.value;
        let birthday = birthdayInput.value;
        let gender = genderInput.value === 'Мужчина' ? 'Male' : 'Feemale';
        let phoneNumber = phoneNumberInput.value;
        let email = emailInput.value;
        let password = passwordInput.value;

        if (!EMAIL_MASK.test(email)){
            emailInput.style = "border: 1px solid red"
            errorBlock.style = "display: block";
            errorBlock.textContent = "Неверный Email"
        }
        else if(!PHONE_NUMBER_MASK.test(phoneNumber)){
            phoneNumberInput.style = "border: 1px solid red"
            errorBlock.style = "display: block";
            errorBlock.textContent = "Неверный формат номера телефона"
        }
        else{
            errorBlock.style = "display: none";
            errorBlock.textContent = "";
            emailInput.style = "border: 1px solid var(--border-color)"
            registerRequest({"fullName": name, "password": password, 
        'email': email, 'birthDate': birthday, 'gender': gender, 'phoneNumber': phoneNumber})
        .then(data => {console.log(data);
            localStorage.setItem('token', data['token']);
            listAccount(email);
            window.location.pathname = '/';
        })
        .catch(error => {
            errorBlock.style = "display: block";
            errorBlock.textContent = "Неверные данные"
            console.error('Ошибка авторизации:', error.message);
        });
        }
    })
}