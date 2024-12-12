import { createWrapperBlock } from "./createWrapperBlock";
import { getConcretePost } from "../requests/getConcretPost";
import fullPostPage from "../components/fullPostPage/fullPostPage";
import { PARENT_BLOCK } from "../../constans";

export function openComments(){
    let commentButtons = document.querySelectorAll('.comment-icon');
    let parentBlock = document.getElementById('app');
    let token = localStorage.getItem('token');

    commentButtons.forEach(button => {
        button.addEventListener('click', async (event) => {
            let post = event.target.closest('.post-component');
            let postId = post.id;
            parentBlock.innerHTML = '';
            let concretePostBlock = document.createElement('section');
            concretePostBlock.className += 'section-post';
            let container = document.createElement('div');
            container.className += 'container concrete-post';
            let sectionPosts = document.createElement('div');
            sectionPosts.className += 'section-posts';
            container.appendChild(sectionPosts);
            concretePostBlock.appendChild(container);
            PARENT_BLOCK.appendChild(concretePostBlock); 
                
            await getConcretePost(postId, token).then(async data => {
                window.history.pushState({}, 'some title', `/${postId}`);
                await fullPostPage(data);
                
                
            })
            await createWrapperBlock();
            await document.querySelector('.comments-block').scrollIntoView({
                behavior: "smooth",
                block: "start", 
                inline: "nearest"
            });
        })
    })
}