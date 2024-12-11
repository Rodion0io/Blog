import { EMAIL_MASK, PHONE_NUMBER_MASK, PASSWORD_MASK } from "../../constans";
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
        let currentTime = new Date();
        currentTime.setHours(0, 0, 0, 0);
        let minDate = new Date('1900-01-01');

        
        

        let name = nameInput.value;
        let birthday = birthdayInput.value === '' ? null : new Date(birthdayInput.value);
        if (birthdayInput.value !== ''){
            birthday = new Date(birthdayInput.value);
            birthday.setHours(0, 0, 0, 0);
        }
        let gender = genderInput.value === 'Мужчина' ? 'Male' : 'Feemale';
        let phoneNumber = phoneNumberInput.value;
        let email = emailInput.value;
        let password = passwordInput.value;
        

        if (name.trim().length === 0){
            nameInput.style = "border: 1px solid red";
            errorBlock.style = "display: block";
            errorBlock.textContent = "Поля с ФИО обязательно";
            return;
        }
        else{
            nameInput.style = "border: 1px solid #e1e1e1";
        }

        if (currentTime <= birthday || birthday < minDate){
            birthdayInput.style = "border: 1px solid red";
            errorBlock.style = "display: block";
            errorBlock.textContent = "Неверная дата";
            return;
        }
        else{
            birthdayInput.style = "border: 1px solid #e1e1e1";
        }

        if(!PHONE_NUMBER_MASK.test(phoneNumber)){
            phoneNumberInput.style = "border: 1px solid red";
            errorBlock.style = "display: block";
            errorBlock.textContent = "Неверный формат номера телефона";
            return;
        }
        else{
            phoneNumberInput.style = "border: 1px solid #e1e1e1";
        }

        if (!EMAIL_MASK.test(email)){
            emailInput.style = "border: 1px solid red";
            errorBlock.style = "display: block";
            errorBlock.textContent = "Неверный Email";
            return;
        }
        else{
            emailInput.style = "border: 1px solid #e1e1e1";
        }
        
        
        if (password.length < 6){
            passwordInput.style = "border: 1px solid red";
            errorBlock.style = "display: block";
            errorBlock.textContent = "Длина пароля мин. 6 символов";
            return;
        }
        else{
            passwordInput.style = "border: 1px solid #e1e1e1";
        }
        if (!(/\d/.test(password))){
            passwordInput.style = "border: 1px solid red"
            errorBlock.style = "display: block";
            errorBlock.textContent = "1 цифра должна быть в пароле";
            return;
        }
        else{
            passwordInput.style = "border: 1px solid #e1e1e1";
        }
            
            
            
            
            
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
            console.error('Ошибка авторизации:', error);
        });

    })
}