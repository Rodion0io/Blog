import { authorizeRequest } from "../requests/authorizeRequest";
import { EMAIL_MASK } from "../../constans.js";
import listAccount from "../components/listAccount/listAccount";

export function sendDatas(){
    let enterButton = document.querySelector('.enter-btn');
    

    enterButton.addEventListener('click', () => {
        let emailInput = document.getElementById('input-email');
        let passwordInput = document.getElementById('input-password');
        let errorBlock = document.querySelector('.error-message');

        let email = emailInput.value;
        let password = passwordInput.value;

        if (!EMAIL_MASK.test(email)){
            emailInput.style = "border: 1px solid red"
            errorBlock.style = "display: block";
            errorBlock.textContent = "Неверный Email"
        }
        else{
            errorBlock.style = "display: none";
            errorBlock.textContent = "";
            emailInput.style = "border: 1px solid var(--border-color)"

            authorizeRequest({"email": email, 'password': password})
            .then(data => {console.log(data);
                listAccount(email);
                window.location.pathname = '/';
            })
            .catch(error => {
                errorBlock.style = "display: block";
                errorBlock.textContent = "Неверный логин или пароль"
                console.error('Ошибка авторизации:', error.message);
            })
            // try{
            //     console.log(request);
            // }
            // catch{
            //     console.log(request);
            // }
            // try{
            //     authorizeRequest({"email": email, 'password': password});
            // }
            // catch{
            // }
            
        }
        
    })
}