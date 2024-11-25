import './styles/style.css'
import router from './scripts/logic/router.js';
import { checkLifeCycle } from './scripts/logic/checkLifeCycle.js';


document.addEventListener('DOMContentLoaded', () => {
  router();
  // localStorage.clear();
});
