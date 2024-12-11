import { getConcretePost } from "../requests/getConcretPost";
import fullPostPage from "../components/fullPostPage/fullPostPage";
import { PARENT_BLOCK } from "../../constans";
import { createWrapperBlock } from "./createWrapperBlock";


export function openConcretePost(){
    let posts = document.querySelectorAll('.post-name');
    let token = localStorage.getItem('token');
    let parentBlock = document.getElementById('app');
    

    posts.forEach(element => {
        element.addEventListener('click', async (e) => {
            let postId = e.target.closest('.post-component').id;
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
                
            await getConcretePost(postId, token).then(data => {
                window.history.pushState({}, 'some title', `/${postId}`);
                fullPostPage(data);
            })
            await createWrapperBlock();
        })
    })
}