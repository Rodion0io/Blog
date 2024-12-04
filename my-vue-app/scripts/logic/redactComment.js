import { redactCommentRequest } from "../requests/redactCommentRequest";
import { checkLifeCycle } from "./checkLifeCycle";

export async function redactComment(commentId) {
    let token = localStorage.getItem('token');
    // let commentId;

    // let redactButton = document.querySelectorAll('.redact-icon');
    // for (const elem of redactButton) {
    //     elem.addEventListener('click', async (event) => {
    //         commentId = event.target.closest('.comment').id;
    //             await onRedactInput();
    //     });
    // }

    let redactBtn = document.querySelector('.redact-button');
        await redactBtn.addEventListener('click', () => {
            let redactInputValue = document.querySelector('.redact-input').value;
            if (!redactInputValue || redactInputValue === ' ') {
                alert('Введите текст для редактирования');
            }

            if (token === null || !checkLifeCycle(token)) {
                alert('Войдите в аккаунт');
            } else {
                redactCommentRequest(token, commentId, { content: redactInputValue })
                    .then(() => location.reload())
                    .catch((error) => console.error('Ошибка при редактировании:', error));
            }
        });
}
