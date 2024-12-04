import { deleteCommentRequest } from "../requests/deleteCommentRequest";
import { checkLifeCycle } from "./checkLifeCycle";

export function deleteComment(){
    let token = localStorage.getItem('token');
    let deleteButton = document.querySelectorAll('.delete-icon');

    deleteButton.forEach(el => {
        el.addEventListener('click', (event) => {
            let commentId = event.target.closest('.comment').id;
            if (token === null || !checkLifeCycle(token)){
                alert('Войдите в аккаунт');
            }
            else{
                deleteCommentRequest(token, commentId).then(() => location.reload())
                .catch(error => console.log(error)); 
            }
        })
    })
}