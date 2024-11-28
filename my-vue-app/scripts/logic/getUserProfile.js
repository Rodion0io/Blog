import { checkLifeCycle } from "./checkLifeCycle";
import { getUserProfileRequest } from "../requests/getUserProfileRequest.js";
import { modifyDate } from "./modifyDate.js";

export function getUserProfile(){
    let token = localStorage.getItem('token');

    let emailInput = document.getElementById('input-email');
    let fullNameInput = document.getElementById('input-name');
    let phoneNumberInput = document.getElementById('input-phone-number');
    let genderInput = document.getElementById('input-gender');
    let birthday = document.getElementById('input-date');

    if (checkLifeCycle(token)){
        getUserProfileRequest(token).then(data =>{console.log(data);
            emailInput.value = data['email'];
            fullNameInput.value = data['fullName'];
            phoneNumberInput.value = data['phoneNumber'];
            genderInput.value = data['gender'] === 'Male' ? 'Мужчина' : 'Женщина';
            console.log(data['birthDate'].slice(0,9))
            birthday.value = modifyDate(data['birthDate']);
            console.log(modifyDate(data['birthDate']));
        })
    }

    
}