import './styles/style.css'
import AuthorizeForm from './scripts/components/authorize/authorizeForm.js'
import { sendDatas } from './scripts/потом поменяю/enterAccount.js';
import router from './scripts/router.js';
import { registrationAccount } from './scripts/потом поменяю/registrationAccount.js';


document.addEventListener('DOMContentLoaded', () => {
  router(); // Запускаем роутер
});
