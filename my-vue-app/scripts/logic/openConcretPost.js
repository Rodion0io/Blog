import { getConcretePost } from "../requests/getConcretPost";
import { informationCommunity } from "../requests/informationCommunity";
import fullPostPage from "../components/fullPostPage/fullPostPage";
import post from "../components/post/post";

export function openConcretePost(){
    let posts = document.querySelectorAll('.post-name');
    let token = localStorage.getItem('token');
    

    posts.forEach(element => {
        element.addEventListener('click', (e) => {
            //Вопрос: нужно ли здесь проверку на токен
            let postId = e.target.closest('.post-component').id;
            getConcretePost(postId).then(data => {
                console.log(data);
                document.querySelector('.button-block').remove();
                document.querySelector('.section-content').remove();        
                document.querySelector('.pagination-block').remove(); 
                document.querySelector('.section-posts').innerHTML = '';
                window.history.pushState({}, 'some title', `/${postId}`);
                fullPostPage(data);
            })
            
        })
    })
}