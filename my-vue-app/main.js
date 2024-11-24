import './styles/style.css'
import AuthorizeForm from './components/authorize/authorizeForm'
import { sendDatas } from './потом поменяю/enterAccount';

document.addEventListener('DOMContentLoaded', () => {
  AuthorizeForm();
  sendDatas();
});