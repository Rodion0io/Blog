import { unSubscribeGroupRequest } from "../requests/unsubscribeGroupRequest";
import { checkLifeCycle } from "./checkLifeCycle";

export function unSubscribe() {
    let token = localStorage.getItem('token');
    let unsubscribeButton = document.querySelectorAll('.unsubscribe');

    unsubscribeButton.forEach(currentBtn => {
        currentBtn.addEventListener('click', async (event) => {
            if (token !== null && checkLifeCycle(token)) {
                // let parentBlockId = event.target.closest('.unsubscribe').id;
                console.log(event.target.id);
                try {
                    let request = await unSubscribeGroupRequest(token, event.target.id);
                    if (request === null) {
                        currentBtn.className = 'btn subscribe';
                        currentBtn.textContent = 'Подписаться';
                        currentBtn.id = event.target.id;
                        location.reload();
                    } else {
                        console.log('ошибка');
                    }
                } catch (error) {
                    console.log(error);
                }
            } else {
                alert('Авторизуйтесь!');
            }
        });
    });
}

