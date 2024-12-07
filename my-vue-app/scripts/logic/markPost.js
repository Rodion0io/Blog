import { likeRequest } from "../requests/likeRequest";
import { unlikeRequest } from "../requests/unlikeRequest";
import { checkLifeCycle } from "./checkLifeCycle";

export async function markPost() {
    let token = localStorage.getItem('token');

    let likeButton = document.querySelectorAll('.like-icon');

    likeButton.forEach(element => {
        element.addEventListener('click', async (e) => {
            if (token !== null){
                if (checkLifeCycle(token)) {
                    let postId = e.target.id;
                    // console.log(postId);
    
                    try {
                        let data = await likeRequest(token, postId);
                        if (data === null) {
                            e.target.setAttribute('src', '../../public/slectedHeart.svg');
                            let countLikesElement = e.target.closest('.post-component').querySelector('.count-likes');
                            let currentCount = parseInt(countLikesElement.textContent, 10);
                            countLikesElement.textContent = currentCount + 1;
                            console.log('успех', data);
                        } else {
                            console.error('Ошибка', data.message);
                        }
                    } catch (error) {
                        console.error('Ошибка при выполнении likeRequest:', error);
                        await unlikeRequest(token, postId);
                        e.target.setAttribute('src', '../../public/heart.svg');
                        let countLikesElement = e.target.closest('.post-component').querySelector('.count-likes');
                        let currentCount = parseInt(countLikesElement.textContent, 10);
                        countLikesElement.textContent = currentCount - 1;
                    }
                } else {
                    window.location.pathname = '/login';
                }
            }
            else{
                window.location.pathname = '/login';
            }
        });
    });
}