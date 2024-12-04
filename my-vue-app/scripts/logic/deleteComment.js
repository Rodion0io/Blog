import { deleteCommentRequest } from "../requests/deleteCommentRequest";
import { checkLifeCycle } from "./checkLifeCycle";

export async function deleteComment(){
    let token = localStorage.getItem('token');
    let deleteButton = document.querySelector('.delete-icon');

    

    deleteButton.addEventListener('click', () => {
        let commentId = document.querySelector('.comment').id;
        if (token === null || !checkLifeCycle(token)){
            // пока алерт
            alert('Войдите в аккаунт');
        }
        else{
            deleteCommentRequest(token, commentId).then(() => location.reload())
            .catch(error => console.log(error));
        }
    })
}