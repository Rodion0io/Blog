import { unSubscribeGroupRequest } from "../requests/unsubscribeGroupRequest";
import { checkLifeCycle } from "./checkLifeCycle";

export function unSubscribe(){
    let token = localStorage.getItem('token');
    let unsubscribeButton = document.querySelectorAll('.unsubscribe');

    unsubscribeButton.forEach(currentBtn => {
        currentBtn.addEventListener('click', async (event) => {
            if (token !== null && checkLifeCycle(token)){
                let parentBlockId = event.target.closest('.group-block').id;
                try {
                    let request = await unSubscribeGroupRequest(token, parentBlockId);
                    if (request === null){
                        currentBtn.className = 'btn subscribe';
                        currentBtn.textContent = 'Подписаться';
                    }
                    else{
                        console.log('ошибка');
                    }
                }
                catch (error){
                    console.log(error);
                }
            }
            else{
                alert('Авторизуйтесь!')
            }
        })
    })
}

