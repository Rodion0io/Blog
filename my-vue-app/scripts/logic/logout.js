import { checkLifeCycle } from "./checkLifeCycle";
import { logoutRequest } from "../requests/logoutRequest";

export function logout(){
    let exitButton = document.querySelector('.exit');
    let token = localStorage.getItem('token');

    exitButton.addEventListener('click', () => {
        if (checkLifeCycle(token)){
            logoutRequest(token).then(data => {
                console.log(data);
                localStorage.clear();
            })
        }
    });
}
