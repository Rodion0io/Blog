import { subscribeGroupRequest } from "../requests/subscribeGroupRequest";
import { checkLifeCycle } from "./checkLifeCycle";

export function subscribe() {
    let token = localStorage.getItem('token');
    let subscribeButton = document.querySelectorAll('.subscribe');

    subscribeButton.forEach(currentBtn => {
        currentBtn.addEventListener('click', async (event) => {
            if (token !== null && checkLifeCycle(token)) {
                // let parentBlockId = event.target.closest('.subscribe').id;
                try {
                    let request = await subscribeGroupRequest(token, event.target.id);
                    if (request === null) {
                        currentBtn.className = 'btn unsubscribe';
                        currentBtn.textContent = 'Отписаться';
                        currentBtn.id = event.target.id;
                        window.location.pathname = '/communities';
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


