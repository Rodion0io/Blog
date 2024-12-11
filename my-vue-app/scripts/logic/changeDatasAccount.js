import { checkValidationAccountData } from "./checkValidationAccountData";
import { changeDatasAccountRequest } from "../requests/changeDatasAccountRequest";
import { checkLifeCycle } from "./checkLifeCycle";

export function changeDatasAccount(){
    let button = document.querySelector('.changes-button');
    let token = localStorage.getItem('token');

    console.log(token);

    button.addEventListener('click', () => {
        let nameInput = document.getElementById('input-name');
        let birthdayInput = document.getElementById('input-date');
        let genderInput = document.getElementById('input-gender');
        let phoneNumberInput = document.getElementById('input-phone-number');
        let emailInput = document.getElementById('input-email');
        let errorBlock = document.querySelector('.error-message');
        
        let checker = checkValidationAccountData(nameInput, birthdayInput, genderInput, phoneNumberInput, emailInput, errorBlock);
        
        if (checker === 1){
            return;
        }
        else{
            console.log(checker.gender)
            errorBlock.style = "display: none";
            errorBlock.textContent = "";
            emailInput.style = "border: 1px solid var(--border-color)";
            if (checkLifeCycle(token)){
                changeDatasAccountRequest({'email': checker.email, "fullName": checker.name, 
                'birthDate': checker.birthday, 'gender': checker.gender === "Мужчина" ? 'Male' : 'Female', 'phoneNumber': checker.phoneNumber}, token)
                .then(data => {
                    console.log(data);
                    window.location.pathname = '/';
                })
                .catch(error => {
                    console.error('Ошибка авторизации:', error.message);
                });
            }
            else{
                localStorage.removeItem('token');
                window.location.pathname = '/login'; 
            }
        }
    })
}