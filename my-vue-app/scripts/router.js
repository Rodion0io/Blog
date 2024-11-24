import AuthorizeForm from "./components/authorize/authorizeForm";
import registrationForm from "./components/registration/registrationForm";
import { sendDatas } from "./потом поменяю/enterAccount";
import { registrationAccount } from "./потом поменяю/registrationAccount";

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
            parentBlock.innerHTML = '<h1>bim bim bam bam</h1>';
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
    }
    
}

export default router;