import { addCommentRequest } from "../requests/addCommentRequest";
import { checkLifeCycle } from "./checkLifeCycle";

export function addComment(){
    let button = document.querySelector('.send-comment');
    let token = localStorage.getItem('token');
    let input = document.querySelector('.input-block-text-area');
    let postId = document.querySelector('.post-component').id;


    button.addEventListener('click', () => {
        let inputValue = input.value;
        if (inputValue === '' || inputValue === ' '){
            alert('Поле должно быть заполненным');
        }
        else{
            if (token === null || !checkLifeCycle(token)){
                //Пока что алерт
                alert('Только авторизованный пользователь может оставлять комментарии');
            }
            else{
                addCommentRequest(token, postId, {"content": inputValue}).then(() => location.reload())
                .catch((error) => console.log(error));
            }
        }
    })
}