import './styles/style.css'
import router from './scripts/logic/router.js';
import { checkLifeCycle } from './scripts/logic/checkLifeCycle.js';
import { logout } from './scripts/logic/logout.js';




document.addEventListener('DOMContentLoaded', () => {
    router();
    if (localStorage.getItem('token') !== null){
      logout();
    }

    
  
  // localStorage.c lear();

  //imaskjs
});


