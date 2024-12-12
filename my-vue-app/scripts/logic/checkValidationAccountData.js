import { EMAIL_MASK, PHONE_NUMBER_MASK } from "../../constans";

export function checkValidationAccountData(nameInput, birthdayInput, genderInput, phoneNumberInput, emailInput, errorBlock, passwordInput = null) {
    let currentTime = new Date();
    currentTime.setHours(0, 0, 0, 0);
    let minDate = new Date('1900-01-01');

    let name = nameInput.value;
    let birthday = birthdayInput.value === '' ? null : new Date(birthdayInput.value);
    if (birthdayInput.value !== '') {
        birthday = new Date(birthdayInput.value);
        birthday.setHours(0, 0, 0, 0);
    }
    let gender = genderInput.value;
    let phoneNumber = phoneNumberInput.value;
    let email = emailInput.value;


    if (birthday !== null) {
        const day = birthday.getDate();
        const month = birthday.getMonth() + 1;

        if (day > 31 || (day === 31 && [4, 6, 9, 11].includes(month))) {
            birthdayInput.style = "border: 1px solid red";
            errorBlock.style = "display: block";
            errorBlock.textContent = "Неверная дата: в этом месяце не может быть 31 день";
            return 1;
        }

        if (month === 2 && day > 28) {
            birthdayInput.style = "border: 1px solid red";
            errorBlock.style = "display: block";
            errorBlock.textContent = "Неверная дата: в феврале не может быть больше 28 дней";
            return 1;
        }
    }

    if (name.trim().length === 0 || name.trim().length > 30) {
        nameInput.style = "border: 1px solid red";
        errorBlock.style = "display: block";
        errorBlock.textContent = "Поля с ФИО обязательно или слишком длинное имя";
        return 1;
    } else {
        nameInput.style = "border: 1px solid #e1e1e1";
    }

    if (currentTime <= birthday || birthday < minDate) {
        birthdayInput.style = "border: 1px solid red";
        errorBlock.style = "display: block";
        errorBlock.textContent = "Неверная дата";
        return 1;
    } else {
        birthdayInput.style = "border: 1px solid #e1e1e1";
    }

    if (!PHONE_NUMBER_MASK.test(phoneNumber)) {
        phoneNumberInput.style = "border: 1px solid red";
        errorBlock.style = "display: block";
        errorBlock.textContent = "Неверный формат номера телефона";
        return 1;
    } else {
        phoneNumberInput.style = "border: 1px solid #e1e1e1";
    }

    if (!EMAIL_MASK.test(email)) {
        emailInput.style = "border: 1px solid red";
        errorBlock.style = "display: block";
        errorBlock.textContent = "Неверный Email";
        return 1;
    } else {
        emailInput.style = "border: 1px solid #e1e1e1";
    }

    if (passwordInput !== null) {
        let password = passwordInput.value;
        if (password.length < 6) {
            passwordInput.style = "border: 1px solid red";
            errorBlock.style = "display: block";
            errorBlock.textContent = "Длина пароля мин. 6 символов";
            return 1;
        } else {
            passwordInput.style = "border: 1px solid #e1e1e1";
        }
        if (!(/\d/.test(password))) {
            passwordInput.style = "border: 1px solid red";
            errorBlock.style = "display: block";
            errorBlock.textContent = "1 цифра должна быть в пароле";
            return 1;
        } else {
            passwordInput.style = "border: 1px solid #e1e1e1";
            return { name, birthday, gender, phoneNumber, email, password };
        }
    } else {
        return { name, birthday, gender, phoneNumber, email };
    }
}