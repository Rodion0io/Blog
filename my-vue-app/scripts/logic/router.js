import AuthorizeForm from "../components/authorize/authorizeForm";
import registrationForm from "../components/registration/registrationForm";
import { sendDatas } from "./enterAccount";
import { registrationAccount } from "./registrationAccount"
import Profile from "../components/profile/profile";
import listAccount from "../components/listAccount/listAccount";
import { getUserProfile } from "./getUserProfile";
import filter from "../components/filter/filter";
import mainPage from "../components/mainPage/mainPage";
import createMainPage from "./createMainPage";

function router(){
    let pathLink = window.location.pathname;
    let parentBlock = document.getElementById('app');

    document.querySelectorAll('.href')
    .forEach(link => link.addEventListener('click', (event) => {
        event.preventDefault();

        let path = event.target.href;

        window.history.pushState({route: path}, 'some title', path);
        router()
    }))

    window.addEventListener('popstate', (event) => {
        if (event.state){
            console.log(event.state);
        }
        console.log(event);
    })

    switch (pathLink){
        case '/':
            parentBlock.innerHTML = '';
            createMainPage();
            // parentBlock.innerHTML = '<h1>варапврапврблять</h1>'
            listAccount(null);
            break;
        case '/login':
            parentBlock.innerHTML = '';
            AuthorizeForm();
            sendDatas();
            break;
        case '/registration':
            parentBlock.innerHTML = '';
            registrationForm();
            registrationAccount();
            break;
        case '/profile':
            parentBlock.innerHTML = '';
            Profile();
            getUserProfile();
            listAccount(null);
            
            break;
    }
    
}

export default router; 