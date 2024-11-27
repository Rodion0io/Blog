import { checkLifeCycle } from "./checkLifeCycle";
import { getUserProfileRequest } from "../requests/getUserProfileRequest.js";

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
            genderInput.value = data['gender'];
            birthday.value = data['birthDate'];
        })
    }
    // else{
    //     localStorage.clear();
    //     window.location.pathname = '/';
    // }

    
}