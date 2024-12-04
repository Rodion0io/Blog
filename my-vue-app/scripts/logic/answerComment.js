import { checkLifeCycle } from "./checkLifeCycle";
import { addCommentRequest } from "../requests/addCommentRequest";

export async function answerComment(parentCommentId){
    let postId = document.querySelector('.post-component').id;
    let token = localStorage.getItem('token');
    let sendButton = document.querySelector('.answer-button');

    await sendButton.addEventListener('click', () => {
        let answerInputValue = document.querySelector('.answer-input').value;
        if (!answerInputValue || answerInputValue === ' ') {
            alert('Введите текст для редактирования');
        }

        if (token === null || !checkLifeCycle(token)) {
            alert('Войдите в аккаунт');
        } else {
            addCommentRequest(token, postId, { 'content': answerInputValue, "parentId": parentCommentId })
                .then(() => location.reload())
                .catch((error) => console.error('Ошибка при редактировании:', error));
        }
    })
}